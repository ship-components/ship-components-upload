import React from 'react';
import classNames from 'classnames';
import css from './button.css';
import UploadButton from './UploadButton.jsx';
import ChooseFileButton from './ChooseFileButton.jsx';

export default class UploadContainer extends React.Component {
   handleChange (event) {
      console.log('Selected file:', event.target.files[0]);
   }

   render () {
      return (
         <section className={classNames(css.wrapper)}>
            <section className={classNames(css.groupWrapper)}>
               <form>
                  <ChooseFileButton name='MyImage'
                                    accept='.png, .gif, .jpg, .jpeg'
                                    placeholder='Choose File'
                                    onChange={this.handleChange.bind(this)} />
                  <UploadButton>
                     Upload
                  </UploadButton>
               </form>
            </section>
         </section>
      );
   }
}
