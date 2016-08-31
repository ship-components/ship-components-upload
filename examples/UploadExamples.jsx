/**
 * ES6 Upload Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { UploadContainer, UploadButton } from '../src';

class UploadButtonExamples extends React.Component {
  render() {
    return (
      <UploadContainer>
         <UploadButton>
            Upload
         </UploadButton>
      </UploadContainer>
    )
  }
}

ReactDOM.render(<UploadButtonExamples />, document.getElementById('examples'));
