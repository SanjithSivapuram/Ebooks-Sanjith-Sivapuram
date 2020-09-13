import React, { Component } from 'react';
import CountUp from 'react-countup';

class BookDetail extends Component {
    render() {
        return (
            <div className='inbook'>
                <br />
                <div className='container'>
                    <span className='fa fa-line-chart fa-lg'> <CountUp end={100} /></span>
                    <span className='fa fa-users fa-lg float-right'> <CountUp end={1000} /></span>
                    <br /><br />
                    <h1 className='text-center'>{this.props.story.Title}</h1>
                    <br />
                </div>
                <div className='container content'>
                    <p>{this.props.story.Content}</p>
                    <p>{this.props.story.Content}</p>
                    <p>{this.props.story.Content}</p>
                    <p>{this.props.story.Content}</p>
                    <p>{this.props.story.Content}</p>
                    <p>{this.props.story.Content}</p>
                </div>
            </div>
        )
    }
}

export default BookDetail;