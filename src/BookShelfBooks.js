import React, { Component } from 'react'
import Book from './Book'

class BookShelfBooks extends  Component{
       render(){
           <div className="bookshelf-books">
           <ol className="books-grid">
               <li>
                   <Book/>
               </li>
           </ol>
           </div>
       }
}

export default BookShelfBooks