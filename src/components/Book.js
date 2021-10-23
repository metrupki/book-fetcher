import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import {Link} from 'react-router-dom'
import noBookCover from "../img/noBookCover.gif";
import { v4 as uuidv4 } from "uuid"

const Book = ({ book_key, title, authors, cover_id }) => {
    //Action Handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(book_key, authors));
    }
    return (
        <StyledBook onClick={loadDetailHandler}>
            <Link to={`${book_key}`}>
                <h3>{title}</h3>
                <div className="authors">
                    {authors.map(author => (
                        <p key={uuidv4()}>{author.name}</p>
                    ))}
                </div>
                {cover_id ? (
                    <img src={`http://covers.openlibrary.org/b/ID/${cover_id}-M.jpg`} alt="Book Cover" />
                ) : <img src={noBookCover} alt="No Book Cover Available" />}
            </Link>
        </StyledBook>
    )
}

const StyledBook = styled.div`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        height: 30vh;
        object-fit: cover;
        margin: auto;
        padding-bottom: 1rem;
    }
    .authors {
        justify-content: space-around;
    }
`

export default Book;