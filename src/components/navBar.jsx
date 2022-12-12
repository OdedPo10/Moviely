import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import netflix from '/Users/odedportnoy/Desktop/Full-Stack/Projects/moviely/moviely-app/src/images/netflix.jpg'

class NavBar extends Component {
    state = {  } 
      render() { 
        return (
            <div
                style={{
                    backgroundImage: `url(${netflix})`,
                    height:'50vh',
                    width:'100vw',
                  
                    }}>

                <Link to='/'><button onClick={()=>this.props.chooseGenre('All')} 
                  style={{
                    fontSize:'30px',
                    fontWeight:'bold',
                    color:'black'
                    }}>Moviely</button></Link>

                <Link to="/addMovie"><button 
                style={{
                    fontSize:'30px',
                    fontWeight:'bold',
                    color:'black' 
                }}
                >Add Movie</button></Link>
                <input style={{
                    position:'sticky',
                    bottom:'80%',
                    left:'89%',
                    width:'10vw',
                    height:'5vh',
                    fontSize:'17px',
                    fontWeight:'bold',
                    color:'black'
                    }} 
                    placeholder='Movies Per Page'
                    type="text" 
                    name="" 
                    id=""
                    onKeyPress={(ev)=>this.props.devide(ev)}
                />
            </div>
            
        );
    }
}
 
export default NavBar;