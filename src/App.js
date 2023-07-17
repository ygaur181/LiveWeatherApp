import Output from './components/Output';
import Searchbar from './components/Searchbar'
import './components/style.css'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('Delhi')
  const setSerachData = (searchData)=>{
    setSearch(searchData)
  }

  return(
      <div className='mainContainer'>
        <Searchbar getSearchData = {setSerachData}/>
        <Output search = {search}/>
      </div>
  );
}

export default App;
