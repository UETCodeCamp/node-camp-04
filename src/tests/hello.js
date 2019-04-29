const r = require('../helpers/request')

exports.test = async () => {
    const response = await r.request({
        uri: '/',
        method: 'GET'
    })


    if (response !== 'Hello, world!') {
        throw new Error(`Wrong response: GET /`)
    }

    console.log('Test route / ok.')

    return true
}