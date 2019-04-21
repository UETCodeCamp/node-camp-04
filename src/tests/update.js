const r = require('../helpers/request')
const randomstring = require('randomstring')

exports.test = async (id) => {
    const title = randomstring.generate(10)

    await r.request({
        uri: `/todos/${id}`,
        method: 'POST',
        body: {
            title,
        },
        json: true,
    })

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

    if (data.title !== title) {
        throw new Error('Cannot update todo with new title.')
    }

    console.log('test UPDATE /todos ok.')

    return true
}