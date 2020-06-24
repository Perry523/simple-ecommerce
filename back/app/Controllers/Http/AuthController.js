'use strict'

class AuthController {
    async store({request, response, auth}){
        const {email, password} = request.all() 
        const token = auth.attempt(email,password)
        return token
    }
}

module.exports = AuthController
