import React from 'react';
import classNames from 'classnames';

import css from './button.css';
import DropContainer from './DropContainer';


export default class UploadContainer extends React.Component {
   render () {
      return (
         <section className={classNames(css.wrapper)}>
            <DropContainer
               buttonColor={this.props.buttonColor}
               buttonText={this.props.buttonText}
               backgroundColor={this.props.backgroundColor}
            />
         </section>
      );
   }
}

/**
 * Type Checks
 * @type {Object}
 */
const { string } = React.PropTypes;

UploadContainer.propTypes = {
  buttonColor: string,
  buttonText: string
};
