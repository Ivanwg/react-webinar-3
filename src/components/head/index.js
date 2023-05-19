import React from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import './style.css';

function Head({title, bottomContent}){
  const cn = bem('Head');

  return (
    <div className={cn()}>
      <div className={cn('top')}>
        <h1>{title}</h1>
      </div>
      { bottomContent &&
      <div className={cn('bottom')}>
        {bottomContent}
      </div>}
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node.isRequired,
  bottomContent: PropTypes.node,
};

export default React.memo(Head);
