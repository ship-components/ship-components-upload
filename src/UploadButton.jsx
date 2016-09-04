import React from 'react';
import classNames from 'classnames';
import css from './button.css';
import $ from 'jquery';

export default class UploadButton extends React.Component {
   /**
      * Base Button
      * @param  {Object} props
   */
   constructor(props) {
      super(props);
      this.state = {
         buttonLabel: ''
      };
      this.handleChange = this.handleChange.bind(this);
   }

   /**
      * Handle the button text label after component rendered
   */
   componentDidMount () {
      let $this = $(this.myTextInput),
         label = this.props.label;
      $this.attr('data-content', label);
   }

   /**
      * Handle the button state
      * @param  {Event]} event
   */
   handleChange (e) {
      this.setState({
         buttonLabel: e.target.value.split(/(\\|\/)/g).pop()
      });
      if (this.props.onChange) {
         this.props.onChange(e);
      }
   }

   render() {
      // let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
      let { color } = this.props;
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
            ref={(ref) => this.myTextInput = ref}
            onChange={this.handleChange}
            disabled={this.props.disabled}
            accept={this.props.accept}
            className={btnClasses}
         />
      );
   }
}

const { string, func } = React.PropTypes;
/**
 * Type Checks
 * @type {Object}
 */
UploadButton.propTypes = {
   accept: string.isRequired,
   color: string,
   label: string,
   onChange: func
};

/**
 * Defaults
 * @type {Object}
 */
UploadButton.defaultProps = {
};
