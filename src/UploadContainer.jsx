import React from 'react';
import classNames from 'classnames';
import css from './button.css';
import UploadButton from './UploadButton';
import ImagePreview from './ImagePreview';

export default class UploadContainer extends React.Component {
   /**
      * Base Container
      * @param  {Object} props
   */
   constructor(props) {
      super(props);

      this.state = {
         imageFile: ''
      };
      this.handleChange = this.handleChange.bind(this);
   }

   /**
      * Handle the image state
      * If image is available, will create a URL obj
      * And modify the state value
      * @param  {Event]} event
   */
   handleChange (event) {
      let evt = event.target.files[0],
         imageFile;

      // Image src to pass it to ImagePreview Component
      if(evt !== undefined) {
         imageFile = URL.createObjectURL(event.target.files[0]);
         console.log('Selected file:', event.target.files[0]);
         this.setState({
            imageFile: imageFile
         });
      } else {
         console.warn('Warning: no image selected');
      }
   }

   /**
      * Handle the button footer color
      * @param  {string} color
      * @return {string}
   */
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

   /**
      * Handle the button label text
      * @param  {string} label
      * @return {string}
   */
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
                  imgSrc={this.state.imageFile}
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

/**
 * Type Checks
 * @type {Object}
 */
UploadContainer.propTypes = {
  buttonColor: React.PropTypes.string,
  buttonText: React.PropTypes.string
};
