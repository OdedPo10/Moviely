import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';



class FootNav extends Component {
    style={
        position:'fixed',
        top:'95vh',
        left:'2vh'
    }
    
    render() {

    const {activepage,activeChange,devide,movies} = this.props;
    let items = [];
    for (let number = 1; number <=Math.ceil(movies.length/devide) ; number++)
     {
      items.push( <Pagination.Item 
                    key={number} 
                    activepage={number === activepage}
                    onClick={()=>activeChange(number)}>
                    {number}
                    </Pagination.Item>,
                );
    }
    const paginationBasic = (
        <div style={this.style}>
          <Pagination>{items}</Pagination>
        </div>);
        return (
            <>
            {paginationBasic}
            </>
        );
    }
}
export default FootNav;
