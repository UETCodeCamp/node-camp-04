const r = require('../helpers/request')

exports.test = async (id) => {
    const response = await r.request({
        uri: `/todos/${id}`,
        method: 'DELETE',
        json: true
    })

    if (typeof response !== 'object') {
        throw new Error(`Response is invalid. DELETE /todos/${id}`)
    }

    const {success, data, message} = Object.assign({}, response)
    if (!success) {
        throw new Error(`Cannot delete a todo. Message: ${message}`)
    }

    console.log('test DELETE /todos ok.')

    return true
}