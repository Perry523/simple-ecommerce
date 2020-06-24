import React from 'react'
import Axios from 'axios'
import {Profile, Case} from './styles/home'
export default class home extends React.Component {
    render(){
        return (
            <>
                {this.state.dados === null ? 'teste' : 
                <Case>
                    <Profile>
                        <h1>Perfil</h1>
                        <div><span>Nome:</span><p>{this.state.dados.username}</p></div>
                        <div><span>E-mail:</span><p>{this.state.dados.email}</p></div>
                        <h1>Endereços</h1>
                    </Profile>
                </Case>
                }
            </>
        )
    }
    state = {
        dados: null
    }
    componentDidMount = async e =>{
        const token = JSON.parse(window.localStorage.getItem('token'))
        const data = await Axios.get(Axios.defaults.baseURL+'/home',{headers:{'authorization': 'bearer '+token}})
        this.setState({
            dados: data.data
        })
    }
}
