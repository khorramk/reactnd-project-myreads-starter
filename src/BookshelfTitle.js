import React, { Component } from 'react'
import PropTypes from 'prop-types'
class BookshelfTitle extends Component{
     render(){
         return(
             <h2 className="bookshelf-title">
               {this.props.header}
             </h2>
         )
     }
}

BookshelfTitle.PropTypes ={
    header: PropTypes.string.isRequired
}
export default BookshelfTitle