import React from 'react';
import '../../page-structure.scss';
import { FolderTree } from '../../../components/FolderTree/FolderTree';
import folderData from './FolderStructure.json';

const FolderTreePage = () => {
    return (
        <>
            <div className="page-container">
                <h2 className="page-continer-heading">Folder Tree</h2>
                <FolderTree data={folderData} />
            </div>
        </>
    )

}

export default FolderTreePage;