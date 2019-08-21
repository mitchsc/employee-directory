import React from 'react';

const SearchBox = ({ searchChange }) => {
    return(
        <div className='pa2'>
            <input style={{outline:'none'}} className='pa3 br3 b--black bg-white'
                type='search' placeholder='Search Directory' onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;