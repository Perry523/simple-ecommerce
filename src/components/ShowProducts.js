import React,{Component} from 'react';
import Axios from 'axios'
import {Grid,Page, Card, SideBar,Products,Filter,Row} from './styles/ShowAll'
import {Link} from 'react-router-dom'
// import { Container } from './styles';

class ShowProducts extends Component{
  render(){
    return(
      <Page>
      <SideBar>
        <label>Categorias</label>
        {this.state.categorias ? this.state.categorias.map((cat,i) =>{
          return(<span key={i} onClick={e =>this.filterCategory(e,cat)}>{cat.category}</span>)
        } ) : ''}
      </SideBar>
      <Products>
        <Filter>
            <Row><h4>Filtrar:</h4>
            <input onChange={e => this.setState({minPrice:e.target.value})}/>
            <input onChange={e => this.setState({maxPrice:e.target.value})}/>
            <select onChange={this.brandFilter} value={this.state.marca}>
              {this.state.marcas.map((marca,i) =>{
                return(<option key={i}  value={marca}>{marca}</option>)
              })}
            </select>
            <button>Filtrar</button>
            </Row>
        </Filter>
      <Grid>
        {this.state.produtosExibidos ? this.state.produtosExibidos.map((prod,i) =>{return (
          <Card key={i}>
            <Link to={`${prod.nome.replace(/ /g, '_')}`}><img src={Axios.defaults.baseURL+prod.imgs[0]}alt={`img${i}`}/></Link>
            <div>
              <p>{prod.nome}</p>
              <h2>{`R$${prod.preco}`}</h2>
            </div>
          </Card>
          )}) : ''}
    </Grid>
    </Products>
    </Page>
      )
    }

    state = {
      produtos: null,
      produtosExibidos: null,
      categorias: [],
      marca: '',
      marcas: [],

    }

    async componentDidMount(){
      const prod = await Axios.get('/produtos').then(resp => resp.data)
      const cat = await Axios.get('/categories').then(resp => resp.data)
      console.log(prod)
      this.setState({
        produtos: prod,
        categorias: cat,
        produtosExibidos: prod,
      })
    }
    brandFilter = async e =>{
      const data = [] 
      this.state.produtos.forEach(prod => {
        if(prod.marca === e.target.value){
          data.push(prod)
        } 
      })
      this.setState({produtosExibidos: data, marca: e.target.value})
    }
    filterCategory = async (e,cat) =>{
      const data = await Axios.post('/filterCategory',{category: cat.category}).then(resp => resp.data)
      let brands = new Set()
      data.forEach(product =>{
        brands.add(product.marca)
      })
      let marcas = [...brands]
      this.setState({
        produtos: data,
        marcas: marcas,
        produtosExibidos: data,
      })
    } 
}

export default ShowProducts;