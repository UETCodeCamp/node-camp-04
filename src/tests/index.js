const hello = require('./hello')
const get = require('./get')
const post = require('./post')
const update = require('./update')
const del = require('./delete')

const randomstring = require('randomstring')

exports.tests = async () => {
    console.log('Run all tests.')

    const title = randomstring.generate(10)

    console.log(title)

    await hello.test()
    const todoId = await post.test(title)
    await get.test(todoId)
    await update.test(todoId)
    await del.test(todoId)
}
