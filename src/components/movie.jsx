import React, { Component } from 'react';

class Movie extends Component {
    
render() {
    const {movies,love}=this.props;
        return (
            <tr className={this.props.color}>
                    <td style={{textAlign:'center'}}>{movies.name}</td>
                    <td style={{textAlign:'center'}}>{movies.id}</td>
                    <td style={{textAlign:'center'}}>{movies.genre}</td>
                    <td style={{textAlign:'center'}}>{movies.length}</td>
                    <td style={{textAlign:'center'}}>{movies.rate} &#11088;</td>
                    <td style={{textAlign:'center'}}>
                        <i className={movies.heart} 
                        onClick={()=>love()}></i>
                    </td>
                    <td style={{textAlign:'center'}}>
                        <button className='btn btn-danger' 
                        onClick={()=> this.props.deleteRow(this.props.movies.id,this.props.movies.genre)}
                        >DELETE</button>   
                    </td>
            </tr>        
        );
    }  
}
 
export default Movie;