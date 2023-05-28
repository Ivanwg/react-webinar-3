import {memo} from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat} from '../../utils';
import './style.css';

function Detail({desc, price, madeInCountry, madeInCode, category, year, onAdd}) {
  const cn = bem('Detail');
  return (
    <div className={cn()}>
      <p className={cn('desc')}>{desc}</p>
      <p className={cn('desc')}>Страна производитель: 
        <b>{madeInCountry} ({madeInCode})</b>
      </p>
      <p className={cn('desc')}>Категория: 
        <b>{category}</b>
      </p>
      <p className={cn('desc')}>Год выпуска: 
        <b>{year}</b>
      </p>
      <p className={cn('price')}>Цена: {numberFormat(price)}₽</p>
      <button onClick={onAdd}>Добавить</button>
    </div>
  );
}

Detail.propTypes = {
  onAdd: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  madeInCountry: PropTypes.string.isRequired,
  madeInCode: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
};

export default memo(Detail);
