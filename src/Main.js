import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ListOfBooks from './ListOfBooks'
import './App.css'


class Main extends Component{
  
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((book)=>{
       console.log(book);
        this.setState({books: book})

    })
    
    /*BooksAPI.update(book, ).then(()=>{

    }).catch()*/

  }

   
   

   /*increaseBooks =(books) =>{

    this.setState()

   }*/
  moveBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((book) => {
      this.setState({ books: book })

    })

  }

   render(){
     
     return(
       
         <div className="app">
         <ListOfBooks
           
           Books={this.state.books}
           moveBooks={this.moveBooks}
         />
         </div>
     )

   }

}

export default Main

