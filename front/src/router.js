import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import test from './components/teste'
import testapi from './components/testeapi'
import cadastrarProd from './components/cadProd/cadastrarProd'
import login from './components/login'
import cadastro from './components/cadastro'
import index from './components/index'

export default function Router() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component= {index} />
            <Route path="/teste" component= {test} />
            <Route path="/testeapi" component= {testapi} />
            <Route path="/cadastrar" component= {cadastrarProd} />
            <Route path="/cadastro" component= {cadastro} />
            <Route path="/login" component= {login} />
        </Switch>
        </BrowserRouter>
    )
}