import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Loader from '../../components/loader';
import './index.css';

// Sanitize HTML content to prevent XSS attacks
const sanitizeHTML = (html) => {
    return DOMPurify.sanitize(html, { 
        ALLOWED_TAGS: ['p', 'b', 'i', 'em', 'strong', 'br'],
        ALLOWED_ATTR: []
    });
};

class SingleSeries extends Component{ 

    state = {
        show : null,
        error: null
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        // Validate ID parameter
        if (!id || isNaN(id)) {
            this.setState({ error: 'Invalid series ID' });
            return;
        }

        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => this.setState({ show: json }))
            .catch(error => {
                console.error('Error fetching show data:', error);
                this.setState({ error: 'Failed to fetch show details' });
            });
    }

    render() {
        const {show, error} = this.state;

        return(
            <div className="show-detail-container">
                { error && <p className="error-message">{error}</p> }
                { show === null && !error && <Loader /> }
                {
                    show !== null
                    &&
                    <div className="show-detail">
                        <div className="show-header">
                            <div className="show-poster">
                                {show.image ? (
                                    <img src={show.image.original} alt={show.name} />
                                ) : (
                                    <div className="no-image-large">
                                        <span>No Image Available</span>
                                    </div>
                                )}
                            </div>
                            <div className="show-info">
                                <h1 className="show-title">{show.name}</h1>
                                <div className="show-meta">
                                    {show.rating && show.rating.average && (
                                        <div className="rating-container">
                                            <span className="rating-star">★</span>
                                            <span className="rating-value">{show.rating.average}/10</span>
                                        </div>
                                    )}
                                    {show.premiered && (
                                        <div className="meta-item">
                                            <span className="meta-label">Released:</span>
                                            <span>{new Date(show.premiered).getFullYear()}</span>
                                        </div>
                                    )}
                                    {show.genres && show.genres.length > 0 && (
                                        <div className="meta-item">
                                            <span className="meta-label">Genre:</span>
                                            <span>{show.genres.join(', ')}</span>
                                        </div>
                                    )}
                                    {show.status && (
                                        <div className="meta-item">
                                            <span className="meta-label">Status:</span>
                                            <span>{show.status}</span>
                                        </div>
                                    )}
                                    {show._embedded && show._embedded.episodes && (
                                        <div className="meta-item">
                                            <span className="meta-label">Episodes:</span>
                                            <span>{show._embedded.episodes.length}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {show.summary && (
                            <div className="show-summary">
                                <h2>Synopsis</h2>
                                <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(show.summary) }} />
                            </div>
                        )}
                        <div className="show-actions">
                            <Link to="/" className="back-button">← Back to Search</Link>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;