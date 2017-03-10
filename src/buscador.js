import React, {Component} from 'react';

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }


  }

  buscar() {

      console.log(this.state);
      // console.log(this.state.term +"  "+ this.state.colors[0]);

      this.props.getPhotos(this.state.term )  ;

  }

  render() {
    return(
      <div>
        <div className="col-md-2"></div>
        <div className="col-md-8 buscador">
          <input type="text" className="form-control" onChange={(event) => this.setState({term: event.target.value})}/>
          <button type="button" className="btn btn-default" onClick={this.buscar.bind(this)}>
            <span className="glyphicon glyphicon-search"></span>
            Buscar
          </button>
        </div>
        <div className="col-md-2"></div>
      </div>
    )
  }
}

export default Buscador;
