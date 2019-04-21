const r = require('../helpers/request')

exports.test = async (title = '') => {
    const response = await r.request({
        uri: '/todos',
        method: 'POST',
        body: {
            title,
        },
        json: true
    })

    if (typeof response !== 'object') {
        throw new Error('Response is invalid.')
    }

    const {success, data} = Object.assign({}, response)

    return true
}