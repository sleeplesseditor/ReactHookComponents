import React, { useState } from 'react';
import '../../page-structure.scss';
import './ModalPage.scss';
import Modal from '../../../components/Modal/Modal';

const SidePanelPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState([]);

    const handleModalClick = () => {
        setModalData([]);
        setOpenModal(!openModal);
    }

    return (
        <>
            <div className="page-container">
                <h2 className="page-continer-heading">Modal</h2>
                <div className="page-button-container">
                    <button className="panel-btn" onClick={() => setOpenModal(!openModal)}>Open Modal</button>
                </div>
                <Modal 
                    data={modalData}
                    modalClosed={handleModalClick}
                    show={openModal}
                />
            </div>
        </>
    )

}

export default SidePanelPage;