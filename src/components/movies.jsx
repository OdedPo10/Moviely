import React, {Component } from 'react';
import Movie from "../components/movie";

class Movies extends Component {
    style={
        position:'relative',
        width: '85vw',
        left: '15vw',    
    }

    render() { 
        const {filterdMovies,number,number2}=this.props;
        return (   
            <React.Fragment>
                <table style={this.style} className="table">
                <thead>
                    <tr style={{textAlign:'center'}}>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Genre</th>
                        <th>Length</th>
                        <th>Rating</th>
                        <th>More Like This</th>
                        <th>Move To Trash</th>
                    </tr>
                </thead>
                <tbody>
                {filterdMovies.slice(number,number2).map(movie=>(
                <Movie key={movie.id} 
                       movies={movie} 
                       deleteRow={this.props.deleteRow} 
                       color={this.props.alerty(movie.id)}
                       love={(id)=>this.props.love(movie.id)}
                />
                ))}
                </tbody>
                </table>
            </React.Fragment>
        );  
    }    
}
export default Movies;

