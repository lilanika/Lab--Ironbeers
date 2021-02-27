import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';



class ShowDetails extends React.Component { 

  state = { 
    beers: []

  }
  


  componentDidMount() {
   
    axios.get('https://ih-beers-api2.herokuapp.com/beers/')
        .then(response => {
            console.log(response.data);

            this.setState({
                beers:response.data
            })
        })
        .catch(err => {
            console.log(err);
        })
      }

      /*
  componentDidMount() {
    const id = this.props.match.params.beersId;
    axios.get(`/api/Beers/${id}`)
        .then(response => {
            console.log(response);
            this.setState({
                beers: response.data
            })
        })
        .catch(err => {
            console.log(err);
        })
} */



render() {
    return (
      <div >
        <h1>One Beer | Show Details</h1>
        <div >
  
         <h2>tagline: {this.state.beers}</h2>
     
         
        </div>
     

      </div>
    );
  }
}


export default ShowDetails;