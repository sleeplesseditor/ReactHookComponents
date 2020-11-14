import React from 'react';
import './Modal.scss';

const Backdrop = ({ clicked, show }) => (
    show ? <div className='modal-backdrop' onClick={clicked}></div> : null
)

const modal = ({ data, modalClosed, show }) => {
    return (
        <>
            <Backdrop show={show} clicked={modalClosed} />
            {data && show ? (
                <div className='modal'>
                    
                    <hr />
                    <div className="modal-btn-container">
                        <button className="modal-btn" onClick={modalClosed}>Close</button>
                    </div>
                </div>
            ): null }
        </>
    );
};


export default modal;