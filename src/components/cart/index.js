import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import { plural } from '../../utils';
import './style.css';
import Modal from '../modal';
import List from '../list';

function Cart({chosenObject}){
  const cn = bem('Cart');
  const count = Object.keys(chosenObject).length;
  const price = 11

  const [isModal, setIsModal] = useState(false);
  const callbacks = {
    onModalClose: useCallback(() => {
      setIsModal(false)
    }, [setIsModal]),
    onOpen: useCallback(() => {
      setIsModal(true)
    }, [setIsModal])
  }

  return (
    <>
      <div className={cn()}>
        <div className={cn('preview')}>
          В корзине: 
          <b>{
            count ? `${count} ${plural(count, {one: 'товар', few: 'товара', many: 'товаров'})} / ${price} ₽` : 'Пусто'
          }</b>
        </div>
        <button className={cn('btn')} onClick={callbacks.onOpen}>Перейти</button>
      </div>
      {isModal &&
      <Modal title='Корзина' onClose={callbacks.onModalClose}>
         {!count ? <div className={cn('empty')}>Пусто</div> :
          <List list={(Object.values(chosenObject))}>

          </List>
         }
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
  }).isRequired
};

export default Cart;
