const r = require('../helpers/request')

exports.test = async (id) => {
    const response = await r.request({
        uri: `/todos/${id}`,
        method: 'GET',
        json: true,
    })

    const {success, data, message} = Object.assign({}, response)
    if (!success) {
        throw new Error(message)
    }

    if (typeof data !== 'object' || !data._id) {
        console.log('Wrong response.')
    }

    if (data._id !== id) {
        throw new Error('Wrong response.')
    }

    console.log('test GET /todos ok.')

    return true
}