import React, { Component } from 'react';
import SideBar from './sideBar';
import NavBar from './navBar';
import Main from './main';
import FootNav from './footNav';

class App extends Component {
state = { 
    movies:[
{id:1,name: 'Die hard',genre: 'Action',length: '2:20',rate: '4.4',heart:'bi bi-heart'},
{id:2,name: 'Shutter Island',genre: 'Fantasy',length: '2:30',rate: '4.6',heart:'bi bi-heart'},
{id:3,name: 'The Prestige',genre: 'Fantasy',length: '2:20',rate: '4.1',heart:'bi bi-heart'},
{id:4,name: 'Departed',genre: 'Action',length: '2:40',rate: '4.8',heart:'bi bi-heart'},
{id:5,name: 'Lord of the rings',genre: 'Fantasy',length: '3:40',rate: '4.8',heart:'bi bi-heart'},
{id:6,name: 'grownUps',genre: 'Comedy',length: '1:40',rate: '4.5',heart:'bi bi-heart'},
{id:7,name: 'The Vow',genre: 'Drama',length: '1:50',rate: '4.7',heart:'bi bi-heart'},
{id:8,name: 'Avengers',genre: 'Action',length: '2:40',rate: '4.8',heart:'bi bi-heart'},
{id:9,name: 'Alice in Wonderland',genre: 'Fantasy',length: '1:40',rate: '4.3',heart:'bi bi-heart'},
{id:10,name: '21Jump Street',genre: 'Comedy',length: '1:30',rate: '4.4',heart:'bi bi-heart'},
{id:11,name: '50 Shades of Gray',genre: 'Drama',length: '2:10',rate: '4.7',heart:'bi bi-heart'},
{id:12,name: 'Spiderman',genre: 'Action',length: '2:00',rate: '4.3',heart:'bi bi-heart'},
{id:13,name: 'Avatar',genre: 'Fantasy',length: '2:40',rate: '4.9',heart:'bi bi-heart'},
{id:14,name: 'Ted',genre: 'Comedy',length: '1:40',rate: '4.1',heart:'bi bi-heart'},
{id:15,name: 'the Green Mile',genre: 'Drama',length: '2:30',rate: '4.6',heart:'bi bi-heart'},
{id:16,name: 'Anable',genre: 'Horror',length: '1:40',rate: '3.8',heart:'bi bi-heart'},
{id:17,name: 'American Sniper',genre: 'Action',length: '2:10',rate: '4.7',heart:'bi bi-heart'},
{id:18,name: 'Hangover',genre: 'Comedy',length: '1:40',rate: '4.3',heart:'bi bi-heart'},
{id:19,name: 'Chainsaw3',genre: 'Horror',length: '1:40',rate: '4.1',heart:'bi bi-heart'},
{id:20,name: 'Forest Gump',genre: 'Drama',length: '2:20',rate: '4.8',heart:'bi bi-heart'},
{id:21,name: 'IT',genre: 'Horror',length: '1:40',rate: '4.2',heart:'bi bi-heart'},
{id:22,name: 'Twilight',genre: 'Drama',length: '2:30',rate: '4.6',heart:'bi bi-heart'},
{id:23,name: 'The Purge',genre: 'Horror',length: '1:40',rate: '3.7',heart:'bi bi-heart'},
{id:24,name: 'You Dont Mess With The Zohan',genre: 'Comedy',length: '1:50',rate: '4.9',heart:'bi bi-heart'},
{id:25,name: 'The babysitter',genre: 'Horror',length: '1:30',rate: '3.6',heart:'bi bi-heart'},
    ],
    filterdMovies:[
    {id:1,name: 'Die hard',genre: 'Action',length: '2:20',rate: '4.4',heart:'bi bi-heart'},
    {id:2,name: 'Shutter Island',genre: 'Fantasy',length: '2:30',rate: '4.6',heart:'bi bi-heart'},
    {id:3,name: 'The Prestige',genre: 'Fantasy',length: '2:20',rate: '4.1',heart:'bi bi-heart'},
    {id:4,name: 'Departed',genre: 'Action',length: '2:40',rate: '4.8',heart:'bi bi-heart'},
    {id:5,name: 'Lord of the rings',genre: 'Fantasy',length: '3:40',rate: '4.8',heart:'bi bi-heart'},
    {id:6,name: 'grownUps',genre: 'Comedy',length: '1:40',rate: '4.5',heart:'bi bi-heart'},
    {id:7,name: 'The Vow',genre: 'Drama',length: '1:50',rate: '4.7',heart:'bi bi-heart'},
    {id:8,name: 'Avengers',genre: 'Action',length: '2:40',rate: '4.8',heart:'bi bi-heart'},
    {id:9,name: 'Alice in Wonderland',genre: 'Fantasy',length: '1:40',rate: '4.3',heart:'bi bi-heart'},
    {id:10,name: '21Jump Street',genre: 'Comedy',length: '1:30',rate: '4.4',heart:'bi bi-heart'},
    {id:11,name: '50 Shades of Gray',genre: 'Drama',length: '2:10',rate: '4.7',heart:'bi bi-heart'},
    {id:12,name: 'Spiderman',genre: 'Action',length: '2:00',rate: '4.3',heart:'bi bi-heart'},
    {id:13,name: 'Avatar',genre: 'Fantasy',length: '2:40',rate: '4.9',heart:'bi bi-heart'},
    {id:14,name: 'Ted',genre: 'Comedy',length: '1:40',rate: '4.1',heart:'bi bi-heart'},
    {id:15,name: 'the Green Mile',genre: 'Drama',length: '2:30',rate: '4.6',heart:'bi bi-heart'},
    {id:16,name: 'Anable',genre: 'Horror',length: '1:40',rate: '3.8',heart:'bi bi-heart'},
    {id:17,name: 'American Sniper',genre: 'Action',length: '2:10',rate: '4.7',heart:'bi bi-heart'},
    {id:18,name: 'Hangover',genre: 'Comedy',length: '1:40',rate: '4.3',heart:'bi bi-heart'},
    {id:19,name: 'Chainsaw3',genre: 'Horror',length: '1:40',rate: '4.1',heart:'bi bi-heart'},
    {id:20,name: 'Forest Gump',genre: 'Drama',length: '2:20',rate: '4.8',heart:'bi bi-heart'},
    {id:21,name: 'IT',genre: 'Horror',length: '1:40',rate: '4.2',heart:'bi bi-heart'},
    {id:22,name: 'Twilight',genre: 'Drama',length: '2:30',rate: '4.6',heart:'bi bi-heart'},
    {id:23,name: 'The Purge',genre: 'Horror',length: '1:40',rate: '3.7',heart:'bi bi-heart'},
    {id:24,name: 'You Dont Mess With The Zohan',genre: 'Comedy',length: '1:50',rate: '4.9',heart:'bi bi-heart'},
    {id:25,name: 'The babysitter',genre: 'Horror',length: '1:30',rate: '3.6',heart:'bi bi-heart'},
    ],
    colors:[
    'alert alert-secondary',
    'alert alert-light'],
    activepage:1,
    pagevied: 25,
    number: 0,
    number2: 25
    } 

    render() { 
        return (
            <React.Fragment>
                <div>
                    <NavBar
                        chooseGenre={this.chooseGenre}
                        devide={(ev)=>this.devide(ev)}
                    />  
                </div> 
                <div>
                    <SideBar
                        chooseGenre={this.chooseGenre}
                        filterdMovies={this.state.filterdMovies}
                        actionSum={()=>this.actionSum()}
                        comedySum={()=>this.comedySum()}
                        dramaSum={()=>this.dramaSum()}
                        fantasySum={()=>this.fantasySum()}
                        horrorSum={()=>this.horrorSum()}
                    /> 
                </div> 
                <div> 
                    <Main 
                        movies={this.state.movies}
                        colors={this.state.colors}
                        deleteRow={(id,genre)=>this.deletRow(id,genre)}
                        alerty={(id)=>this.alerty(id)}
                        love={(id)=>this.fullHeart(id)}
                        filterdMovies={this.state.filterdMovies}
                        activepage={this.state.activepage}
                        pagevied={this.state.pagevied}
                        number={this.state.number}
                        number2={this.state.number2}
                        sendMovie={this.sendMovie}
                    />
                </div> 
                <div>
                    <FootNav
                        activepage={this.state.activepage}
                        activeChange={this.activeChange}
                        devide={this.state.pagevied}
                        movies={this.state.movies}
                    />
                </div>
            </React.Fragment>
        );
    }
    //----------------------DELETE MOVIE-------------------------//
    deletRow=(id,genre)=>{
        let arr=this.state.movies.filter(val =>val.id!==id)
        let arr2=this.state.filterdMovies.filter(val=>val.id!==id)
        this.state.movies=arr;
        this.state.filterdMovies=arr2;
        this.setState({filterdMovies: this.state.filterdMovies})
    }
    //--------COLOR BG MOVIE-------//
    alerty=(id)=>{
        if(id%2==0)
        return this.state.colors[0];
        else if(id%2==1)
        return this.state.colors[1];
    } 
    //----------------LIKE MOVIE FUNCTION---------------//
    fullHeart=(nnn)=>{ 
        let movies=this.state.movies;
        let movies2=this.state.filterdMovies;
        let index = movies.findIndex(val => val.id === nnn);
        let index2 = movies2.findIndex(val => val.id === nnn);
        if(movies[index].heart=='bi bi-heart' &&
           movies2[index2].heart=='bi bi-heart'){
            movies[index].heart='bi bi-suit-heart-fill';
            movies2[index2].heart='bi bi-suit-heart-fill';
        }
        else if(movies[index].heart=='bi bi-suit-heart-fill' &&
                movies2[index2].heart=='bi bi-suit-heart-fill'){
                 movies[index].heart='bi bi-heart';
                 movies2[index2].heart='bi bi-heart';
        }
        this.setState({filterdMovies: movies2})     
    }
    //-------------------MOVIE FILTER BY GENRE----------------/
    chooseGenre=(val)=>{
        switch (val) {
        case 'Action':
            this.state.filterdMovies=[...this.state.movies]
            let filterdMovies1 = this.state.filterdMovies.filter(
            (movie)=>movie.genre==val)
                this.setState({ filterdMovies:filterdMovies1 })
        break;
        case 'Comedy':
            this.state.filterdMovies=[...this.state.movies]
            let filterdMovies2 = this.state.filterdMovies.filter(
            (movie)=> movie.genre==val)
                this.setState({ filterdMovies:filterdMovies2 })
        break;
        case 'Drama':
            this.state.filterdMovies=[...this.state.movies]
            let filterdMovies3 = this.state.filterdMovies.filter(
            (movie)=> movie.genre==val)
                this.setState({ filterdMovies:filterdMovies3 })
        break;
        case 'Fantasy':
            this.state.filterdMovies=[...this.state.movies]
            let filterdMovies4 = this.state.filterdMovies.filter(
            (movie)=> movie.genre==val)
                this.setState({ filterdMovies:filterdMovies4 })
        break;
        case 'Horror':
            this.state.filterdMovies=[...this.state.movies]
            let filterdMovies5 = this.state.filterdMovies.filter(
            (movie)=> movie.genre==val)
                this.setState({ filterdMovies:filterdMovies5 })
        break; 
        case 'All':
            this.state.filterdMovies=[...this.state.movies]
            let filterdMovies6 = this.state.filterdMovies.filter(
            (movie)=> movie.genre=movie.genre)
                this.setState({ filterdMovies:filterdMovies6 })
        break;       
        default:
        break;
        }
    }
    //-----------------AMOUNT OF MOVIES FROM EACH GENRE------------------//
    actionSum=()=>{
        let count= this.state.movies.filter((movie)=>movie.genre=='Action')
        return count.length;   
    }
    comedySum=()=>{
        let count= this.state.movies.filter((movie)=>movie.genre=='Comedy')
        return count.length;   
    }
    dramaSum=()=>{
        let count= this.state.movies.filter((movie)=>movie.genre=='Drama')
        return count.length;    
    }
    fantasySum=()=>{
        let count= this.state.movies.filter((movie)=>movie.genre=='Fantasy')
        return count.length;    
    }
    horrorSum=()=>{
        let count= this.state.movies.filter((movie)=>movie.genre=='Horror')
        return count.length;    
    }

    //----------PAGINATION FUNCTIONS-------------//
    devide=(ev)=>{
        
        if(ev.key=='Enter' && ev.target.value > 0){
            
        this.setState({pagevied:ev.target.value})
        this.setState({number:0})
        this.setState({number2:ev.target.value})
        }
    }
    activeChange = (num) =>{
       this.state.number= this.state.pagevied*num-this.state.pagevied
       this.state.number2= this.state.pagevied*num
       this.setState({activePage:num})
       this.setState({number:this.state.number})
       this.setState({number2:this.state.number2})
    }

    //--------ADD MOVIES FUNCTIONS-------//
    sendMovie=(val)=>{
        const newMovie={
        id:this.state.movies.length+1,
        name: val.name,
        genre: val.genre,
        length: val.length,
        rate: val.rate,
        heart:'bi bi-heart',}

        this.state.movies.push(newMovie);
        this.state.filterdMovies.push(newMovie);
        this.setState({movies:this.state.movies})
        this.setState({filterdMovies:this.state.filterdMovies})
        alert("A new movie has been added to the libary")
    }
 
}
export default App;





