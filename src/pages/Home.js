import React from 'react'
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Book from '../components/Book'
import BookDetail from '../components/BookDetail';
import { v4 as uuidv4 } from "uuid"
import {fadeIn} from '../animations'

const Home = () => {
    //get location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    
    const { searched } = useSelector((state) => state.books);
    return (
        <>
        {!searched.length ? (
            <Info>
            <p>Nothing here yet.</p>
            <p>Enter a subject and get up to 10 random books.</p>
            </Info>
        ) : ""
        }
        <BookList variants={fadeIn} intial='hidden' animate="show">
                        {pathId && <BookDetail pathId={pathId} />}
                <Books>
                    {searched.map((book) => (
                        <Book key={uuidv4()} book_key={book.key} title={book.title} authors={book.authors} cover_id={book.cover_id} />
                    ))}
                </Books>
        </BookList>
        </>
    );
}

const BookList = styled.div`
    padding: 0rem 5rem; 
    h2 {
        padding: 5rem 0rem;
    }
`
const Info = styled.div`
    text-align: center;
`

const Books = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

export default Home;