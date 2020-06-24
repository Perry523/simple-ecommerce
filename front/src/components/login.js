import React from 'react'
import {Case, Box} from './styles/login'
import Axios from 'axios'
import {Form, Input} from '@rocketseat/unform'
import {Link} from 'react-router-dom'
export default class login extends React.Component {
    state ={
        errors: []
    }
    render(){
        return (
            <Case>
                    <img alt="logo" height="200px" width="30%" src={process.env.PUBLIC_URL+'./imgs/logo2.png'}></img>
                    <Form onSubmit={this.login}>
                        {this.state.errors.map(e => <h3 key="errors">{e}</h3>)}
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
    login = async data =>{
        const errors = []   
        if(!data.email) errors.push('O campo de E-mail não foi preenchido')
        else if(!data.password) errors.push('O campo de senha não foi preenchido')
        else{
            Axios.post('/login', data).then(resp => {
                const token = JSON.stringify(resp.data.token)
                console.log(token)
                window.localStorage.setItem('token',token) 
            })
            .catch(error => errors.push("Dados incorretos"))
            //.catch(e => e.response.data.map(error => errors.push(error.message)))
        }
        this.setState({
            errors:errors
        })
    }
}
