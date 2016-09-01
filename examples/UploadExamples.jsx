/**
 * ES6 Upload Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { UploadContainer } from '../src';

class UploadButtonExamples extends React.Component {
  render() {
    return (
      <div>
         <h1>Upload Button Examples</h1>
         <div className='example-group'>
            <h2>Material Blue Button</h2>
            <UploadContainer
               buttonText='Upload' />
         </div>
         <div className='example-group'>
            <h2>Material Green Button</h2>
            <UploadContainer
               buttonColor='green'
               buttonText='Upload' />
         </div>
         <div className='example-group'>
            <h2>Material Grey Button</h2>
            <UploadContainer
               buttonColor='gray'
               buttonText='Upload' />
         </div>
         <div className='example-group'>
            <h2>Material White Button</h2>
            <UploadContainer
               buttonColor='white'
               buttonText='Upload' />
         </div>
      </div>
    )
  }
}

ReactDOM.render(<UploadButtonExamples />, document.getElementById('examples'));
