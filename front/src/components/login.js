import React from 'react'
import {Case, Box} from './styles/login'
import {Form, Input} from '@rocketseat/unform'
import {Link} from 'react-router-dom'
export default function login() {
    return (
        <Case>
                <img alt="logo" height="200px" width="30%" src={process.env.PUBLIC_URL+'./imgs/logo2.png'}></img>
                <Form>
                <Box>
                    <label>Email</label>
                    <Input name="email"/>   
                </Box>
                <Box>
                    <label>Senha</label>
                    <Input name="password"/>
                </Box>
                <div><p>Não tem uma conta?   <Link to="/cadastro">Cadastre-se</Link></p></div>
                
                <button type="submit">Entrar</button>
            </Form>
        </Case>
    )
}
