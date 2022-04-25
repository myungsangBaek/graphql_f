import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movie = ({ id, bg }) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  height: 380px;
  width: 100%;
  border-radius: 7px;
  overflow: hidden;
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
