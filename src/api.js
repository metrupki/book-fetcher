import axios from "axios";

const base_url = 'http://openlibrary.org';



export const subjects = () => `${base_url}/subjects/handy.json`

export const bookDetails = (key) => `${base_url}${key}.json`;

export const getCover = (cover_id, size) => `http://covers.openlibrary.org/b/ID/${cover_id.toString()}-${size}.jpg`