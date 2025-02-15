import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="wpo-section-title">
            <span>{props.subTitle}</span>
            <h2  style={{ fontFamily: 'Arial' }}>{props.Title}</h2>
        </div>
    )
}

export default SectionTitle;
