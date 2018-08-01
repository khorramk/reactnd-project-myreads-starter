import React, { Component } from 'react'
import Book from './Book'

class BookShelfBooks extends  Component{
       render(){
           console.log('bookshelfbooks: props', this.props.shelfBooks)
           return (
               <div className="bookshelf-books">
                   <ol className="books-grid">
                       {
                           (this.props.title === 'Current Reads') ? (this.props.shelfBooks.filter
                           (book =>
                               book.shelf === 'currentlyReading').map(

                               )) : (this.props.title === 'wants to read') ? (this.props.shelfBooks.filter(book => book.shelf === 'wantToRead').map(

                               )): (this.props.shelfBooks.filter(book => book.shelf === 'read').map(
                                   
                               ))
                           
                       }
                   </ol>
               </div>
           )
       }
}

export default BookShelfBooks