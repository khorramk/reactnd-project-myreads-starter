import React, {Component} from 'react'
import Book from './Book'


class SearchPage extends Component{
         state ={
             
         }
 
      render(){
          return (
              <div className="search-books">
                  <div className="search-books-bar">
                      <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                      <div className="search-books-input-wrapper">
                          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.


                */
               
               
               
               }
                          <input type="text" value={this.props.queries} onChange={event=> this.props.getQuery(event.target.value)} placeholder="Search by title or author" />

                      </div>
                  </div>
                  <div className="search-books-results">
                      <ol className="books-grid">
                          {
                              this.props.showingBooks.map(book => (
                                  <li key={book.id}>
                                      <Book book={book} 
                                      moveBooks={this.props.moveBooks}
                                      
                                      />
                                  </li>

                              ))
                          }
                      
                      </ol>
                   
             
                      
                     
                  </div>
              </div>
          )
      }
      
   
}

export default SearchPage