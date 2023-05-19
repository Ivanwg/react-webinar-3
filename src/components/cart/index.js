import React from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import './style.css';

function Cart(){
  const cn = bem('Cart');
  const count = 22;
  const price = 11;

  return (
    <div className={cn()}>
      <div className={cn('preview')}>
        В корзине: 
        <b>{count} товара / {price} ₽</b>
      </div>
      <button className={cn('btn')}>Перейти</button>
    </div>
  )
}

// Cart.propTypes = {
//   title: PropTypes.node.isRequired,
//   bottomContent: PropTypes.node,
// };

export default React.memo(Cart);
