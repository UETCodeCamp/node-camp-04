const r = require('../helpers/request')

exports.test = async() => {
    const response = await r.request({
        uri: '/hello',
        method: 'DELETE'
    })

    if (response !== 'world deleted') {
        throw new Error('Wrong response.')
    }

    return true
}