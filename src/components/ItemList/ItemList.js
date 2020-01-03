import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDeleteItem }) => {
  if (items.length > 0) {
    return (
      <ul className={styles.list}>
        {items.map(item => (
        <li key={item.id}>
          <Item
            value={item.value} 
            isDone={item.isDone} 
            id={item.id} 
            onClickDone={onClickDone}
            onClickDeleteItem={onClickDeleteItem} 
          />
        </li>))}
      </ul>
    );
  } else {
    return (
      <div className={styles['empty-list']}>
        <p className={styles['empty-list__text']}>Что-то пошло не так...</p>
        <p className={styles['empty-list__subtext']}>Попробуйте загрузить ещё раз</p>
      </div>
    );
  };
};

export default ItemList;