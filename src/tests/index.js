const hello = require('./hello')
const get = require('./get')
const post = require('./post')
const put = require('./put')
const del = require('./delete')

const randomstring = require('randomstring')

exports.tests = async () => {
    console.log('Run all tests.')

    const title = randomstring.generate(10)

    await hello.test()
    // await post.test(title)
    // await get.test()
    // await put.test()
    // await del.test()
}
