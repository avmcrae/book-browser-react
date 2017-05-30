/* global config */

const getEnvProperty = (property) => {
    if (typeof config == 'undefined') {
        return null;
    }

    return config[property];
};

export default getEnvProperty;