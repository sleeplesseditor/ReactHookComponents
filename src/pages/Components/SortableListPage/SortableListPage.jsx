import React, { useState } from 'react';
import '../../page-structure.scss';
import './SortableListPage.scss';
import SortableList from '../../../components/SortableList/SortableList';

const SortableListPage = () => {
    const initialItems = [];
    let i = 0
    while (i < 10) {
        initialItems.push({
        title: `List Item ${i + 1}`,
        description: 'Aenean aliquam molestie urna, vel aliquam.'
      })
      i++
    }

    const [items, setItems] = useState(initialItems);

    function ItemComponent({
        dragging,
        dragged,
        children: { title, description },
        ...rest
      }) {
        return (
          <div {...rest} className={`list__item ${dragged ? 'is-dragging' : ''}`}>
            <div className="list__item-content">
              <div className="list__item-title">
                {title}
              </div>
              <div className="list__item-description">
                {description}
              </div>
            </div>
          </div>
        )
    }

    return (
        <div className="page-container">
            <h2 className="page-continer-heading">SortableList</h2>
            <SortableList
                className="list"
                itemComponent={ItemComponent}
                onChange={setItems}
                value={items} 
            />
        </div>
    )
}

export default SortableListPage;