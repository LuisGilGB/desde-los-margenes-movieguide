const slugify = require('../../utils/slugify.js');
const isEmpty = require('../../validation/is-empty.js');

// Import models
const modelsDir = '../../models/';
const Person = require(`${modelsDir}Person`);
const {getPersonSchemaAttributes} = require(`${modelsDir}person/functions`);

// Import validators
const validatePersonToAdd = require('../../validation/person/addPerson.js');

const test = () => new Promise((resolve, reject) => resolve({ msg: 'People path works'}));

const getPeople = (req, res) => new Promise((resolve, reject) => {
    const errors = {}
    Person.find()
        .then(people => {
            const errors = {}
            if (!(people && people.length)) {
                const errMsg = "There are no people in the database."
                errors.people = errMsg;
                res.status(404).json(errors);
                reject(errMsg);
            }
            resolve(people);
        })
        .catch(err => reject(err));
});

const checkAliasSlugExists = slug => new Promise((resolve, reject) => {
    Person.find({ uniqueAliasSlug: slug })
        .then(match => resolve(!isEmpty(match)))
        .catch(err => reject(err));
});

const getAvailableAlias = (slug, tryNum = 0) => new Promise((resolve, reject) => {
    if (tryNum > 15) {
        return reject("More than 16 unsuccessful attempts of getting a unique alias? Something may not be working right (we put this limit as a protection against infinite loops).")
    }
    const slugDraft = tryNum ? `${slug}-${tryNum}` : slug;

    checkAliasSlugExists(slugDraft)
        .then(match => match ? resolve(getAvailableAlias(slug, tryNum + 1)) : resolve(slugDraft))
        .catch(err => reject(err));
});

const getUniqueAliasSlug = (name = '') => new Promise((resolve, reject) => {
    const slug = slugify(name);

    getAvailableAlias(slug)
        .then(finalSlug => resolve(finalSlug))
        .catch(err => reject(err));
});

const addPerson = (req, res) => new Promise((resolve, reject) => {
    const { body = {}, query } = req;
    const { forceCreation = false } = query;
    const { errors, isValid } = validatePersonToAdd(body);

    if (!isValid) {
        reject({status: 400, errors});
    }

    const {name, description, pic} = body;

    Person.find({ name: name })
        .then(people => {
            if (!forceCreation && people && people.length) {
                errors.name = "One or more people with this name already exists";
                errors.matchedPeople = people;
                reject({status: 400, errors});
            } else {
                getUniqueAliasSlug(name)
                    .then(uniqueAliasSlug => {
                        const newPerson = new Person({
                            name: name,
                            uniqueAliasSlug,
                            description: description || '',
                            pic: pic || ''
                        });
                        // Save the new person into the database and return it as the service response.
                        newPerson.save()
                            .then(person => resolve(person))
                            .catch(err => reject(err));
                    })
                    .catch(err => reject(err));
            }
        })
        .catch(err => reject(err));
});

const getPerson = (req, res) => new Promise((resolve, reject) => {
    const {params} = req;
    const {personId: uniqueAliasSlug} = params;

    Person.find({ uniqueAliasSlug })
        .then(people => {
            if (!(people && people.length)) {
                const errors = {}
                errors.msg = "The requested person doesn't exist"
                reject({status: 400, errors});
            } else {
                resolve(people[0]);
            }
        })
        .catch(err => reject(err));
});

const updatePerson = (req, res) => new Promise((resolve, reject) => {
    const {body = {}, params} = req;
    const {personId: uniqueAliasSlug} = params;

    Person.findOneAndUpdate(
        { uniqueAliasSlug },
        {
            ...getPersonSchemaAttributes(body)
        },
        { new: true }
    ).then(updatedPerson => resolve(updatedPerson)
    ).catch(err => reject(err));
});

module.exports = {
    test,
    getPeople,
    addPerson,
    getPerson,
    updatePerson
}