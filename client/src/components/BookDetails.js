import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }) => {
    
	const { loading, error, data } = useQuery(getBookQuery, {
		variables: { id: bookId }
	});
	if (loading) {
		return "Loading..."
	} 
    console.log(data)
   const { book } = data;
	   
            
            
	return (
        <div id="book-details">
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this author:</p>
            <ul className="other-books">
                {book.author.books.map((item) => {
                    return <li key={item.id}>{item.name}</li>;
                })}
            </ul>      
    </div>
    );
};

export default BookDetails;