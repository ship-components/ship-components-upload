import React from 'react';
// import classNames from 'classnames';
// import css from './button.css';
// import UploadButton from './UploadButton.jsx';

export default class ChooseFileButton extends React.Component {
   constructor(props, context) {
      super(props, context);

      this.state = {
         value: '',
         styles: {
            parent: {
               position: 'relative',
               display: 'inline-flex',
               width: '200px',
               marginRight: '10px'
            },
            file: {
               position: 'absolute',
               top: 35,
               left: 0,
               zIndex: 1,
               width: '100%'
            },
            text: {
               opacity: 0
            }
         }
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
      return React.DOM.div({
        style: this.state.styles.parent
      },

      // Actual file input
      React.DOM.input({
        type: 'file',
        name: this.props.name,
        className: this.props.className,
        onChange: this.handleChange,
        disabled: this.props.disabled,
        accept: this.props.accept,
        style: this.state.styles.file
      }),

      // Emulated file input
      React.DOM.input({
        type: 'text',
        tabIndex: -1,
        name: this.props.name + '_filename',
        value: this.state.value,
        className: this.props.className,
        onChange: function() {},
        placeholder: this.props.placeholder,
        disabled: this.props.disabled,
        style: this.state.styles.text
      }));
   }
}
