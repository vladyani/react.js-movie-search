import React, { Component } from 'react';
import MovieRow from './MovieRow.jsx';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);   
      this.state = {};
  }
        performSearch(searchTerm){
        console.log('Perform search using moviedb');
          const url = "https://api.themoviedb.org/3/search/movie?api_key=fd39ebcc5c863f9a34541a1121ab1823&query="+searchTerm;
          $.ajax({
              url: url,
              success: (searchResults) => {
                  console.log("Fetched data seccessfully");
                 const results = searchResults.results;
//                  console.table(results);
                  let movieRows = [];
                  results.forEach(movie => {
                      movie.poster_path = "https://image.tmdb.org/t/p/original" + movie.poster_path;
                     const movieRow = <MovieRow key={movie.id} movie={movie} />
                         movieRows.push(movieRow);
                  }) 
                  this.setState({rows:movieRows});
                  
              },
              error: (xhr,status,err) => {
                  console.error("Failed to fetch data");
              }
          })
      };

    
    searchChangeHandler(e){
        const searchTerm = e.target.value;
        this.performSearch(searchTerm);
    };
    
    render() {
    return (
      <div>
        
        <table className="titleBar">
            <tbody>
                <tr>
                    <td>
                        <img alt="app icon" width="100" src="https://cdn.iconscout.com/public/images/icon/premium/png-512/avengers-381d701474eb0762-512x512.png"/>
                    </td>
                    <td width="8"/>
                    <td>
                        <h1>iHeroes Movie Search</h1>
        
                    </td>
                </tr>
            </tbody>
        </table>
        
        <input style={{
            fontSize:24,
            display: 'block',
            width: '100%',
            outline: 'none',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="what do you want see today ?" />
        
        {this.state.rows}
          
      </div>
    );
  }
}

export default App;
