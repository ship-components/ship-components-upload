import React from 'react';
import classNames from 'classnames';
import css from './button.css';
// import UploadButton from './UploadButton.jsx';

export default class UploadContainer extends React.Component {
   render () {
      return (
         <section className={classNames(css.wrapper)}>
            <section className={classNames(css.groupWrapper)}>
               {this.props.children}
            </section>
         </section>
      );
   }
}
