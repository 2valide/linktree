import React from 'react';
import "../styles/lien.css";

const Lien = ({src, alt, href, site}) => {

    return (
        <a href={href}>
            <div className="lien-container">
                <img src={src} alt={alt} />
                <p>{site}</p>
            </div>
        </a>
    );
};

export default Lien;


