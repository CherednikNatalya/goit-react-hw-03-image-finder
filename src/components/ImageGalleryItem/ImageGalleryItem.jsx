import { Component } from 'react'
import css from '../ImageGalleryItem/ImageGalleryItem.module.css'
import * as basicLightbox from 'basiclightbox'
import {Modal} from '../Modal/Modal'

export class ImageGalleryItem extends Component  {
  state ={
    showModal: false,
  }

  toggleModal = () => {
        this.setState(({ showModal }) => ({
          showModal: !showModal,
        }));
      };


  render(){
    const { webformatURL, tags, previewURL, largeImageURL } = this.props;
    const { showModal } = this.state;


  return (
    <>
    <li className={css.imageGalleryItem}>
  <img src={webformatURL}
  alt={tags}
  placeholderSrc={previewURL}
            // effect="blur"
            // className={css['fetched-image']}
            className = {css.imageGalleryItem_image}
            />
</li>
{showModal && (
          <Modal 
          onClose={this.toggleModal}
          >
            {/* <LazyLoadImage
            src={largeImageURL}
            alt={tags}
            placeholderSrc={webformatURL}
          /> */}

const instance = basicLightbox.create(`
    <img src={largeImageURL} width="800" height="600"/>
`)

instance.show()

instance.show()
      </Modal>
        )}


</>
  )}
}




