import React,{Component} from 'react'
import Axios from 'axios'
import './styles/index.css'
import {Show, Row, Col, Buttons, Images,Col2} from './styles/ExibirProduto'
import { BsFillPlusCircleFill, BsDashCircleFill } from "react-icons/bs";
import {connect} from 'react-redux'
import NavBar from './NavBar'
class ExibirProduto extends Component {
    state = {
        produto: null,
        variant: null,
        src: null,
        quant: 1,
    }
    render() {
        return (
            <>
            <NavBar/>
                {this.state.produto === null ? 'teste' : 
                <Show>
                    <Row>
                        <Images>
                            <img src={this.state.src === null ? Axios.defaults.baseURL+this.state.produto.imgs[0] : Axios.defaults.baseURL+this.state.src}/>
                            <Row>
                                {this.state.produto.imgs.map((img,i) => {
                                    return(
                                        <img key={i} onMouseEnter={e=> this.mouseEnter(e,i)} onMouseLeave={this.mouseLeave} src={Axios.defaults.baseURL+ img}/>
                                    )
                                })}
                            </Row>
                        </Images>
                        <Col style={{'justifyContent':'space-between'}}>
                            <Col2>
                            <p>{this.state.produto.nome}</p>
                            <h2>R$ {this.state.produto.preco}</h2>

                            </Col2>
                            <p>Cor:{this.state.variant}</p>
                            <Buttons>

                            {this.state.produto.variants.map((variante,i) => {
                                return (
                                    <img key={i} onClick={(e)=> this.selectVariant(e,i)} alt={i} src={Axios.defaults.baseURL+variante.path}/>
                                    )
                                } )}
                                </Buttons>
                                <p>Quantidade:</p>
                            <Row>
                                <Row style={{'width':'30%','paddingLeft':'10px','alignItems':'center'}}>
                                    <BsDashCircleFill onClick={this.subtrair} style={{'min-width':'15px','cursor':'pointer'}}/>
                                    <p style={{'margin':'0px 10px   '}}>{this.state.quant}</p>
                                    <BsFillPlusCircleFill onClick={this.somar} style={{'min-width':'15px','cursor':'pointer'}}/>
                                </Row>
                                <button onClick={e => this.addProd(this.state.produto)}>Adicionar ao carrinho</button>
                            </Row>
                        </Col>
                    </Row>        
                </Show>}
            </>
        )
                        
    }
    addProd = prod =>{
        prod.quant = this.state.quant
        prod.variant = this.state.variant
        this.props.dispatch({
            type: 'ADD',
            prod,
        })
    }
    somar = e =>{
        let num = this.state.quant
        num++
        this.setState({
            quant: num
        })
    }
    subtrair = e =>{
        let num = this.state.quant
        if(num >1) num--
        this.setState({
            quant: num
        })
    }
    selectVariant = (e,i) =>{
        this.setState({
            variant: this.state.produto.variants[i].variant,
            src: this.state.produto.variants[i].path
        })
    }
    mouseEnter = (e,i) =>{
        e.target.classList.add("active")
        this.setState({
            src: this.state.produto.imgs[i]
        })
        console.log(e.target)
    }
    mouseLeave = e =>{
        e.target.classList.remove("active")
        console.log(e.target)
    }
    async componentDidMount(){

        let prods = await Axios.get(`/produtos/${this.props.match.params.produto}`)
        console.log(prods.data)
        this.setState({
            produto: prods.data
        })
    }
}
export default connect()(ExibirProduto)