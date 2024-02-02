import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const { queries } = this.props;
    Promise.all(
      queries.map((query) =>
        fetch(
          `https://www.omdbapi.com/?apikey=d95f447d&s=${encodeURIComponent(
            query
          )}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            if (data.Response === "True") {
              return data.Search;
            } else {
              throw new Error(data.Error);
            }
          })
      )
    )
      .then((results) => {
        const movies = results.flat().slice(0, 18); // Combino i risultati e prendi i primi 18
        this.setState({ movies, isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  render() {
    const { title } = this.props;
    const { movies, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <Container fluid className="gallery-container bg-black">
        {title && <h3>{title}</h3>}
        <Row noGutters className="gallery-row">
          {movies.map((movie, index) => (
            <Col
              key={movie.imdbID}
              xs={4}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className={`movie-card-small ${
                index % 6 === 0 ? "first-in-row" : ""
              }`}
            >
              {index % 6 === 0 && (
                <h3 className="h3">
                  {index / 6 === 0
                    ? "Trending Now"
                    : index / 6 === 1
                    ? "Watch It Again"
                    : "New Releases"}
                </h3>
              )}
              <Card className="movie-card">
                <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
