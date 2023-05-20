import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import './style.css';

function List({list, childElem}){
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          {childElem(item)}
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  childElem: PropTypes.func.isRequired
};

export default React.memo(List);
