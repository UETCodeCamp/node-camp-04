const tests = require('./tests/index')
const pusher = require('@uet/pusher')

exports.run = async () => {
    console.log('Student host:', process.env.STUDENT_HOST)
    console.log('Submit host:', process.env.SUBMIT_HOST)

    throw new Error('The test is not ready.')

    try {
        await tests.tests()

        await pusher.submit({
            is_pass: true,
        })
    } catch (error) {
        console.log('Student error:', error.message)

        await pusher.submit({
            is_pass: false,
            message: error.message || ''
        })
    }
}
