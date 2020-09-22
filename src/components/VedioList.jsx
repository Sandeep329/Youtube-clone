import React from 'react';
import VedioItem from './VedioItem';
const VedioList = ({ vedios, onVedioSelected }) =>{

    const renderedList = vedios.map((vedio) =>{
        return <VedioItem key = {vedio.id.videoId} onVedioSelectItem={onVedioSelected}   vedio={vedio}/>;
    });

    return <div className="ui relaxed divided list">
        {renderedList}
    </div>
};

export default VedioList;