import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import { plural } from '../../utils';
import './style.css';
import Head from '../head';
import Controls from '../controls';

function Modal({title, controls, mainContent}){
  const cn = bem('Modal');

  return (
    <div className={cn()}>
      <div className={cn('content')}>
        <Head>
          <h2>{title}</h2>
          <button>Закрыть</button>
        </Head>
        <Controls>
          {controls}
        </Controls>
        <div className={cn('data')}>
          {mainContent}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.node,
  controls: PropTypes.node,
  mainContent: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  title: '',
  controls: '',
}

export default React.memo(Modal);
