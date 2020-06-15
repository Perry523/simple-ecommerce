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
            <label style={{'padding-top': '30px','margin-top':'30px','border-top':'1px solid gray'}}><h1>Informações</h1></label>
            <textarea></textarea>
            </Box>
            <Col>
            <h1>Cores
                <button onClick={this.gerarCor} type="button">Adicionar Cor+</button>
            </h1>
            {this.state.cores.map((cor,i) => 
                <Row2 key={i}>
                    <label for="upload" ><img height="60px" width="60px" src={cor.img === true ? cor.img : 'https://www.futebol7brasil.com.br/img/sem-foto.jpg' } alt={`variante${cor.cor}`}></img></label>
                    <input type="file" id="upload" className="upload"></input>
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
        cores: [{img: '', cor: 'teste',estoque: 50}],
        nome: '',
        marca: '',
        tipo:'',
        desconto: 0,
        preco: 0,
    }
    gerarCor = e =>{
        let novasCores = this.state.cores
        novasCores.push({cor:'',estoque:0})
        this.setState({cores :novasCores})
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
        console.log(this.state)
        const formData = new FormData()
        const {imgs, nome,marca,preco,desconto,cores} = this.state
        formData.append('nome',nome)
        formData.append('marca',marca)
        formData.append('preco',preco)
        formData.append('desconto',desconto)
        imgs.map(img => formData.append('imgs[]',img))
        formData.append('cores',JSON.stringify(cores))
        console.log(formData)
        /*Axios.post('/api/produtos',this.state, {
   headers: {
    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
   }
  })*/
    }

}
