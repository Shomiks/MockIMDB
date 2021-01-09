import React, {useContext} from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import {__RouterContext as RouterContext} from 'react-router';
import {CommentsContext} from '../index';
import axios from 'axios';

const WriteCommentError = styled.div`
    color: red;
`;

const CommentTextarea = styled.textarea`
    width: 100%;
`;

const CommentForm = () => {
    const [comments, setComments] = useContext(CommentsContext);
    const { register, handleSubmit, errors, reset } = useForm();
    const useRouter = () => useContext(RouterContext);
    const {match} = useRouter();
    const movieId = match.params.id;
    const lastCommentId = comments.length ? comments[comments.length - 1].id : 0;
    const onSubmit = comment => {
        reset();
        const newComment = {
            createdAt: new Date(),
            text: comment.text,
            id: lastCommentId + 1,
            movieId: movieId
        };
        axios.post(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${movieId}/comments`, {
            ...newComment
        }).then(setComments([...comments, newComment]));
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
        <CommentTextarea placeholder="Write comment" name="text" ref={register({required: true})}/>
        <input type="submit"/>
        {errors.text && <WriteCommentError>This field is required</WriteCommentError>}
    </form>;
};

export default CommentForm;