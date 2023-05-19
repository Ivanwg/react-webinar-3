import React from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import './style.css';

function Head({children}){
  const cn = bem('Head');

  return (
    <div className={cn()}>
      <div className={cn('top')}>
        {children}
      </div>
    </div>
  )
}

Head.propTypes = {
  children: PropTypes.node.isRequired
};

export default React.memo(Head);
