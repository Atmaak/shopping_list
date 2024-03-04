const passwordHash = require('password-hash')

const { MONGO } = require('../service/_index')

const create_user = async (req, res) => {
    const data = req.body
    const user = {
        username: data.username,
        password: passwordHash.generate(data.password),
        email: data.email,
        shoppingLists: []
    }

    const users = MONGO.collection('users')

    const _user = await users.insertOne(user)

    res.send(_user)

}

const sign_in = async (req, res) => {
    const data = req.body
    const users = MONGO.collection('users')
    const user = await users.findOne({
        username: data.username
    })

    if(!user) return res.send({err: true, message: "Účet neexistuje!"})
    if(!passwordHash.verify(data.password, user.password)){
        return res.send({ err: true, message: "Špatné heslo" })
    }
    res.send(user)
}

module.exports = {
    create_user,
    sign_in
}