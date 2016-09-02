import React from 'react';
import classNames from 'classnames';
import css from './button.css';

export default class UploadButton extends React.Component {
   constructor(props, context) {
      super(props, context);

      this.state = {
         value: ''
      };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange (e) {
      this.setState({
         value: e.target.value.split(/(\\|\/)/g).pop()
      });
      if (this.props.onChange) {
         this.props.onChange(e);
      }
   }

   render() {
      // let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
      // console.log('UploadButton', this.props);
      let { color } = this.props;
         // console.log(this.props.onChange);
      let btnClasses = classNames(
         css.btn,
         css.raised,
         css.flexItem,
         css.input,
         css[color]
      );

      // Construct props
      // let props = {
      //    disabled: this.props.disabled,
      //    ref:'container',
      //    className: btnClasses,
      //    color: this.props.color,
      //    onMouseEnter: this.handleMouseEnter,
      //    onMouseLeave: this.handleMouseLeave,
      //    onClick: this.handleClick
      // }

      return (
         <input type='file'
            onChange={this.handleChange}
            disabled={this.props.disabled}
            accept={this.props.accept}
            className={btnClasses}
            webkitdirectory />
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
