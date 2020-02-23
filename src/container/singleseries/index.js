import React, { Component } from 'react';
import Loader from '../../components/loader';
import { Link } from 'react-router-dom';

class SingleSeries extends Component{ 

    state = {
        show : null
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show : json }))
    }

    render() {
        const {show} = this.state;
        console.log( show );

        return(
            <div>
                { show === null && <Loader /> }
                {
                    show !== null
                    &&
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <img alt="show" src={show.image.medium} />
                        <a href={'/'}>Back to search again!</a>
                    </div>
                }
            </div>
        );
    }
}

export default SingleSeries;