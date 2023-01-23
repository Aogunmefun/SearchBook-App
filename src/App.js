import logo from './logo.svg';
import React, {useState, useRef} from "react"
import './App.css';
import SearchBar from './components/searchbar/searchbar.tsx';
import Results from './components/results/results.tsx';
import Wishlist from './components/wishlist/wishlist.tsx';
import axios from 'axios';

export const WishList = React.createContext()

function App() {

  const [wishlist, setWishList] = useState([])
  const [loading, setLoading] = useState(false)
  const searchResults = useRef([])
  
  const handleSearch = (term) =>{
    setLoading(true)
   
    axios({
      url:`https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=0&maxResults=20`,
      method:"GET"
    }).then((data)=>{
      setLoading(false)

      console.log(data.data)
      searchResults.current = data.data.items
    })
  }

  const wishlistControl = {
    wishlist,
    setWishList
  }

  return (
    <WishList.Provider value={wishlistControl}>
      <div className="App">
        <SearchBar loading={loading} handleSearch={handleSearch} />
        
        <Results searchResults={searchResults.current} />
        <div className="sidebar">
          <Wishlist />
        </div>
        
      </div>
    </WishList.Provider>
    
  );
}

export default App;
