import useApi from "../hooks/useApi";

function BookList() {
    const [books, loading, error] = useApi('http://localhost:3000/books');

    if(loading) return <div>Loading...</div>;

    if(error) return <div>Error: {error.message}</div>;

    if(books) return (
        <div>
            {books.map((book, index) => (
                <div key={index} className="book">
                    {book.title} de {book.author}
                </div>
            ))}
        </div>
    );

    return <div>No data</div>;
}

export default BookList;
