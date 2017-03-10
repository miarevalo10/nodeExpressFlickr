import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Buscador from './buscador';
import Photos from './photos.js';
import axios from 'axios';


class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        photos: [],
        farm:'',
        server:'',
        id:'',
        secret:''
      }

    }

    getPhotos(query)
    {
      axios.get('/flickr/'+ query)
      .then(response => {
      this.setState({
      photos: response.data.photos.photo
      })
    })
    }




  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Buscador getPhotos={this.getPhotos.bind(this)}/>
        <Photos photos={this.state.photos}/>

      </div>
    );
  }
}

export default App;
