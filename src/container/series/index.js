import React, {Component} from 'react';
import SeriesList from '../../components/serieslist';
import Loader from '../../components/loader';
import Intro from '../../components/intro';
import './index.css';

class Series extends Component {

    state = {
        series : [],
        seriesName : '',
        isFetching : false,
        error: null
    }

    onSeriesInputChange = e => {
        // Input validation and sanitization
        const sanitizedValue = e.target.value.replace(/[<>]/g, '').substring(0, 100);
        this.setState({ seriesName: sanitizedValue, isFetching: true });
        
        // Only fetch if there's actual content to search for
        if (sanitizedValue.trim() === '') {
            this.setState({ series: [], isFetching: false });
            return;
        }
        
        fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(sanitizedValue)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => this.setState({ series: json, isFetching: false }))
            .catch(error => {
                console.error('Error fetching series data:', error);
                this.setState({ series: [], isFetching: false, error: 'Failed to fetch data' });
            });
    }

    render() {
        const { series, seriesName, isFetching, error } = this.state;
        return(
            <div className="series-container">
                <div className="search-section">
                    <Intro message="Find your favorite TV shows..." /> 
                    <div className="search-box">
                        <span className="search-icon">🔍</span>
                        <input 
                            value={seriesName} 
                            type="text" 
                            onChange={this.onSeriesInputChange}
                            placeholder="Search for TV shows..."
                            className="search-input"
                        />
                    </div>
                </div>
                
                { error && <p className="error-message">{error}</p> }
                
                <div className="content-section">
                    {
                        !isFetching && !error && series.length === 0 && seriesName.trim() === ''
                        &&
                        <div className="empty-state">
                            <p>Enter a TV show name to start searching</p>
                        </div>
                    }
                    {
                        !isFetching && !error && series.length === 0 && seriesName.trim() !== ''
                        &&
                        <div className="empty-state">
                            <p>No shows found matching "{seriesName}"</p>
                        </div>
                    }
                    {
                        isFetching && <Loader />
                    }
                    {
                        !isFetching && !error && <SeriesList list={this.state.series} />
                    }
                </div>
            </div>
        )
    }
}

export default Series