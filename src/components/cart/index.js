import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import { plural, formatPrice } from '../../utils';
import Modal from '../modal';
import List from '../list';
import Item from '../item';
import './style.css';

function Cart({chosenObject, count, price, onRemove}){
  const cn = bem('Cart');
  
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
          <b>{count ? `${count} ${plural(count, {one: 'товар', few: 'товара', many: 'товаров'})} / ${formatPrice(price)} ₽` : 'Пусто'}</b>
        </div>
        <button className={cn('btn')} onClick={callbacks.onOpen}>Перейти</button>
      </div>
      {/* Здесь ниже очень просится портал */}
      {isModal &&
      <Modal title='Корзина' onClose={callbacks.onModalClose}>
        {!count ? 
        <div className={cn('empty')}>Пусто</div> : 
        <>
          <List list={(Object.values(chosenObject))} childElem={listItem}/>
          <div className={cn('summary')}>
            Итого: <span>{`${formatPrice(price)} ₽`}</span>
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
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onRemove: PropTypes.func
};

List.defaultProps = {
  onRemove: () => {},
}

export default Cart;
