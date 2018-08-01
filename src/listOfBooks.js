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
           />
         </div>
     )
 }
}

export default ListOfBooks