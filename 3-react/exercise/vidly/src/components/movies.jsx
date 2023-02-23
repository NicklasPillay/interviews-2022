import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    getMovie(movie._id);

    const updatedMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: updatedMovies });
  };

  render() {
    if (this.state.movies.length === 0) {
      return <p>There are no movies to show</p>;
    }

    return (
      <div>
        <p>Showing {this.state.movies.length} movies </p>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sml"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
