const r = require('../helpers/request')

exports.test = async (id) => {
    const response = await r.request({
        uri: `/todos/${id}`,
        method: 'POST'
    })

    console.log('test UPDATE /todos ok.')

    return true
}