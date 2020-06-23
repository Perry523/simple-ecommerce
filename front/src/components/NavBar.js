import React from 'react'
import {NavBar, Col,Row2, Links} from './styles/navBar'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
export default function Nav() {
    return (
        <>
        <NavBar>
            <Row2>
                <Link style={{'justifyContent':'center','flex':1}}><img src={window.location.origin + '/imgs/logo2.png'}></img></Link>
                <input placeholder="Digite o que procura"/>
                <Col style={{'flexGrow':'1','margin':'0px'}}>
                
                <Link to="/carrinho"><p>Carrinho</p><AiOutlineShoppingCart style={{'flex':1,'paddingRight':'5px'}}/></Link>
                <Link to="/home"><p>Meu Perfil</p><BsPersonFill style={{'flex':1,'paddingRight':'5px'}}></BsPersonFill ></Link>
                </Col>
            </Row2>
            <Links style={{'height': '50px','justifyItems':'center'}}>
                <Link> <p>Teste</p> </Link>
                <Link> <p>Teste</p> </Link>
                <Link> <p>Teste</p> </Link>
                <Link> <p>Teste</p> </Link>
            </Links>
        </NavBar>
        </>
    )
}
