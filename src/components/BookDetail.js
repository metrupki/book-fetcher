import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";
import { getCover } from "../api";


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
    const { book } = useSelector(state => state.bookDetail)
    return (
        <div>
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail>
                        <h1>Hello There</h1>
                        <div>
                            {book.covers.map(cover => (
                                <img src={getCover(cover, "M")} key={cover} alt="Other Book Covers" />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            
        </div>
    )
}

const CardShadow = styled(motion.div)`
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

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;

`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 1.5rem;
        height: 1.5rem;
        display: inline;
    }
`

const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default BookDetail;
