import React from 'react';
import classNames from 'classnames';
import css from '../stylesheets/button.css';

export default class ImagePreview extends React.Component {
   /**
      * Image Placeholder
      * @param  {Object} props
   */
   constructor(props) {
      super(props);
      this.state = {
         isDragable: false
      };
      this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
      this.onMouseHoverHandler = this.onMouseHoverHandler.bind(this);
   }

   /**
      * Handle the mouse down event on image
      * Will disable the drag out when image added
      * @param  {Event]} event
   */
   onMouseDownHandler (e) {
      if(!this.state.isDragable){
         e.preventDefault();
      }
   }

   onMouseHoverHandler (e) {
      console.log(e);
   }
   /**
      * Find out if image src is available
      * If not hide the image area otherwise show the image
      * @return {String}
   */
   toggleImage () {
      let image = this.props.imgSrc,
         imgShow = classNames(css.img, css.show),
         imgHide = classNames(css.img, css.hide);
      return image === '' ? imgHide : imgShow;
   }

   render() {
      return (
         <div>
            <img
               src={this.props.imgSrc}
               className={this.toggleImage()}
               onMouseDown={this.onMouseDownHandler}
               onMouseHover={this.onMouseHoverHandler}
            />
            <img
               src=''
               className={classNames(css.deleteImage)}
            />
         </div>
      );
   }
}

/**
 * Type Checks
 * @type {Object}
 */
const { string } = React.PropTypes;

ImagePreview.propTypes = {
   imgSrc: string
};
