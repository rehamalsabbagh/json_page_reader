import React from 'react';
import GeneralUtil from '../../utils/GeneralUtil';

function Iframe(props) {
  require('./Iframe.css');
  let _props = {
    className: props.className + ' t_iframe',
    style: GeneralUtil.responsiveObject(props.style),
    src: props.src,
  };
  return <iframe {..._props} />;
}

Iframe.defaultProps = {
  className: '',
  style: {},
  src: '',
};

export default Iframe;
