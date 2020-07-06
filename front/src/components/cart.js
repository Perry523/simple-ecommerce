import React from 'react'
import {Cart,Products, Page,TotalPrice,Product,Col, Row,Row2} from './styles/Cart'
import { connect } from 'react-redux'
import Axios from 'axios'
import NavBar from './NavBar'
import { BsTrash, BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs";

class cart extends React.Component {

    render(){
        return (

            <Page>
                <NavBar />
            <Page style={{'display':'flex'}}>
            <Cart>
                <Products>
        <h2>Carrinho({this.props.cart.length})</h2>
                    {this.props.cart ? this.props.cart.map((prod,i) =>{
                    return(
                    <Product>
                        <img src={Axios.defaults.baseURL+prod.imgs[0]}/>
                        <Col style={{'flex':1}}>
                            <p>{`${prod.nome}`}</p>
                            <sub><b>Cor:</b>{` ${prod.variant}`}</sub>
                            <h4>{`R$ ${prod.preco}`}</h4>
                        </Col>
                        <Col  style={{'align-items': 'flex-end'}}>
                            <BsTrash onClick={()=>this.remove(i)} style={{'cursor':'pointer'}} size={20}></BsTrash>
                            <Row>
                                <BsFillDashCircleFill onClick={()=> this.subtrair(i)} style={{'cursor':'pointer'}}/>
                                <span>{prod.quant}</span>
                                <BsPlusCircleFill onClick={() => this.soma(i)} style={{'cursor':'pointer'}}/>
                            </Row>
                        </Col>
                    </Product>
                    )
                    }) : ''}
                </Products>
                <TotalPrice>
                    <Col style={{'width': '90%'}}>
                    <h1>Sumário</h1>
                    <Row2><p>Subtotal:</p><p>R${this.props.cart.length > 0 ? this.props.cart.map(prod => prod.preco*prod.quant).reduce(a => {return <h2>{a}</h2>}) : 0}</p></Row2>
                    <Row2 style={{'border-bottom':'1px solid #eee','margin-bottom':'10px','padding-bottom':'10px'}}><p>Frete:</p><p>R${0}</p></Row2>
                    <Row><h3>Total:</h3><h2>R${this.props.cart.length > 0 ? this.props.cart.map(prod => prod.preco*prod.quant).reduce(a => {return <h2>{a}</h2>}) : 0 + this.state.frete}</h2></Row>
                    <button>COMPRAR</button>
                    </Col>
                </TotalPrice>
            </Cart>
            </Page>
            </Page>
        )
    }
    state = {
        frete: 0,
        total: 0
    }
    soma(i){
        this.props.dispatch({
            type: 'SOMAR',
            i,
        })
    }
    subtrair(i){
        this.props.dispatch({
            type: 'SUBTRAIR',
            i,
        })
    }
    remove(i){
        this.props.dispatch({
            type: 'RMV',
            i,
        })
    }
    componentDidMount(){
        const total = this.props.cart ? this.props.cart.map(prod => prod.preco).reduce(a => {return <h2>{a}</h2>}) : 0
        this.setState({
            total:total
        })
    }
}
export default connect(state =>({
    cart: state.cart
}))(cart)