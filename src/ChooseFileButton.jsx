import React from 'react';
import classNames from 'classnames';
import css from './button.css';

export default class ChooseFileButton extends React.Component {
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

   render () {
      let flexItem = classNames(css.flexItem);

      return React.DOM.input({
        type: 'file',
        name: this.props.name,
        className: {flexItem},
        onChange: this.handleChange,
        disabled: this.props.disabled,
        accept: this.props.accept
      });
   }
}
