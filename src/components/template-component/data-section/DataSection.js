import React from 'react'
import './style.css'

function DataSection(props) {
    const {children, title} = props;
    return <div className="data_section_wrapper">
        <div className="data_section_title">
            {title}
        </div>
        <div className="data_section_content">
            {children}
        </div>
    </div>
}

DataSection.defaultProps = {
    title: ''
}

export default DataSection;