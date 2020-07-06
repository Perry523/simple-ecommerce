import React from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'
import Route from './Route'
import cadastrarProd from './components/cadProd/cadastrarProd'
import login from './components/login'
import cadastro from './components/cadastro'
import index from './components/index'
import home from './components/home'
import admin from './components/admin'
import cart from './components/cart'
import produto from './components/ExibirProduto'

export default function Router() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component= {index} />
            <Route path="/cadastrar" admin isPrivate component= {cadastrarProd}/>
            <Route path="/cadastro" component= {cadastro} signed/>
            <Route path="/login" component= {login} signed />
            <Route path="/home" component={home} isPrivate />
            <Route path="/admin" component={admin} admin isPrivate  />
            <Route path="/carrinho" component={cart}  />
            <Route path="/:produto" component={produto} />
        </Switch>
        </BrowserRouter>
    )
}