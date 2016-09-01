import React from 'react';
import classNames from 'classnames';
import css from './button.css';
import UploadButton from './UploadButton.jsx';
import ChooseFileButton from './ChooseFileButton.jsx';
// import ImagePreview from './ImagePreview.jsx';

export default class UploadContainer extends React.Component {
   handleChange (event) {
      console.log('Selected file:', event.target.files[0]);
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
      console.log('Uploadcontainer', this.props);
      let val = this.props.buttonColor,
         text = this.props.buttonText;

      return (
         <section className={classNames(css.wrapper)}>
            <section className={classNames(css.groupWrapper)}>
               <form className={classNames(css.flexContainer)}>
                  <ChooseFileButton name='MyImage'
                                    accept='.png, .gif, .jpg, .jpeg'
                                    placeholder='Choose File'
                                    onChange={this.handleChange.bind(this)} />
                  <UploadButton
                  color={this.setColor(val)}
                  label={this.setText(text)} />
               </form>
            </section>
         </section>
      );
   }
}
