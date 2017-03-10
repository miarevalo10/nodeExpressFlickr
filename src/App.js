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

          blue:[],
          yellow:[],
          red:[],
          orange:[],
          green:[],
          purple:[],
          pink:[]

      }


    }

    getPhotos(query)
    {


        // console.log("GET " + query +"  "+ c);
        axios.get('/flickr/'+ query + ' blue')
          .then(response => {
            this.setState({
            blue: response.data.photos.photo
            })
            console.log(this.state);
          })

          axios.get('/flickr/'+ query + ' yellow')
            .then(response => {
              this.setState({
              yellow: response.data.photos.photo
              })
              console.log(this.state);
            })

           axios.get('/flickr/'+ query + ' red')
                        .then(response => {
                          this.setState({
                          red: response.data.photos.photo
                          })
                          console.log(this.state);
                        })

            axios.get('/flickr/'+ query + ' green')
                .then(response => {
                          this.setState({
                          green: response.data.photos.photo
                                      })
                                      console.log(this.state);
                                    })
                                    axios.get('/flickr/'+ query + ' orange')
                                        .then(response => {
                                                  this.setState({
                                                  orange: response.data.photos.photo
                                                              })
                                                              console.log(this.state);
                      })
            axios.get('/flickr/'+ query + ' purple')
                  .then(response => {
                  this.setState({
                 purple: response.data.photos.photo
                        })
                console.log(this.state);
                  })

            axios.get('/flickr/'+ query + ' pink')
                  .then(response => {
                 this.setState({
                 pink: response.data.photos.photo
                  })
                  console.log(this.state);
                 })



    }




  render() {
    return (
      <div>
      <div className="App">
        <div className="">
          <h2>Flickr Rainbown</h2>
        </div>
        <div className="row">
          <Buscador getPhotos={this.getPhotos.bind(this)}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">

        </div>
        <div className="col-md-1">
          <Photos photos={this.state.blue}/>

        </div>
        <div className="col-md-1">
          <Photos photos={this.state.yellow}/>

        </div>
        <div className="col-md-1">
          <Photos photos={this.state.red}/>

        </div>
        <div className="col-md-1">
          <Photos photos={this.state.orange}/>

        </div>
        <div className="col-md-1">
          <Photos photos={this.state.green}/>

        </div>
        <div className="col-md-1">
          <Photos photos={this.state.purple}/>

        </div>
        <div className="col-md-1">
          <Photos photos={this.state.pink}/>

        </div>
      </div>
      </div>





    );
  }
}

export default App;
