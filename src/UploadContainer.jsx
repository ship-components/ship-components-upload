import React from 'react';
import classNames from 'classnames';
import css from './button.css';
import UploadButton from './UploadButton';
import ImagePreview from './ImagePreview';

export default class UploadContainer extends React.Component {
   constructor(props, context) {
      super(props, context);

      this.state = {
         imageFile: ''
      };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange (event) {
      console.log('Selected file:', event.target.files[0]);

      // Image src to pass it to ImagePreview Component
      let imageFile = URL.createObjectURL(event.target.files[0]);

      this.setState({
         imageFile: imageFile
      });
   }

   setColor (val = 'blue') {
      let color = val.toLowerCase();

      if(val === 'green') {
         color = 'green';
      }else if (val === 'gray') {
         color = 'gray';
      } else if ( val === 'white') {
         color = 'white';
      }

      return color;
   }

   setText (label = 'Upload') {
      return label;
   }

   render () {
      // define button color and button text
      let color = this.props.buttonColor,
         text = this.props.buttonText;

      return (
         <section className={classNames(css.wrapper)}>
            <section className={classNames(css.groupWrapper)}>
               <ImagePreview
                  onChange={this.state.imageFile}
                  disabled={this.renderImage}
               />
               <form className={classNames(css.flexContainer)}>
                  <UploadButton
                     accept='.png, .gif, .jpg, .jpeg'
                     onChange={this.handleChange.bind(this)}
                     color={this.setColor(color)}
                     label={this.setText(text)}
                  />
               </form>
            </section>
         </section>
      );
   }
}
