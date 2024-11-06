import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const result = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`);
      return response.data;
    },
  });

  if (result.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (result.isError) {
    return (
      <section className="image-container">
        <h4>There was an error.</h4>
      </section>
    );
  }

  const results = result.data.results;
  if (results.lenght < 1) {
    return (
      <section className="image-container">
        <h4>There was an error.</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            className="img"
            src={url}
            key={item.id}
            alt={item.alt_description}
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
