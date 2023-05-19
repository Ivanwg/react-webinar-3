import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import { plural } from '../../utils';
import './style.css';
import Modal from '../modal';

function Cart(){
  const cn = bem('Cart');
  const count = 21;
  const price = 11;

  const [isModal, setIsModal] = useState(true);

  return (
    <>
      <div className={cn()}>
        <div className={cn('preview')}>
          В корзине: 
          <b>{count} {plural(count, {one: 'товар', few: 'товара', many: 'товаров'})} / {price} ₽</b>
        </div>
        <button className={cn('btn')}>Перейти</button>
      </div>
      {isModal &&
      <Modal title='Корзина'>
         
      </Modal>}
    </>
  )
}

// Cart.propTypes = {
//   title: PropTypes.node.isRequired,
//   bottomContent: PropTypes.node,
// };

export default React.memo(Cart);
