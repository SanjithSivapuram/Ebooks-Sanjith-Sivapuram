import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';


const Home = (props) => {
    const RenderBooks = props.book.map(book => {
        return (
            <div className='col-12 col-lg-4'>
                <Card key={book.id}>
                    <CardBody>
                        <CardTitle className='text-center'>{book.Title}</CardTitle>
                        <Link to={`/books/${book.id}`} className='bookslist'>
                            <Button block className='openbtn'>Open</Button>
                        </Link>
                    </CardBody>
                </Card>
                <br />
                <br />
            </div>
        )
    })

    return (
        <div className='home'>
            <div className='row row-content bookbg'>
                <div className='col-lg-4 col-12 container'>
                    <br />
                    <h2 className='text-center heading'>Welcome to E-Books</h2>
                </div>
            </div>
            <div className='row row-content container'>
                {RenderBooks}
            </div>
        </div>
    )
}

export default Home;