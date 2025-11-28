import React from 'react';
import DOMPurify from 'dompurify';
import './index.css';
import { Link } from 'react-router-dom';

// Sanitize HTML content to prevent XSS attacks
const sanitizeHTML = (html) => {
    return DOMPurify.sanitize(html, { 
        ALLOWED_TAGS: ['p', 'b', 'i', 'em', 'strong', 'br'],
        ALLOWED_ATTR: []
    });
};

const SeriesListItem = ({ series }) => (
    <div className="series-card">
        <Link to={`/series/${series.show.id}`}>
            <div className="card-image">
                {series.show.image ? (
                    <img 
                        src={series.show.image.medium} 
                        alt={series.show.name}
                        loading="lazy"
                    />
                ) : (
                    <div className="no-image">
                        <span>No Image</span>
                    </div>
                )}
            </div>
            <div className="card-content">
                <h3 className="card-title">{series.show.name}</h3>
                {series.show.rating && series.show.rating.average && (
                    <div className="card-rating">
                        <span className="rating-star">★</span>
                        <span>{series.show.rating.average}/10</span>
                    </div>
                )}
                {series.show.genres && series.show.genres.length > 0 && (
                    <div className="card-genres">
                        {series.show.genres.slice(0, 3).map((genre, index) => (
                            <span key={index} className="genre-tag">{genre}</span>
                        ))}
                    </div>
                )}
                {series.show.summary && (
                    <div 
                        className="card-summary"
                        dangerouslySetInnerHTML={{ 
                            __html: sanitizeHTML(
                                series.show.summary.length > 100 
                                    ? series.show.summary.substring(0, 100) + '...' 
                                    : series.show.summary
                            )
                        }}
                    />
                )}
            </div>
        </Link>
    </div>
)

const SeriesList = (props) => {
    return(
        <div className="series-grid">
            {props.list.map(series => (
                <SeriesListItem series = {series} key={series.show.id} />
            ))}
        </div>
    )
}

export default SeriesList;