import React, { Component } from 'react'
import axios from 'axios';
import Box from './box';

class Container extends Component {

  state = {
      quad:[]
  }

  componentDidMount() {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=jhof7Zj0TYoFfcH7KVDcXom9vvUXCvBuunkyugpa`)
      .then(response => {
       
         this.setState({ quad:response.data });
         console.warn(this.state.quad)
      })
  }
    
  render() {
    return (
      <div>
         <Box info={ this.state.quad }/>
      </div>
    )
  }
}

export default Container
