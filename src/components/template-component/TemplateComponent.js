import React from 'react'
import './style.css'
import AlignedList from './aligned-list/AlignedList'
import data from './data'
import TableComponent from './table-component/TableComponent'
import DataSection from './data-section/DataSection'

function TemplateComponent() {
    return (
        <div className="main_wrapper">
            <div className="invoice-header">
                <div className="row">
                    <div className="col-lg-7 template_my_col">
                        <div className="main_logo">
                            <i class="fas fa-print"></i>
                            <span 
                                style={{fontWeight: '900', fontSize: '2.5rem', marginLeft: '20px'}}
                            >Energetica SRL</span>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        {/* <div className="invoice_header">
                            <div className="invoice_header_title">
                                Factura fiscala
                            </div>
                            <div className="invoice_header_subheader">
                                BZGET 362
                            </div>
                        </div>
                        <AlignedList
                            leftColSpan={5}
                            rightColSpan={7}
                            keys={['Data emitere', 'Data scadenta', 'Cota TVA']}
                            values={['20/08/2019', '20/08/2019', '19.00%']}
                        /> */}
                    </div>
                </div>
            </div>
            
            <div className="row" style={{marginTop: '4rem'}}>
                <div className="col-lg-6">
                    <AlignedList 
                        title="Furnizor"
                        keys={data.clientData.keys} 
                        values={data.clientData.values}
                    />
                </div>
                <div className="col-lg-6">
                    <AlignedList 
                        title="Cumparator"
                        keys={data.providerData.keys} 
                        values={data.providerData.values}
                    />
                </div>
            </div>
            <TableComponent 
                columns={data.tableData.columns} 
                rows={data.tableData.rows} 
            />

            <DataSection title="Informatii privind drepturile clientilor vulnerabili din motive de sanatate">
                <div>
                    În cazul în care,la un loc de consum locuiește o persoană care necesită menţinerea înviaţă prin aparate electrice,intrând astfel în categoria clienţilor vulnerabili ,iar titularul contractului de furnizare / distribuţie aduce la cunoştinţă operatorului de distribuție şi prezintă o confirmare medicală de la un medics pecialist, vizată şi de medicul de familie, în acest sens,operatorul de distribuție este obligat:
                </div>
                <ul style={{marginTop: '15px'}}>
                    <li>să înregistreze adresa / locul de consum drept o instalaţie specială , din motive umanitare</li>
                    <li>să ia toate măsurile pentru evitarea deconectării respectivului loc de consum</li>
                    <li>să rezolve cu prioritate întreruperile neplanificate care afectează respectivul loc de consum</li>
                    <li>să asigure o sursă suplimentară de alimentare a respectivului loc de consum</li>
                    <li>să ofere utilizatorului un număr de telefon de urgenţă</li>
                    <li>dacă este cazul, să permită ca relaţia cu clientul vulnerabil respectiv să se poată desfăşura prin intermediul unei terţe persoane,împuternicite de titularul contractului de furnizare / distribuţie încheiat pentru locul de consum respectiv</li>
                </ul>
                <div className="legal_reference_data">(art 12 din Standard)</div>
            </DataSection>
            <DataSection>
                <div>
                    În cazul clienţilor vulnerabili din motive de sănătate operatorul de distribuție informează furnizorii acestora cu privire la data, ora, precum şi durata întreruperilor necesare, înscris sau telefonic, cu minimum 15 zile lucrătoare înainte de data de începere a lucrărilor și retransmite anunţul cu privire la data întreruperii cu 5 zile lucrătoare înainte de data de începere a lucrărilor
                    <div className="legal_reference_data">(art 12 din Standard)</div>
                </div>
            </DataSection>
            <div style={{marginTop: '5rem'}}></div>
        </div>
    )
}

export default TemplateComponent;