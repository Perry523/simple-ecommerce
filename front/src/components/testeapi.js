import React from 'react'
import Axios from 'axios'
export default class testeapi extends React.Component {
    state = {
        dados: 'aaa'
    }
    componentDidMount(){
        Axios.get('http://localhost:8000/api/teste').then(resp => {
            console.log(resp)
            this.setState({dados: resp.data})
            }
    )
    }
    render(){
        return(
            <div>
                {this.state.dados}
            </div>
        )
    }
}
