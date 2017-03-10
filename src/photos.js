import React, {Component} from 'react';
import Photo from './photo'

class Photos extends Component {

  render() {
  if(this.props.photos) {
      return(

        <div className="col-md-12 colphoto">
          {console.log(this.props.photos)}
          {this.props.photos.map((photo) => {
              return <Photo key={photo.id} photo={photo}/>
              console.log("render photos");

          })}
        </div>
      )
    }
    else {
      return(

        <div>Ingrese el nombre de una foto
            {console.log("esd")}
        </div>
      )
    }


  }
}

export default Photos;
