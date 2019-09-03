const {KEYS} = require ('./consts.js');

const getPersonSchemaAttributes = (obj = {}) => KEYS.reduce((obj0, key) => obj[key] !== undefined ? {
    ...obj0,
    [key]: obj[key]
} : obj0, {});

module.exports = {
    getPersonSchemaAttributes
}