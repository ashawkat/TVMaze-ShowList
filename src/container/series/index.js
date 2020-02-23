import React, {Component} from 'react';
import SeriesList from '../../components/serieslist';
import Loader from '../../components/loader';
import Intro from '../../components/intro';

class Series extends Component {

    state = {
        series : [],
        seriesName : '',
        isFetching : false
    }

    // componentDidMount(){
    //   const series = ["Naruto", "Boruto", "One Punch Man"]

    //   setTimeout(()=>{
    //     this.setState({series})
    //   }, 2000);
    // }

    // componentDidMount(){
    //     fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    //     .then(response => response.json())
    //     .then(json => this.setState({series:json}))
    // }

    onSeriesInputChagne = e => {
        this.setState({ seriesName: e.target.value, isFetching: true });
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ series:json, isFetching: false }))
    }

    render() {
        const { series, seriesName, isFetching } = this.state;
        return(
            <div>
                <Intro message="Find your movies here..." /> 
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChagne} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>Nothing found using this keyword!</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
        )
    }
}

export default Series