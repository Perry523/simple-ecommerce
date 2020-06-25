import React from 'react'
import Axios from 'axios'

export default class admin extends React.Component {
    render(){
        return (
            <div>
                
            </div>
        )
    }
    async componentDidMount(){
        const token = JSON.parse(window.localStorage.getItem('token'))
        const data = await Axios.get(Axios.defaults.baseURL+'/admin',{headers:{'authorization': 'bearer '+token}}).then(resp => {return resp.data})
    }
}
