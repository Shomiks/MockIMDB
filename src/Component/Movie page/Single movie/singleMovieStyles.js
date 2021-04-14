import styled from "styled-components";
import { Paper, TextField, Typography } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CancelIcon from "@material-ui/icons/Cancel";

const SingleMovieContainer = styled(Paper)`
  margin: 0 auto 50px;
  width: 70%;
  justify-content: center;
  padding: 30px;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    padding: 10px;
    width: 90%;
  }
`;

const MediaContainer = styled.div`
  display: flex;
  margin: 30px 0;
  height: 300px;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 600px) {
    height: unset;
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 33%;
  height: 100%;
  max-width: 200px;
  @media (max-width: 600px) {
    width: 75%;
    margin-bottom: 20px;
    height: 300px;
  }
`;

const Trailer = styled.iframe`
  width: 66%;
  height: 100%;
  padding: 0 !important;
  max-width: 500px;
  border: none;
  @media (max-width: 600px) {
    width: 100%;
    height: 250px;
  }
`;

const Description = styled(Typography)`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 20px !important;
`;

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

const CommentInformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteIcon = styled(DeleteForeverIcon)`
  cursor: pointer;
  position: absolute;
  left: 20px;
`;

const Edit = styled.span`
  cursor: pointer;
  position: absolute;
  right: 20px;
`;

const MovieTitleContainer = styled.span``;

const MovieTitle = styled(TextField)`
  display: block !important;
  text-align: center;
  width: fit-content;
  margin: 0 auto !important;
`;

const Cancel = styled(CancelIcon)`
  cursor: pointer;
  position: absolute;
  left: 20px;
  width: 50px;
`;

export {
  SingleMovieContainer,
  MediaContainer,
  Trailer,
  Image,
  Description,
  CommentContainer,
  CommentsTitle,
  CommentText,
  CommentInformationContainer,
  DeleteIcon,
  Edit,
  MovieTitleContainer,
  MovieTitle,
  Cancel,
};
