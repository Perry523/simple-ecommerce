import React from 'react'
import {Cart,Products, Page,TotalPrice,Product,Col, Row} from './styles/Cart'
import { connect } from 'react-redux'
import Axios from 'axios'
import { BsTrash, BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs";

class cart extends React.Component {

    render(){
        return (
            <Page>
            <Cart>
                
                <Products>
                    {this.props.cart ? this.props.cart.map(prod =>{
                    return(
                    <Product>
                        <img src={Axios.defaults.baseURL+prod.imgs[0]}/>
                        <Col style={{'flex':1}}>
                            <p>{`${prod.nome}`}</p>
                            <sub><b>Cor:</b>{` ${prod.variant}`}</sub>
                            <h4>{`R$ ${prod.preco}`}</h4>
                        </Col>
                        <Col  style={{'align-items': 'flex-end'}}>
                            <BsTrash onClick={this.remove} style={{'cursor':'pointer'}} size={20}></BsTrash>
                            <Row>
                                <BsFillDashCircleFill onClick={this.soma} style={{'cursor':'pointer'}}/>
                                <span>{prod.quant}</span>
                                <BsPlusCircleFill onClick={this.soma} style={{'cursor':'pointer'}}/>
                            </Row>
                        </Col>
                    </Product>
                    )
                    }) : ''}
                </Products>
                <TotalPrice>
                    <Col style={{'width': '90%'}}>
                    <h1>Sumário</h1>
                    <Row><p>Subtotal:</p><p>{this.state.total}</p></Row>
                    <Row style={{'border-bottom':'1px solid #eee','margin-bottom':'10px','padding-bottom':'10px'}}><p>Frete:</p><p>{0}</p></Row>
                    <Row><p>Total:</p><p>{this.state.total + this.state.frete}</p></Row>
                    
                    </Col>
                </TotalPrice>
            </Cart>
            </Page>
        )
    }
    state = {
        frete: 0,
        total: 0
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