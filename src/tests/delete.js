const r = require('../helpers/request')

exports.test = async (id) => {
    const response = await r.request({
        uri: `/todos/${id}`,
        method: 'DELETE',
        json: true
    })

    const {success, data, message} = Object.assign({}, response)
    if (!success) {
        throw new Error(message)
    }

    console.log('test DELETE /todos ok.')

    return true
}