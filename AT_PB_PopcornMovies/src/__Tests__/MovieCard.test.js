import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "./MovieCard";

test("renders movie card with title and rating", () => {
  const movie = {
    title: "Test Movie",
    vote_average: 7.5,
  };

  render(<MovieCard movie={movie} />);

  expect(screen.getByText("Test Movie")).toBeInTheDocument();
  expect(screen.getByText("7.5")).toBeInTheDocument();
});

test("calls addToFavorites when button is clicked", () => {
  const addToFavoritesMock = jest.fn();
  const movie = {
    title: "Test Movie",
    vote_average: 7.5,
  };

  render(<MovieCard movie={movie} addToFavorites={addToFavoritesMock} />);

  fireEvent.click(screen.getByText("Adicionar aos Favoritos"));

  expect(addToFavoritesMock).toHaveBeenCalledWith(movie);
});
