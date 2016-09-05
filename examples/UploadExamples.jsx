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
               buttonText='Upload'
               backgroundColor='#d23f31'
            />
         </div>
         <div className='example-group'>
            <h2>Material Green Button</h2>
            <UploadContainer
               buttonColor='green'
               buttonText='Submit'
               backgroundColor='#4285f4'
            />
         </div>
         <div className='example-group'>
            <h2>Material Grey Button</h2>
            <UploadContainer
               buttonColor='gray'
               buttonText='Done'
               backgroundColor='#0f9d58'
            />
         </div>
         <div className='example-group'>
            <h2>Material White Button</h2>
            <UploadContainer
               buttonColor='white'
               buttonText='Press'
               backgroundColor='#212121'
            />
         </div>
      </div>
    )
  }
}

ReactDOM.render(<UploadButtonExamples />, document.getElementById('examples'));
