const r = require('../helpers/request')

exports.test = async() => {
    const response = await r.request({
        uri: '/hello',
        method: 'PUT'
    })

    if (response !== 'world updated') {
        throw new Error('Wrong response.')
    }

    return true
}