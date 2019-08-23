// Import models
const modelsDir = '../../models/';
const Person = require(`${modelsDir}Person`);

const test = () => new Promise((resolve, reject) => resolve({ msg: 'People path works'}));

const getPeople = (req) => new Promise((resolve, reject) => {
    const errors = {}
    Person.find()
        .then(people => {
            resolve(people)
        })
        .catch(err => reject(err));
});

module.exports = {
    test,
    getPeople
}