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


    const {success, data, message} = Object.assign({}, response)
    if (!success) {
        throw new Error(message)
    }

    if (typeof data !== 'object' || !data._id) {
        console.log('Wrong response.')
    }

    console.log('test POST /todos ok.')

    return data._id
}
