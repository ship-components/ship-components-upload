import React from 'react';
import classNames from 'classnames';
import css from './button.css';

export default class UploadButton extends React.Component {
   render() {

      return (
         <input className={classNames(css.btn)} type='submit' value={this.props.children} />
      );
   }
}

/**
 * Type Checks
 * @type {Object}
 */
UploadButton.propTypes = {
};

/**
 * Defaults
 * @type {Object}
 */
UploadButton.defaultProps = {
};
