import React, { Component } from 'react';
class SideBar extends Component {
 
   
    render() { 
        return (
        <React.Fragment>
        <div style={{
            position:'fixed',
            left:'30px',
            // padding:'40px',
            // height:'90vh',
            bottom: '25px',
            width:'10vw'}}>

                <button 
                style={{
                    // top:'5%',
                    width:'10vw',
                    height:'6vh',
                    fontSize:'30px',
                    marginBottom: '20px',
                    fontWeight:'bold'}} 

                    type="button"
                    className="btn btn-outline-danger position-relative"
                    onClick={()=>this.props.chooseGenre('Action')}
                    >
                    Action
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                    {this.props.actionSum()}
                    <span className="visually-hidden">unread messages</span>
                    </span>
                    </button>

                <button style={{
                    // top:'10%',
                    width:'10vw',
                    height:'6vh',
                    marginBottom: '20px',
                    fontSize:'30px',
                    fontWeight:'bold'}}

                    type="button" 
                    className="btn btn-outline-danger position-relative"
                    onClick={()=>this.props.chooseGenre('Comedy')}
                    >
                    Comedy
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                    {this.props.comedySum()}
                    <span className="visually-hidden">unread messages</span>
                    </span>
                    </button>
                
                <button style={{
                    // top:'15%',
                    width:'10vw',
                    height:'6vh',
                    marginBottom: '20px',
                    fontSize:'30px',
                    fontWeight:'bold'}} 

                    type="button" 
                    className="btn btn-outline-danger position-relative"
                    onClick={()=>this.props.chooseGenre('Drama')}
                    >
                    Drama
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                    {this.props.dramaSum()}
                    <span className="visually-hidden">unread messages</span>
                    </span>
                    </button>

                <button style={{
                    // top:'20%',
                    width:'10vw',
                    marginBottom: '20px',
                    height:'6vh',
                    fontSize:'30px',
                    fontWeight:'bold'}} 

                    type="button" 
                    className="btn btn-outline-danger position-relative"
                    onClick={()=>this.props.chooseGenre('Fantasy')}
                    >    
                    Fantasy
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                    {this.props.fantasySum()}
                    <span className="visually-hidden">unread messages</span>
                    </span>
                    </button>

                <button style={{
                    // top:'25%',
                    width:'10vw',
                    marginBottom: '20px',
                    height:'6vh',
                    fontSize:'30px',
                    fontWeight:'bold'}}

                    type="button" 
                    className="btn btn-outline-danger position-relative"
                    onClick={()=>this.props.chooseGenre('Horror')}
                    >
                    Horror
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                    {this.props.horrorSum()}
                    <span className="visually-hidden">unread messages</span>
                    </span>
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default SideBar;