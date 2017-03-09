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
      this.handleGetPhotos = this.handleGetPhotos.bind(this);

    }

    handleGetPhotos(photos){
      this.setState({'photos': photos});
    }

    getPhotos(query)
    {
      axios.get('/flickr/'+ query)
      .then(response => {
      this.setState({
      photos: response.data
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
        <Photos photo={this.state.photos}/>

        {/* <Buscador buscarVideoYoutube={this.buscarVideoYoutube.bind(this)} />
            <div className="row margen">
              <VideoPlayer className="col-md-8" video={<this className="state "></this>selectedVideo}/>
              <Sugerencias className="col-md-4" videos={this.state.videos} ponerVideo={(video) => {this.setState({selectedVideo: video})}} />
            </div> */}
      </div>
    );
  }
}

export default App;
