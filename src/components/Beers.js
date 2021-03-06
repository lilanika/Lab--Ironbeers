import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

/*import { Link } from 'react-router-dom';*/

class Beers extends React.Component { 

  state = { 
    beers: []

  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
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

  


      render(){
        //const beers = this.state.beers.map(beer => <img src={beer.image_url} alt="img"/>, <p>{beer.name}</p> )
        const beers = this.state.beers.map(beer =>{
          /*tagline
contributed_by*/ 
          return(
                <div >
                    <img className="img" src={beer.image_url} alt={beer.name}/>
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                    <Link to={`/Beers/${beer._id}`}>Show Details</Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Beers</h1>
                {beers}
            </div>
        )
    }
}

export default Beers;