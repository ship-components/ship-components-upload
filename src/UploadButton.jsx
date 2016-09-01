import React from 'react';
import classNames from 'classnames';
import css from './button.css';

export default class UploadButton extends React.Component {
   render() {
      // let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
      console.log('UploadButton', this.props);
      let color = this.props.color,
         label = this.props.label;

      console.log(color, label);

      return (
         <button className={
            classNames(
                  css.btn,
                  css.raised,
                  css.flexItem
            )
         } {...this.props} />
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
