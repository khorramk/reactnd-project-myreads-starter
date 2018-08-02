import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListOfBooks from './ListOfBooks'
import './App.css'
import SearchPage from './SearchPage';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class Main extends Component{
  
  state = {
    showSearchPage: false,
    books: [],
    matchedbooks: [],
    query: ''
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

   updatequery = (query) =>{
     if(query){

       BooksAPI.search(query).then((searchedBooks) => {
         console.log(searchedBooks)
         this.setState({ matchedbooks: searchedBooks })
       }).catch()

       BooksAPI.getAll().then((book) => {
         this.setState({ books: book })

       })

     }else{
       this.setState({ matchedbooks: [] })
     }
           
   }

   getQuery = (query)=>{
        this.setState({ query: query.trim()})

        this.updatequery(query);
   }

  moveBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((book) => {
      this.setState({ books: book })

    })

  }

   render(){
     
       return(


         <div className="app">
         {
           this.state.showSearchPage ? (<SearchPage showingBooks={this.state.matchedbooks} moveBooks={this.moveBooks}  getQuery={this.getQuery}/>):
           (<div>
             <ListOfBooks

               Books={this.state.books}
               moveBooks={this.moveBooks}

             />

             <div className="open-search">
               <Link  to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
             </div>
           </div>)
         }
         

         
           
         

           


             
           
          
        
        
           
           


         
         </div>
       
     )

   }

}

export default Main

