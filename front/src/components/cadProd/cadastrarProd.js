import React from 'react'
import Axios from 'axios'
import {Inputs, Row, Container, Col, Box, Row2} from './cadProds'
export default class cadastrarProd extends React.Component {
    render() {
        return (
            <Inputs onSubmit={this.submit}>
            {this.state.imgsSrc.map((src,i) => <img height="60px" width="60px" alt={`imagem${i}`} key={i} src={src}/>)}
            <Row>
                <div>
            <input onChange={this.uploadIMG} type="file"/>
            </div>
        <Container>
            <Row>
            <Box>
            <label>Nome</label>
            <input id="name" name="nome"  onChange={this.alteraNome} defaultValue={this.state.nome} type="text"/>
            </Box>
            </Row>
            <Row>
            <Box>
                <label>Marca</label>
                <input name="marca"  onChange={this.alteraMarca} defaultValue={this.state.marca} type="text"/>
            </Box>
            <Box>
            <label>Tipo</label>
            <input name="tipo" onChange={this.alteraTipo} defaultValue={this.state.tipo} type="text"/>
            </Box>
            </Row>
            <Row>
            <Box>
            <label>Desconto(%)</label>
            <input   name="desconto" onChange={this.alteraDesconto} defaultValue={this.state.desconto} type="text"/>
            </Box>
            <Box>
            <label>Preco</label>
            <input   name="preco" onChange={this.alteraPreco} defaultValue={this.state.preco} type="number"/>
            </Box>
            <Box>
            <label>Preço Total</label>
            <input   name="precoTotal" value={this.state.desconto > 0 ? this.state.preco - (this.state.preco * this.state.desconto/100): this.state.preco} disabled type="number"/>
            </Box>
            </Row>
            </Container>
            </Row>
            <Box >
            <label style={{'paddingTop': '30px','marginTop':'30px','borderTop':'1px solid gray'}}><h1>Informações</h1></label>
            <textarea onChange={this.alteraInfo} defaultValue={this.state.info}></textarea>
            </Box>
            <Col>
            <h1>Cores
                <button onClick={this.gerarCor} type="button">Adicionar Cor+</button>
            </h1>
            {this.state.cores.map((cor,i) => 
                <Row2 key={i}>
                    <label htmlFor={`upload${i}`} ><img height="60px" width="60px" src={cor.img !== null ? cor.img : 'https://www.futebol7brasil.com.br/img/sem-foto.jpg' } alt={`variante${cor.cor}`}></img></label>
                    <input onChange={(e) => this.imgVariant(e,i)} type="file" id={`upload${i}`} className="upload"></input>
                    <input onChange={(e) => this.atualizaCor(e,i)} value={cor.cor}/>
                    <input onChange={(e) => this.atualizaEstoque(e,i)} value={cor.estoque}/>
                </Row2>
            )}
                <input type="submit" id="botao" value="Enviar"/> 
            </Col>
        </Inputs>
    )
}

    state = {
        imgs: [],
        imgsSrc: [],
        cores: [{imgFile: null,img: null, cor: 'Azul',estoque: 50}],
        nome: null,
        marca: null,
        tipo:null,
        desconto: 0,
        preco: 0,
        info: null,
    }
    alteraInfo = (e) =>{
        this.setState({
            info: e.target.value 
        })
    }
    gerarCor = e =>{
        let novasCores = this.state.cores
        novasCores.push({imgFile:null,img:null,cor:'Azul',estoque:0})
        this.setState({cores :novasCores})
    }

    imgVariant = (e,i) =>{
        console.log(i)
        let variants = this.state.cores
        let file = e.target.files[0]    
        const reader = new FileReader();
        reader.onload = () => {
            let src = reader.result;
            variants[i].img = src
            variants[i].imgFile = file
            this.setState({
                cores: variants
            })
            console.log(this.state.cores)
        }
        reader.readAsDataURL(e.target.files[0]);

    }

    uploadIMG = e =>{
        let images = this.state.imgs
        let srcs = this.state.imgsSrc
        images.push(e.target.files.item(0))
        const reader = new FileReader();
        reader.onload = () => {
            let src = reader.result;
            srcs.push(src)
            this.setState({
                imgs: images,
                imgsSrc: srcs
            })
        }
        reader.readAsDataURL(e.target.files[0]);

    }
    alteraPreco = (e) =>{
        this.setState({
            preco: e.target.value 
        })
    }
    alteraMarca = (e) =>{
        this.setState({
            marca: e.target.value 
        })
    }
    alteraTipo = (e) =>{
        this.setState({
            tipo: e.target.value 
        })
    }
    alteraNome = (e) =>{
        this.setState({
            nome: e.target.value 
        })
    }
    alteraDesconto = (e) =>{
        this.setState({
            desconto: e.target.value 
        })
    }
    atualizaCor = (e,i) =>{
        const novasCores = this.state.cores
        novasCores[i].cor = e.target.value
        console.log(novasCores)
        this.setState({
            cores: novasCores 
        })
    }
    atualizaEstoque = (e,i) =>{
        const novasCores = this.state.cores
        novasCores[i].estoque = e.target.value
        console.log(novasCores)
        this.setState({
            cores: novasCores 
        })
    }
    submit = e=>{
        e.preventDefault()
        const formData = new FormData()
        const {imgs,marca,nome,preco,tipo,info,desconto,cores} = this.state
        formData.append('name',nome)
        formData.append('brand',marca)
        formData.append('price',preco)
        formData.append('type',tipo)
        formData.append('discount',desconto)
        formData.append('info',info)
        imgs.map(img => {
            formData.append('imgs[]',img)
        })
        cores.map((cor,i) => {
            formData.append('variantImgs['+i+']',cor.imgFile)
            formData.append('variants[]',JSON.stringify({cor:cor.cor, estoque: cor.estoque}))

        })
        Axios.post('http://localhost:3333/produtos',formData, {
   headers: {
    "Content-Type": `multipart/form-data;`,
   }
  })
    }

}
