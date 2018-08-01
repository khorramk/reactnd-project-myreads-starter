import React, { Component } from 'react'

import Bookshelf from './Bookshelf';

const titlearray = [
    'Current Reads',
    'wants to read',
    'Read'
]

class ListOfBooksContent extends Component{
          render(){
             console.log('content: props', this.props.BooksContent)

              return (
                  <div className="list-books-content">
                  <div>
                      <Bookshelf title={titlearray[0]}
                      shelf={this.props.BooksContent}
                      
                      />
                      <Bookshelf title={titlearray[1]}/>
                      <Bookshelf title={titlearray[2]}/>
                  </div>
                  </div>
              )
          }
}

export default ListOfBooksContent