import React from 'react';
import ResultItem from './ResultItem';
import './SearchResults.css';
import Loader from 'react-loader-spinner';

const SearchResults = ({results, isLoading, isEnd}) => {
    return(
        <>
            {
                results && 
                <div className = "search-results">
                    {results.map(resItem => <ResultItem info = {resItem} key = {resItem.id} />)}
                </div>
            }
            <div className = "flags">
                {isLoading && <Loader type="Hearts" color="#ffc0cb" height={80} width={80} />}
                {isEnd && 'No more search results'}
            </div>
        </>
    );
};

export default SearchResults;