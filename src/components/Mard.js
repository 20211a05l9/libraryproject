import React, { useState } from "react";
import Mdesc from "./Mdesc";
const Mard = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if (thumbnail !== undefined) {
                        return (
                            <>
                                <div className="Mard" onClick={() => { setShow(true); setItem(item) }}>
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>

                                    </div>
                                </div>
                                <Mdesc show={show} item={bookItem} onClose={() => setShow(false)} />
                            </>

                        )
                    }
                    else {
                        return null
                    }
                })
            }


        </>
    )
}
export default Mard;