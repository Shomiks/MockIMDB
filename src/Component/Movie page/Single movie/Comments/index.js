import React, {useContext} from 'react';
import {Paper, Typography} from "@material-ui/core";
import styled from 'styled-components';
import Moment from 'moment';
import {useAuth0} from '@auth0/auth0-react';
import CommentForm from './commentsForm';
import {CommentsContext} from '../index';

const CommentContainer = styled(Paper)`
    background: #f6f6f5 !important;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px !important;
    padding: 10px;
`;

const CommentsTitle = styled(Typography)`
    margin-bottom: 20px !important;
`;

const CommentText = styled(Typography)`
    margin-bottom: 10px !important;
`;

// eslint-disable-next-line react/prop-types
const Comments = () => {
    const {isAuthenticated} = useAuth0();
    const [comments, ] = useContext(CommentsContext);

    return (
        <>
            <CommentsTitle variant="h6">Comments:</CommentsTitle>
            {/* eslint-disable-next-line react/prop-types */}
            {comments.map(comment => <CommentContainer key={comment.id}>
                <CommentText variant="body1">{comment.text}</CommentText>
                <Typography variant="body2">{Moment(comment.createdAt).format('DD-M-YYYY HH:mm')}</Typography>
            </CommentContainer>)}
            {isAuthenticated && <CommentForm/>}
        </>
    );
};

export default Comments;