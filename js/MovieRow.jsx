import React, { Component } from 'react';

class MovieRow extends React.Component{
    
    
    viewMovie(){
        const url="https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;
        console.log(this.props.movie.id);
    }
    
    render(){
        return <table key={this.props.movie.id}>
                    <tbody>
                        <tr className="movieList">
                            <td className="img">
                                <img alt="poster" width="150" src={this.props.movie.poster_path}/>
                            </td>
                            <td>
                                <h3>{this.props.movie.title}</h3>
                                <p>{this.props.movie.overview}</p>
                                <input className="play" type="button" value="Play"/>
                                <input className="view" type="button" onClick={this.viewMovie.bind(this)} value="View"/>
                            </td>
                        </tr>
                        
                    </tbody>
              </table>
    }
};
                
export default MovieRow;