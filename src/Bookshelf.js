import React, { Component } from 'react'
import BookshelfTitle from './BookshelfTitle'

class Bookshelf extends Component{
       render(){
           return(
               <div className="bookshelf">
                  <BookshelfTitle/>
                  <BookshelfBooks/>
               </div>
           )
       }
}

export default Bookshelf