import React from 'react';
import './VedioItem.css';


const VedioItem = ({ vedio, onVedioSelectItem }) =>{

    return (    
        <div onClick = { ()=> onVedioSelectItem(vedio)} className="item vedio-item">
            <img className="ui image" src={vedio.snippet.thumbnails.medium.url} alt={vedio.snippet.description}/>
            <div className="content">
                <div className="header">
                    {vedio.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VedioItem;