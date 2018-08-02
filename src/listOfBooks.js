import React, { Component } from 'react'
import ListBooksTitle from './ListBooksTitle'
import ListOfBooksContent from './ListOfBooksContent'

class ListOfBooks extends Component{
    
 render(){
     console.log('listofbooks: props', this.props.Books)
     return(
         <div className="list-books">
           <ListBooksTitle/>
           <ListOfBooksContent
           
           BooksContent={this.props.Books}
                 moveBooks={this.props.moveBooks}
           />
         </div>
     )
 }
}

export default ListOfBooks