import React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";
import { getCover } from "../api";
import { v4 as uuidv4 } from "uuid"


const BookDetail = () => {
    const history = useHistory();
    //Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push("/");
        }
    }
    //data
    const { book, isLoading, authors } = useSelector(state => state.bookDetail)
    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail>
                        <h1>{book.title}</h1>
                        {authors.map(author => (
                            <h3 key={uuidv4()}>{author.name}</h3>
                        ))}
                            {book.description ? (
                                <Description>
                                    <p>{book.description.value ? book.description.value : book.description}</p>
                                </Description>
                            ) : (<p><i>No Description Available</i></p>)}
                        {book.covers && (
                            <div className="picture">
                                {book.covers.map(cover => (
                                    <img src={getCover(cover, "M")} key={cover} alt="Other Book Covers" />
                                ))}
                            </div>
                        )}
                    </Detail>
                </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white
    }
`

const Detail = styled.div`
    width: 60%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    margin-top: 5rem;
    left: 20%;
    color: black;
    z-index: 10;
    h3{
        padding-top: 1em;
    }
    .picture{
        display: flex;
        justify-content: center;
    }
`
const Description = styled.div`
    margin: 2rem 0rem;
`

export default BookDetail;
