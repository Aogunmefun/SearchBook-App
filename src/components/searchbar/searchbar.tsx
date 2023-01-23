import React, {useState} from "react";
import "./searchbar.css"



function SearchBar(props:{handleSearch(search:string), loading:boolean}) {
    
    const [search, setSearch] = useState("")

    const handleChange = (el)=>{
        
        setSearch(el.target.value)
    }



    return(
        <div className="searchbar">
            <input className="input--searchbar" type="search" placeholder="type to search book" value={search} onChange={handleChange} />
            <button className={`btn--searchBar ${props.loading?"disabled":""}`} onClick={()=>{search===""?alert("please type a querry to search"):props.handleSearch(search)}}>Search</button>
        </div>
    )
}

export default SearchBar