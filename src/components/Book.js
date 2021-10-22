import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';

import {Link} from 'react-router-dom'
import {popUp} from '../animations'

const Book = ({ book_key, title, authors, cover_id }) => {
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(book_key));
    }
    return (
        <StyledBook onClick={loadDetailHandler} variants={popUp} initial="hidden" animate="show" >
            <Link to={`${book_key}`}>
                <motion.h3>{title}</motion.h3>
                <div className="authors">
                    {authors.map(author => (
                        <p>{author.name}</p>
                    ))}
                </div>
                <img src={`http://covers.openlibrary.org/b/ID/${cover_id}-M.jpg`} alt="Book Cover" />
            </Link>
        </StyledBook>
    )
}

const StyledBook = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        height: 30vh;
        object-fit: cover;
    }
    .authors {
        display: flex;
        justify-content: space-around;
    }
`

export default Book;