import React from 'react';
import classNames from 'classnames';
import css from './button.css';

export default class UploadButton extends React.Component {
   render() {
      // let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
      // console.log(css[this.props.type]);

      // let className = cx(cx.btn, cx.blue);

      return (
         <div className={classNames(css.btn,
                  css.blue,
                  css.raised
               )
         }>
            {this.props.children}
         </div>
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
