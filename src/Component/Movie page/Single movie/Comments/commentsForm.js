import React, { useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { __RouterContext as RouterContext } from "react-router";
import { CommentsContext } from "../index";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const WriteCommentError = styled.div`
  color: red;
`;

const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
`;

const Input = styled.input`
  cursor: pointer;
  margin-top: 10px;
`;

const CommentForm = () => {
  const [movie, setMovie] = useContext(CommentsContext);
  const { user } = useAuth0();
  const comments = movie.comments;
  const { register, handleSubmit, errors, reset } = useForm();
  const useRouter = () => useContext(RouterContext);
  const { match } = useRouter();
  const movieId = match.params.id;
  const lastCommentId = comments.length
    ? comments[comments.length - 1].id + 1
    : 0;

  const onSubmit = (comment) => {
    reset();
    const newComment = {
      comment: comment.text,
      movieId: parseInt(movieId),
      user: user.nickname,
      id: lastCommentId
    };
    axios
      .post(`http://localhost:5000/api/comments?movieId=${movieId}`, {
        ...newComment,
      })
      .then(
        setMovie((prevState) => ({
          ...prevState,
          comments: [...comments, newComment],
        }))
      )
      .catch(() => alert("Bad api call"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CommentTextarea
        placeholder="Write comment"
        name="text"
        ref={register({ required: true })}
      />
      <Input type="submit" />
      {errors.text && (
        <WriteCommentError>Please start typing</WriteCommentError>
      )}
    </form>
  );
};

export default CommentForm;
