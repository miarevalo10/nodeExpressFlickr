import React, {Component} from 'react';


class Photo extends Component {



  getUrl(photo) {
       return "https://farm"+
           photo.farm +
           ".staticflickr.com/" +
           photo.server +
           "/"+
           photo.id+
           "_" +
           photo.secret +
           "_s.jpg";
   }

  render() {

    return(
      <div className="col-md-12 colphoto">
          <img src={this.getUrl(this.props.photo)} alt=""/>
        {console.log(this.getUrl(this.props.photo))}

      </div>


    )

  }
}

 export default Photo;
