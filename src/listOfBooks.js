import React, { Component } from 'react'
import ListBooksTitle from './ListBooksTitle'
import ListOfBooksContent from './ListOfBooksContent'

class lisOfBooks extends Component{
 render(){
     return(
         <div className="list-books">
           <ListBooksTitle/>
           <ListOfBooksContent/>
         </div>
     )
 }
}

export default lisOfBooks