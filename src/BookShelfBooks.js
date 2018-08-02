import React, { Component } from 'react'
import Book from './Book'


class BookShelfBooks extends  Component{

   

    

   
    
       render(){
           console.log('bookshelfbooks: props', this.props.shelfBooks)
           return (
               <div className="bookshelf-books">
                   <ol className="books-grid">
                       {
                           this.props.header === 'Current Reads' ? (this.props.shelfBooks.filter(book =>
                               book.shelf === 'currentlyReading').map(book => (
                                       <li key={book.id}>
                                       <Book 
                                         book={book}
                                               moveBooks={this.props.moveBooks}
                                               
                                       />
                                       </li>
                                   )

                               )) : (this.props.header === 'wants to read') ? (this.props.shelfBooks.filter(book => book.shelf === "wantToRead").map(

                                book => (
                                    <li key={book.id}>
                                        <Book
                                          book={book}
                                            moveBooks={this.props.moveBooks}
                                            
                                        />
                                    </li>
                                )

                               )): this.props.header === 'Read' ? (this.props.shelfBooks.filter(book => book.shelf === 'read').map(
                                

                                       book => (
                                           <li key={book.id}>
                                               <Book
                                                   book={book}
                                                   moveBooks={this.props.moveBooks}
                                                   
                                               />
                                           </li>
                                       )

                               )) : console.log(undefined)
                           
                       }
                   </ol>
               </div>
           )
       }
}

export default BookShelfBooks