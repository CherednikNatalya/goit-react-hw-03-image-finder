import { Component } from 'react'
import PropTypes from 'prop-types';


import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import {Button} from '../Button/Button'
import {Section} from '../Section/Section'
import {Loader} from '../Loader/Loader'

import css from '../ImageGallery/ImageGallery.module.css'

import {fetchPichureData} from '../../services/service'
import Notiflix from 'notiflix';

const STATUS = {
    idle: 'idle',
    pending: 'pending',
    success: 'success',
    rejected: 'rejected',
  };


export class ImageGallery extends Component {
  state ={
    imgData: [],
    page: 1,
    per_page: 12,
    status: STATUS.idle
  }

componentDidUpdate(prevProps, prevState){
      const { search} = this.props;
      const { search: prevQuery } = prevProps;
      const { page } = this.state;
      const { page: prevPage } = prevState;
  
      if (search !== prevQuery) {
        this.setState({ page: 1, imgData: [] })
      }

      if (search!== prevQuery || page !== prevPage) {
        this.fetchData()
      }
    };


fetchData = async () => {
        this.setState({ status: STATUS.pending });
        const { searchQuery } = this.props;
        const { page, per_page } = this.state;
        try {
          const requestData = await fetchPichureData(searchQuery, page, per_page);
          if (requestData.data.total === 0) {
            this.setState({
              status: STATUS.rejected,
            });
            Notiflix.Notify.failure('No images');
            return;
          }
          this.setState(({ imgData: prevData }) => ({
            imgData: [...prevData, ...requestData.data.hits],
            status: STATUS.success,
          }));
        } catch (error) {
          this.setState({
            status: STATUS.rejected,
          });
          Notiflix.Notify.failure('No images');
        }
      };


loadMore =() => {
  this.setState(({page: prevPage}) => ({page: prevPage + 1}
      )
  )
}

  render(){ 
    const { status, imgData, per_page } = this.state;

  return (
    <Section>
    <ul className={css.imageGallery}>

  {imgData.map(imgItem => (
    <ImageGalleryItem key={imgItem.id} {...imgItem}/>
  ))}
</ul>

{status === STATUS.pending && <Loader/>}
{status === STATUS.success && !(imgData.length < per_page)&&
(<Button onClick={this.loadMore}/>)}
</Section>
);
}
}


ImageGallery.prototype ={
  search: PropTypes.string.isRequired
}







