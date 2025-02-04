

import React from 'react'
// import Icon2 from '../../assets/Iconn2.svg'
import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <div className='app-container1'>
            <div>
        
                {/* <CiSearch className='black' /> */}
                <input  className='input' placeholder='Search Movies or TV Shows' />
            </div>
        </div>
    )
}

export default Search