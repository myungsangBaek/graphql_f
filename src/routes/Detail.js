import { useQuery, gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const GET_MOVIE = gql`
    {
      movies {
        id
        title
        medium_cover_image
        description_intro
      }
    }
  `;

  const { loading, data } = useQuery(GET_MOVIE);
  if (data) {
    const result = data.movies.filter((movie) => movie.id === Number(id));
    return result[0].id;
  }
  if (loading) {
    return "...loading";
  }
};

export default Detail;
