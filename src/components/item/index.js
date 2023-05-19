import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import { formatPrice } from '../../utils';
import './style.css';

function Item(props){

  const cn = bem('Item');

  const callbacks = {
    onClick: () => {
      
    }
  }

  return (
    <div className={cn()}>
      <div className={cn('code')}>{props.item.code}</div>
      <div className={cn('title')}>
        {props.item.title}
      </div>
      <div className={cn('price')}>
        {formatPrice(props.item.price) + ' ₽'}
      </div>
      <div className={cn('actions')}>
        <button onClick={callbacks.onClick}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  // onDelete: PropTypes.func,
};

Item.defaultProps = {

}

export default React.memo(Item);
