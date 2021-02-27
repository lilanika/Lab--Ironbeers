/* /beers /random-beer /new-beer */

import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div >

        <h1>Homepage IronBeers</h1>
        <div>
        <h2><Link to="/Beers"> All Beers</Link></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas placeat eligendi porro omnis vitae repudiandae illum, id iste sed? At, ullam praesentium. Quae rerum quos adipisci non aliquid doloremque id deleniti. Ex dolorum placeat exercitationem vitae, iure repellat aperiam sed.
          </p>
          <img src="./images/beers.png" alt="beers" />
          </div>

          <h2><Link >Random Beer</Link></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas placeat eligendi porro omnis vitae repudiandae illum, id iste sed? At, ullam praesentium. Quae rerum quos adipisci non aliquid doloremque id deleniti. Ex dolorum placeat exercitationem vitae, iure repellat aperiam sed.
          </p>
          <img src="./images/random-beer.png" alt="random-beers" />

          <h2><Link>New Beer</Link></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas placeat eligendi porro omnis vitae repudiandae illum, id iste sed? At, ullam praesentium. Quae rerum quos adipisci non aliquid doloremque id deleniti. Ex dolorum placeat exercitationem vitae, iure repellat aperiam sed.
          </p>
          <img src="./images/new-beer.png" alt="new-beers" />
      </div>
    );
  }
}

export default Home;