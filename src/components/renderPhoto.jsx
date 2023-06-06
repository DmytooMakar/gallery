import React from "react";

import "./renderPhoto.scss"

export default function RenderPhoto({ photo, getImg }) {

    return <div className="pics" onClick={() => getImg(photo.url)}>
        <img src={ photo.url } />
    </div>
}