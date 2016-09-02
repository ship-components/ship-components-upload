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
      let image = this.props.onChange,
         imgShow = classNames(css.img, css.show),
         imgHide = classNames(css.img, css.hide);
      return image === '' ? imgHide : imgShow;
   }

   render() {
      return (
         <img
            src={this.props.onChange}
            className={this.toggleImage()}
         />
      );
   }
}

/**
 * Type Checks
 * @type {Object}
 */
ImagePreview.propTypes = {
};

/**
 * Defaults
 * @type {Object}
 */
ImagePreview.defaultProps = {
};
