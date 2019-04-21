const r = require('../helpers/request')

exports.test = async(id) => {
    const response = await r.request({
        uri: `/todos/${id}`,
        method: 'DELETE'
    })

    console.log('test DELETE /todos ok.')

    return true
}