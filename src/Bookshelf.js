import React, { Component } from 'react'
import BookshelfTitle from './BookshelfTitle'
import BookShelfBooks from './BookShelfBooks'

class Bookshelf extends Component{
       render(){
           console.log('Props', this.props.title)
           console.log('bookshelf: props', this.props.shelf)
           
           return(
               <div className="bookshelf">
                  <BookshelfTitle header={this.props.title}/>
                  <BookShelfBooks
                     shelfBooks={this.props.shelf}
                     header={this.props.title}
                  />
               </div>
           )
       }
}



export default Bookshelf