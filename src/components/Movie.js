import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movie = ({ id, bg, isLiked }) => {
  const LIKE_MOVIE = gql`
    mutation likeMovie($id: Int!) {
      likeMovie(id: $id) @client
    }
  `;

  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={likeMovie}>{isLiked ? "Unlike" : "Like"}</button>
    </Container>
  );
};

const Container = styled.div`
  height: 380px;
  width: 100%;
  border-radius: 7px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

export default Movie;
