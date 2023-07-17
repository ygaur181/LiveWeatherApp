import React from 'react'
import {useState} from 'react'


function Input(props) {
  const [searchData, setSearchData] = useState()

  const handleSearch = ()=>{
    props.getSearchData(searchData)
    setSearchData('')
  }
  return (
    <div className="headingContainer">
      
      <h1 className='Heading'>Weather App</h1>
      <input type="text" placeholder='Search your City' className='searchBar' value={searchData} onChange={(e)=>{setSearchData(e.target.value)}}/>
      <button className='searchButton' onClick={handleSearch}>Search</button>

    </div>
    
  )
}

export default Input