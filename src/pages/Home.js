import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadBooks } from "../actions/booksActions";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Book from '../components/Book'
import BookDetail from '../components/BookDetail';
import { v4 as uuidv4 } from "uuid"

const Home = () => {
    //get location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    //Fetch Books
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooks());
    }, [dispatch]);
    const { searched } = useSelector((state) => state.books);
    console.log(searched)
    return (
        <BookList>
            {pathId && <BookDetail />}
            <Books>
                {searched.map((book) => (
                    <Book key={uuidv4()} book_key={book.key} title={book.title} authors={book.authors} cover_id={book.cover_id} />
                ))}
                <h1>Home</h1>
            </Books>
        </BookList>
    );
}

const BookList = styled(motion.div)`
    padding: 0rem 5rem; 
    h2 {
        padding: 5rem 0rem;
    }
`

const Books = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

export default Home;