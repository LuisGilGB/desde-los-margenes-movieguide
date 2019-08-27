const {KEYS} = './consts.js';

const getPersonSchemaAttributes = (obj = {}) => KEYS.reduce((obj0, key) => object[key] !== undefined ? {
    ...obj0,
    [key]: object[key]
} : obj0, {});

module.exports = {
    getPersonSchemaAttributes
}