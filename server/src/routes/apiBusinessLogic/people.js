// Import models
const modelsDir = '../../models/';
const Person = require(`${modelsDir}Person`);

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

module.exports = {
    test,
    getPeople
}