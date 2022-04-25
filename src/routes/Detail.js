import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const [sendData, setSendData] = useState([]);
  const { id } = useParams();

  const GET_MOVIES = gql`
    {
      movies {
        id
        title
        description_intro
        rating
        medium_cover_image
        language
      }
    }
  `;

  const { loading, data } = useQuery(GET_MOVIES);

  useEffect(() => {
    if (!loading) {
      const result = data.movies.filter((movie) => movie.id === Number(id));
      setSendData(result[0]);
    }
  }, [loading]);

  return (
    <Container>
      <Column>
        {loading ? (
          <Title>{"Loading..."}</Title>
        ) : (
          <>
            <Title>{sendData.title}</Title>
            <Subtitle>
              {sendData.language}-{sendData.rating}
            </Subtitle>
            <Description>{sendData.description_intro}</Description>
          </>
        )}
      </Column>
      <Poster bg={sendData.medium_cover_image}></Poster>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

export default Detail;
