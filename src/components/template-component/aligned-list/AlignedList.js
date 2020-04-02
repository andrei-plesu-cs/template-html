import React from 'react'

function AlignedList(props) {
    const {keys, values, title, leftColSpan, rightColSpan} = props;

    const renderItems = () => {
        let returnedArray = [];
        for(let i=0; i<keys.length; i++) {
            returnedArray.push((
            <React.Fragment>
                <div 
                    className={`col-lg-${leftColSpan}`} 
                    style={{textAlign: "right", color: 'gray', fontSize: '1.2rem', marginBottom: '10px'}}
                >
                    {keys[i] || ''}
                </div>
                <div 
                    className={`col-lg-${rightColSpan}`} 
                    style={{textAlign: 'left', fontSize: '1.2rem', marginBottom: '10px'}}>
                    {values[i] || ''}
                </div>
            </React.Fragment>))
        }

        return returnedArray;
    }

    return (
        <div className="row">
             <div className="col-lg-3" style={{textAlign: 'right'}}>
                <div className="data_header">{title}</div>
            </div>
            <div className="col-lg-9"></div>
            {renderItems()}
        </div>
    )
}

AlignedList.defaultProps = {
    values: [],
    keys: [],
    title: '',
    leftColSpan: 3,
    rightColSpan: 9
}

export default AlignedList;