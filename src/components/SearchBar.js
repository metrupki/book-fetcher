import React, {useState} from 'react';
import styled from 'styled-components';
import book from "../img/book.svg";
import { loadBooks } from '../actions/booksActions';
import { useDispatch, useSelector } from 'react-redux';
import {fadeIn} from '../animations';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(loadBooks(textInput.toLowerCase()))
        setTextInput("");
    }
    const clearSearched = () => {
        dispatch({type: "CLEAR_SEARCHED"})
    }
    const { searchIsLoading } = useSelector((state) => state.books);
    return (
        <StyledSearchBar variants={fadeIn} initial="hidden" animate="show">
            {searchIsLoading ? (
                <StyledSpinner viewBox="0 0 50 50">
                    <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="4"
                    />
                </StyledSpinner>
            ) : (
                <Logo onClick={clearSearched}>
                    <img src={book} height={100} alt="logo" />
                </Logo>
            )}
            <div className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button onClick={submitSearch} type="submit">Search</button>
                <button onClick={clearSearched}>Clear</button>
            </div>
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.nav`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        margin-top: 1rem;
        border: none;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);        
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.45rem 1.5rem;
        margin-left: 0.5rem;
        cursor: pointer;
        background: #18a0ad;
        color: white;
    }
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.3rem;
    img{
        height: 4rem;
        width: 4rem;
        cursor: pointer;

    }
`
const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  margin-top: 1.25rem;
  & .path {
    stroke: black;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default SearchBar;