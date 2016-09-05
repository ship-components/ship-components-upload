/*eslint consistent-this: [2, "that"]*/

import React from 'react';
import classNames from 'classnames';
import accepts from 'attr-accept';
import $ from 'jquery';

import css from './button.css';
import UploadButton from './UploadButton';
import ImagePreview from './ImagePreview';

export default class DropContainer extends React.Component {
   /**
      * Base Container
      * @param  {Object} props
   */
   constructor(props) {
      super(props);
      this.state = {
         imageFile: '',
         isDragActive: false,
         borderStyle: '',
         visibility: 'show'
      };

      this.handleChange = this.handleChange.bind(this);
      this.onDragOver = this.onDragOver.bind(this);
      this.onDrop = this.onDrop.bind(this);
      this.onDragLeave = this.onDragLeave.bind(this);
      this.onDragEnter = this.onDragEnter.bind(this);
      this.onDragStart = this.onDragStart.bind(this);
      // this.onClick = this.onClick.bind(this);
   }

   componentDidMount() {
      this.enterCounter = 0;
      // Change the background color of
      // outer section with the prop color
      // passing in
      let $this = $(this.myTextInput)[0],
         color = this.props.backgroundColor;
      $($this).css('background-color', color);
   }

   onDragStart(e) {
      if (this.props.onDragStart) {
         this.props.onDragStart.call(this, e);
      }
   }

   onDragEnter(e) {
      e.preventDefault();

      // Count the dropzone and any children that are entered.
      ++this.enterCounter;

      // This is tricky. During the drag even the dataTransfer.files is null
      // But Chrome implements some drag store, which is accesible via dataTransfer.items
      const dataTransferItems = this.extractData(e);

      // Now we need to convert the DataTransferList to Array
      const allFilesAccepted = this.fileAccepted(Array.prototype.slice.call(dataTransferItems));

      this.setState({
         isDragActive: allFilesAccepted,
         borderStyle: 'dragBorder',
         visibility: 'hide'
         // isDragReject: !allFilesAccepted
      });

      if (allFilesAccepted) {
         this.successBorder()
      } else {
         this.warningBorder();
      }
  }

   /**
      * Handle the drag over event
      * @param  {Event]} event
   */
   onDragOver (e) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = 'copy';

      return false;
   }

   /**
      * Handle the drag leave event
   */
   onDragLeave (e) {
      e.preventDefault();

      // Only deactivate once the dropzone and all children was left.
      if (--this.enterCounter > 0) {
         return;
      }

      this.setState({
         isDragActive: false,
         isDragReject: false,
         borderStyle: '',
         visibility: 'show'
      });

      if (this.props.onDragLeave) {
         this.props.onDragLeave.call(this, e);
      }

      if(this.state.imageFile){
         console.log('onDragLeave');
         return;
      }
  }

   /**
      * Handle the drop event
      * @param  {Event]} event
   */
   onDrop (e) {
      e.preventDefault();
      this.setState({
         isDragActive: false,
         borderStyle: '',
         visibility: 'show'
      });
      this.handleChange.call(this, e);
   }

   /**
      * Handle the click event on drop container
   */
   // onClick () {
   //    console.log('on click called');
   //    this.refs.fileInput.myTextInput.click();
   // }

   /**
      * Handle the image state
      * If image is available, will create a URL obj
      * And modify the state value
      * @param  {Event]} event
   */
   handleChange (event) {
      let e = event.nativeEvent, imageFile;

      const dataTransferItems = this.extractData(event);
      const allFilesAccepted = this.fileAccepted(Array.prototype.slice.call(dataTransferItems));

      // Check to make sure the dropped file
      // is in image format - image/*
      if(allFilesAccepted){
         // Setting the state image source
         // With drag & drop event
         if(e.dataTransfer) {
            let evt = e.dataTransfer.files[0];

            if(evt !== undefined) {
               imageFile = URL.createObjectURL(evt);
               console.log('**DRAGGED** SELECTED FILE', evt);
               this.setState({
                  imageFile: imageFile
               });
            } else {
               console.warn('Warning: no image selected');
            }

         // Setting the state image source
         // With click button event
         } else {
            let evt = event.target.files[0];

            // Image src to pass it to ImagePreview Component
            if(evt !== undefined) {
               imageFile = URL.createObjectURL(event.target.files[0]);
               console.log('SELECTED FILE', event.target.files[0]);

               this.setState({
                  imageFile: imageFile
               });
            } else {
               console.warn('Warning: no image selected');
            }
         }
      }
   }

   fileAccepted(file) {
      return file.every(f => accepts(f, 'image/*'));
   }

   extractData(e) {
      return e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];
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

   successBorder () {
      this.setState({
         borderStyle: 'successBorder'
      });
   }

   warningBorder () {
      this.setState({
         borderStyle: 'warningBorder'
      });
   }

   render () {
      // define styles
      let color = this.props.buttonColor,
         text = this.props.buttonText,
         borderStyle = this.state.borderStyle,
         visibility = this.state.visibility,
         outerClasses = classNames(css.groupWrapper, css[borderStyle]),
         innerClasses = classNames(css[visibility]);
      return (
         <section
            ref={(ref) => this.myTextInput = ref}
            className={outerClasses}
            onDragOver={this.onDragOver}
            onDragLeave={this.onDragLeave}
            onDragStart={this.onDragStart}
            onDragEnter={this.onDragEnter}
            onClick={this.onClick}
            onDrop={this.onDrop}>
            <section className={classNames(innerClasses, css.groupWrapper)}>
               <ImagePreview
                  imgSrc={this.state.imageFile}
               />
               <form className={classNames(css.flexContainer)}>
                  <UploadButton
                     ref='fileInput'
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
const { string } = React.PropTypes;

DropContainer.propTypes = {
  buttonColor: string,
  buttonText: string
};
