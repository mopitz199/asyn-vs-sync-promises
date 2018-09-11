const request = require('request');

function getPerson(id){
    return new Promise((resolve, reject) => {
        request(
            `https://swapi.co/api/people/${id}/`,
            { json: true },
            (err, res, body) => {
                if (err) {
                    reject(err)
                }
                resolve(body.name)
            }
        );
    })
}


function firstCall(){
    let nombres = []
    getPerson(1)
    .then(name => {
        nombres.push(name);
        return getPerson(2);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(3);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(4);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(5);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(6);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(7);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(8);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(9);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(10);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(11);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(12);
    })
    .then(name => {
        nombres.push(name);
        return getPerson(13);
    })
    .then(name => {
        nombres.push(name);
        console.log("primera llamada")
        console.log(nombres)
    })
    .catch(error => console.log(error))
}


function secondCall(){
    let ids = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let promesas = ids.map( id => getPerson(id))
    Promise.all(promesas)
        .then(nombres => {
            console.log("segunda llamada")
            console.log(nombres)
        })
        .catch(error => console.log(error))
}

firstCall()
secondCall()