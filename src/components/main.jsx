import React, { Component } from 'react';
import Movies from './movies';
import AddMovie from './addMovie';
import {Routes, Route} from 'react-router-dom'
class Main extends Component {
    state = {  } 
    render() { 
        const {movies,colors,deleteRow,alerty,love,filterdMovies,activepage,pagevied,number,number2}=this.props;
        return (
            <React.Fragment>
                <Routes>
                <Route path='/' element={ <Movies 
                    movies={movies}
                    colors={colors}
                    deleteRow={deleteRow}
                    alerty={alerty}
                    love={love}
                    filterdMovies={filterdMovies}
                    activepage={activepage}
                    pagevied={pagevied}
                    number={number}
                    number2={number2}/>
                   }/>
                   <Route path='/addmovie' element={<AddMovie
                     sendMovie={(val)=>this.props.sendMovie(val)}
                   />}/>
                </Routes>   
            </React.Fragment>
        );
    }
}
export default Main;