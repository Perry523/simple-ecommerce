import React from 'react'
import axios from 'axios'

export default class Test extends React.Component {
    state = {
        username: '',
        password: ''
    }
    submit = e =>{
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('http://localhost:8000/login',this.state)
        });
    }
    render() {
        return( 
            <>
            <input onChange={e =>{ this.setState({ username: e.target.value})}} type="text" className="botao"></input>
            <input onChange={e =>{ this.setState({ password: e.target.value})}} type="password" className="botao"></input>
            <button onClick={this.submit}>Submit</button>
            </>
        )

    }
}
