import React, { createContext, useEffect, useState } from "react";
import PageLoader from "../../../lib/Loader";
import { Typography } from "@material-ui/core";
import { useSingleMovie } from "./useSingleMovie";
import Comments from "./Comments";
import { Link } from "react-router-dom";
import {
  SingleMovieContainer,
  Description,
  Trailer,
  MediaContainer,
  Image,
  Edit,
  DeleteIcon,
  MovieTitleContainer,
  MovieTitle,
  Cancel,
} from "./singleMovieStyles";
import EditIcon from "@material-ui/icons/Edit";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Tooltip from "@material-ui/core/Tooltip";

export const CommentsContext = createContext(undefined);

const SingeMovie = () => {
  const { movie, loading, setMovie, deleteMovie, editMovie } = useSingleMovie();
  const [edit, setEdit] = useState(false);
  const [movieTitle, setMovieTitle] = useState();
  const handleTitleInputChange = (e) => setMovieTitle(e.target.value);
  const handleCancel = () => {
    setMovieTitle(movie.name);
    setEdit(false);
  };
  const handleEdit = () =>
    editMovie({ ...movie, name: movieTitle }).then(() => setEdit(false));

  useEffect(() => {
    setMovieTitle(movie.name);
  }, [movie.name]);

  return loading ? (
    <PageLoader />
  ) : (
    <SingleMovieContainer>
      {edit ? (
        <Tooltip title="Cancel edit">
          <Cancel color="primary" onClick={handleCancel} />
        </Tooltip>
      ) : (
        <Link
          to="/"
          onClick={() =>
            deleteMovie(movie.id).then(() =>
              alert("you have deleted movie successfully")
            )
          }
        >
          <Tooltip title="Delete movie">
            <DeleteIcon color="secondary" />
          </Tooltip>
        </Link>
      )}
      <Edit>
        {edit ? (
          <Tooltip title="Confirm edit">
            <ThumbUpIcon onClick={handleEdit} color="primary" />
          </Tooltip>
        ) : (
          <Tooltip title="Edit title">
            <EditIcon onClick={() => setEdit(true)} color="primary" />
          </Tooltip>
        )}
      </Edit>
      <MovieTitleContainer>
        {edit ? (
          <MovieTitle
            variant="outlined"
            value={movieTitle}
            required={true}
            onChange={(e) => handleTitleInputChange(e)}
            inputProps={{
              min: 0,
              style: {
                textAlign: "center",
                padding: "15px 20px",
                fontSize: "30px",
              },
            }}
          />
        ) : (
          <Typography variant="h4" align="center">
            {movieTitle}
          </Typography>
        )}
      </MovieTitleContainer>

      <MediaContainer>
        <Image src={movie.imageUrl} />
        <Trailer
          src={`https://www.youtube.com/embed/${movie.videoId}`}
          ng-show="showvideo"
          allowFullScreen
        />
      </MediaContainer>
      <Description>{movie.description}</Description>
      <CommentsContext.Provider value={[movie, setMovie]}>
        <Comments />
      </CommentsContext.Provider>
    </SingleMovieContainer>
  );
};

export default SingeMovie;
