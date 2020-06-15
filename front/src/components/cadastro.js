import React from 'react'
import index from './index'
import {Case, Box ,Row} from './styles/login'
import {Form, Input} from '@rocketseat/unform'
import {Link} from 'react-router-dom'
export default function cadastro() {
    return (
        <Case>
            <img src={window.location.origin + '/imgs/logo2.png'}></img>
            <Form>
                <Box>
                <label>Nome</label>
                <Input name="nome"/>

                </Box>
                <Box>
                <label>Email</label>
                <Input name="email"/>
                    
                </Box>
                
                <Row>
                <Box>
                    <label>Senha</label>
                    <Input name="senha"/>
                    
                    </Box>
                    <Box>
                    <label>Confirmar Senha</label>
                    <Input name="confirmarSenha"/>
                    
                </Box>
                </Row>
                <div>
                <p>Já tem uma conta? <Link to="/login">Entrar</Link></p></div>
                <button type="submit">Confirmar</button>
                <Link to="/" style={{'width':'100%'}}><button type="button" style={{'background-color':'red','width':'100%'}}>Sair</button></Link>
            </Form>
        </Case>
    )
}
