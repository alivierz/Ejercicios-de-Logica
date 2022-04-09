function toArray(obj) {
    const seQuePuedoVolar = [];

    for(property in obj){
        seQuePuedoVolar.push([property , obj[property]])
    }

    return seQuePuedoVolar;
}

module.exports = toArray;