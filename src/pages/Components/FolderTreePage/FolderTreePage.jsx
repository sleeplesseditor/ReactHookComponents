import React from 'react';
import '../../page-structure.scss';
import { Tree } from '../../../components/FolderTree/FolderTree';

const FolderTreePage = () => {
    return (
        <>
            <div className="page-container">
                <h2 className="page-continer-heading">Folder Tree</h2>
                <Tree />
            </div>
        </>
    )

}

export default FolderTreePage;