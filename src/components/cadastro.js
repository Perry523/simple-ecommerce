import React from 'react'
import index from './index'
import {Case, Box ,Row} from './styles/login'
import {Form, Input} from '@rocketseat/unform'
import {Link} from 'react-router-dom'
import Axios from 'axios'
export default class cadastro extends React.Component{
    render(){
        return (
            <Case>
                <img src={window.location.origin + '/imgs/logo2.png'}></img>
                <Form onSubmit={this.register}>
                    {this.state.errors.map((error,i) => <h3 key={i}>{error}</h3>)}
                    <Box>
                    <label>Nome</label>
                    <Input name="username"/>
    
                    </Box>
                    <Box>
                    <label>Email</label>
                    <Input name="email"/>
                        
                    </Box>
                    
                    <Row>
                    <Box>
                        <Input name="password"/>
                        
                        </Box>
                        <Box>
                        <label>Confirmar Senha</label>
                        <Input name="checkPassword"/>      
                    </Box>
                    </Row>
                    <div>
                    <p>Já tem uma conta? <Link to="/login">Entrar</Link></p></div>
                    <button type="submit">Confirmar</button>
                    <Link to="/" style={{'width':'100%'}}><button type="button" style={{'backgroundColor':'red','width':'100%'}}>Sair</button></Link>
                </Form>
            </Case>
        )
    }
    state = {
        errors: []
    }
    register = async data =>{
        console.log(data)
        const errors = []
        if(!data.username) errors.push('O campo de nome não foi preenchido')
        else if(!data.email) errors.push('O campo de E-mail não foi preenchido')
        else if(!data.password) errors.push('O campo de senha não foi preenchido')
        else if(data.password !== data.checkPassword) errors.push('A senha não confere')
        else{
            await Axios.post('/register', data).then(resp => console.log(resp))
            //.catch(e => e.response.data.map(error => errors.push(error.message)))
            .catch(errors.push("Usuário ja existente"))
        }
        this.setState({
            errors:errors
        })
    }
}
