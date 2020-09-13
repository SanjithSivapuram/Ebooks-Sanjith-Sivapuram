import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import BookDetails from './BookDetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BOOKS } from '../shared/books';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: BOOKS,
        };
    }
    render() {

        const HomePage = () => {
            return (
                <Home book={this.state.books} />
            )
        }

        const BookDetail = ({ match }) => {
            return (
                <BookDetails story={this.state.books.filter((book) => book.id === parseInt(match.params.bookId, 10))[0]}
                    username={this.props.user} />
            )
        }

        return (
            <div>
                <Header user={this.props.user} />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/books/:bookId' component={BookDetail} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default Main;