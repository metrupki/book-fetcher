const base_url = 'http://openlibrary.org';

export const subjects = (subject, limit, offset) => `${base_url}/subjects/${subject}.json?limit=${limit}&offset=${offset}`;

export const bookDetails = (key) => `${base_url}${key}.json`;

export const getCover = (cover_id, size) => `http://covers.openlibrary.org/b/ID/${cover_id.toString()}-${size}.jpg`;