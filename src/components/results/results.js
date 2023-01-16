import React, {useEffect, useContext} from "react";
import "./results.css"
import { WishList } from "../../App";

function Results(props) {
    
    const wishList = useContext(WishList)

    useEffect(()=>{
        // console.log(props.searchResults)
        // console.log(wishList.wishlist)
    })

    return(
        <div className="results">
            {
                props.searchResults.map((result,index)=>{
                return(
                    <div onClick={()=>{wishList.setWishList([...wishList.wishlist, {title:result.volumeInfo.title, id:result.id}])}} key={result.id} className="result">
                        <img src={result.volumeInfo.imageLinks?.smallThumbnail} alt="" />
                        <div className="result-info">
                            <p className="p--results-title">{result.volumeInfo.title}</p>
                            <div className="publishing-info">
                                <p>Book ID: {result.id}</p>
                                <p>Author(s): {result.volumeInfo.authors?.join(", ")}</p>
                                <p>Publisher: {result.volumeInfo?.publisher}</p>
                                <p>Publish Date: {result.volumeInfo?.publishedDate}</p>
                                {/* <p>{result.volumeInfo.description}</p> */}
                                <p> Description: {result.searchInfo?.textSnippet}</p>
                            </div>
                        </div>
                        
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Results