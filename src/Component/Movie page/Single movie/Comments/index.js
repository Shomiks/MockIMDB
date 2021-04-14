import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import Moment from "moment";
import { useAuth0 } from "@auth0/auth0-react";
import CommentForm from "./commentsForm";
import { CommentsContext } from "../index";
import {
  CommentsTitle,
  CommentText,
  CommentContainer,
  CommentInformationContainer,
} from "../singleMovieStyles";

const Comments = () => {
  const { isAuthenticated } = useAuth0();
  const [movie] = useContext(CommentsContext);

  return (
    <>
      <CommentsTitle variant="h6">Comments:</CommentsTitle>
      {movie.comments.map((comment) => (
        <CommentContainer key={comment.id}>
          <CommentText variant="body1">{comment.comment}</CommentText>
          <CommentInformationContainer>
            <Typography variant="body2">
              {Moment(comment.createdAt).format("DD-M-YYYY HH:mm")}
            </Typography>
            <Typography variant="body2">{comment.user}</Typography>
          </CommentInformationContainer>
        </CommentContainer>
      ))}
      {isAuthenticated && <CommentForm />}
    </>
  );
};

export default Comments;
