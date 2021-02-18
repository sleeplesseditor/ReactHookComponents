import React, { useCallback, useState } from 'react';
import Paginations from '../../../components/Pagination/PaginationHook';
import './PaginationPage.scss';
import '../../page-structure.scss';
import Data from './paginationData.json';

const SidePanelPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    let NUM_OF_RECORDS = Data.length;
    let LIMIT = 5;

    const onPageChanged = useCallback(
        (event, page) => {
            event.preventDefault();
            setCurrentPage(page);
        },
        [setCurrentPage]
    );
    const currentData = Data.slice(
        (currentPage - 1) * LIMIT,
        (currentPage - 1) * LIMIT + LIMIT
    );

    return (
        <>
            <div className="page-container">
                <h2 className="page-continer-heading">Pagination</h2>
                <main role="main" className="container">
                    <div className="current-page">
                        <div className="user">
                            <div className="user__body">
                                <table id="table1">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>userId</th>
                                    <th width="100%">title</th>
                                    <th>status</th>
                                    </tr>
                                </thead>
                                {currentData.map((item) => {
                                    return (
                                    <tbody>
                                        <tr>
                                        <th scope="row">{item.id}</th>
                                        <th scope="row">{item.userId}</th>
                                        <td>{item.title}</td>
                                        <td>{item.completed ? "completed" : "not completed"}</td>
                                        </tr>
                                    </tbody>
                                    );
                                })}
                                </table>
                            </div>
                        </div>
                        <div className="pagination-wrapper">
                            <Paginations
                                totalRecords={NUM_OF_RECORDS}
                                pageLimit={LIMIT}
                                pageNeighbours={2}
                                onPageChanged={onPageChanged}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )

}

export default SidePanelPage;