import React,{Component} from 'react';
import Axios from 'axios'
import {Row, Card} from './styles/ShowAll'
import {Link} from 'react-router-dom'
// import { Container } from './styles';

class ShowProducts extends Component{
  render(){
    return( 
      <Row>
        {this.state.produtos ? this.state.produtos.data.map((prod,i) =>{return (
          <Card key={i}>
            <Link to={`${prod.nome}`}><img src={Axios.defaults.baseURL+prod.imgs[0]}alt={`img${i}`}/></Link>
            <h3>{ prod.nome}</h3>
            <Row>
            <h2>{`R$${prod.preco}`}</h2>
            <h2>{`R$${prod.preco + 20*prod.preco/100}`}</h2>
            </Row>
          </Card>
          )}) : 'teste'}
    </Row>
      )
    }

    state = {
      produtos: null
      
    }

    async componentDidMount(){
      const prod = await Axios.get('/produtos')
      console.log(prod)
      this.setState({
        produtos: prod
      })
    }
}

export default ShowProducts;