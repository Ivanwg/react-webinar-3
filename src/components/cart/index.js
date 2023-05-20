import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import { plural, formatPrice } from '../../utils';
import Modal from '../modal';
import List from '../list';
import Item from '../item';
import './style.css';

function Cart({chosenObject, onRemove}){
  const cn = bem('Cart');
  const count = Object.keys(chosenObject).length;
  const price = formatPrice(Object.values(chosenObject).reduce((accumulator, item) => accumulator + item.count * item.price, 0)) + ' ₽';
  
  const [isModal, setIsModal] = useState(false);
  const callbacks = {
    onModalClose: useCallback(() => {
      setIsModal(false)
    }, [setIsModal]),
    onOpen: useCallback(() => {
      setIsModal(true)
    }, [setIsModal])
  }
 
  const listItem = useCallback(item => <Item item={item} onClick={onRemove} actionName='Удалить'/>, []);

  return (
    <>
      <div className={cn()}>
        <div className={cn('preview')}>
          В корзине: 
          <b>{count ? `${count} ${plural(count, {one: 'товар', few: 'товара', many: 'товаров'})} / ${price}` : 'Пусто'}</b>
        </div>
        <button className={cn('btn')} onClick={callbacks.onOpen}>Перейти</button>
      </div>
      {isModal &&
      <Modal title='Корзина' onClose={callbacks.onModalClose}>
        {!count ? 
        <div className={cn('empty')}>Пусто</div> : 
        <>
          <List list={(Object.values(chosenObject))} childElem={listItem}/>
          <div className={cn('summary')}>
            Итого: <span>{price}</span>
          </div>
        </>}
      </Modal>}
    </>
  )
}

Cart.propTypes = {
  chosenObject: PropTypes.shape({
    id: PropTypes.shape({
      code: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number
    })
  }).isRequired,
  onRemove: PropTypes.func
};

List.defaultProps = {
  onRemove: () => {},
}

export default Cart;
