import React from 'react'
import './style.css'
import AlignedList from '../aligned-list/AlignedList';

function TableComponent(props) {
    const {columns, rows} = props;

    const renderColumns = () => {
        return columns.map((column, index) => {
            return <th key={index}>{column}</th>
        });
    }

    const renderFooter = () => {
        return <div className="render_footer_wrapper">
            <div className="row" style={{width: '30%'}}>
                <div className="col-lg-8 text-left">
                    Total valoare
                </div>
                <div className="col-lg-4 text-left">
                    1,965,331.14
                </div>
                <div className="col-lg-8 text-left">
                    Total TVA
                </div>
                <div className="col-lg-4 text-left">
                    9,364.60
                </div>
                <div className="col-lg-8 text-left">
                    Total acciza
                </div>
                <div className="col-lg-4 text-left">
                    9,364.60
                </div>
                <div className="table_line_divider"></div>
                <div 
                    className="col-lg-8 text-left"
                    style={{textTransform: 'uppercase', fontWeight: 'bold'}}
                >
                    Total de plata
                </div>
                <div 
                    className="col-lg-4"
                    style={{fontWeight: 'bold'}}
                >
                    2,338,744.06
                </div>
            </div>
        </div>
    }

    const renderRows = () => {
        return rows.map((row, index1) => {
            console.log(row)
            return <tr key={index1}>
                {row.map((rowData, index2) => {
                    console.log(rowData)
                    return <td key={index2}>{rowData}</td>
                })}
            </tr>
        })
    }

    return (
        <React.Fragment>
            <table style={{width: '100%', marginTop: '4rem'}}>
                <thead>
                    <tr className="table_header">
                        {renderColumns()}
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
            {renderFooter()}
        </React.Fragment>
    )
}

TableComponent.defaultProps = {
    columns: [],
    rows: []
}

export default TableComponent;