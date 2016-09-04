import React from 'react';
import classNames from 'classnames';

import css from './button.css';

export default class ImagePreview extends React.Component {

   /**
      * Find out if image src is available
      * If not hide the image area otherwise show the image
      * @return {String}
   */
   toggleImage () {
      let image = this.props.imgSrc,
         imgShow = classNames(css.img, css.show),
         imgHide = classNames(css.img, css.hide);
      return image === '' ? imgHide : imgShow;
   }

   render() {
      return (
         <img
            src={this.props.imgSrc}
            className={this.toggleImage()}
         />
      );
   }
}

/**
 * Type Checks
 * @type {Object}
 */
const { string } = React.PropTypes;

ImagePreview.propTypes = {
   imgSrc: string
};
