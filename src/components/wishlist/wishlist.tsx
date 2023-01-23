import React, {useState,useContext} from "react";
import "./wishlist.css"
import { WishList } from "../../App";

function Wishlist(props) {
    
    const wishlist = useContext(WishList)
    const [expanded, setExpanded] = useState(true)

    

    return(
        <div  className={`wishlist ${!expanded?"close":""}`}>
        <h3 onClick={()=>setExpanded(!expanded)}>Wishlist <i  className="material-icons">{expanded?"expand_less":"expand_more"}</i></h3>
            {
                wishlist.wishlist.map((book,index)=>{
                    return(
                        <div key={book.id} className="wishlist-book">
                            
                            <p>Book Title: {book.title}</p>
                            <p>Book ID: {book.id}</p>
                            <button onClick={()=>wishlist.setWishList(wishlist.wishlist.filter((entry)=>entry.id!==book.id))} className="btn--deleteWishlist">Delete</button>
                            {/* <button  className="btn--deleteWishlist">Delete</button> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Wishlist