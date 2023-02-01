import { Component } from 'react'
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import {Button} from '../Button/Button'
import {Loader} from '../Loader/Loader'

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

  // {isLoading && <Loader/>}


  
  //   id - унікальний ідентифікатор
  // webformatURL - посилання на маленьке зображення для списку карток
  // largeImageURL
    }
    
   
  

  componentDidUpdate(prevProps, prevState) {
const {search} = this.props;
const {search: prevQuery} = prevProps;
const {page} = this.state;
const {page: prePage} = prevState;

      if (search !== prevQuery) {
        this.setState({ page: 1, imgData: [] });
      }
      if (search !== prevQuery || page !== prevPage) {
        this.fetchData();
      }
}

fetchData = async componentDidMount () {
   
  try {
    const {imgData} = await axios.get('https://pixabay.com/api/?q=cat&page=1&key=31541189-0a437f1c4a0bdb60103b05fd6&image_type=photo&orientation=horizontal&per_page=12')
    this.setState({image: imgData})

  } catch (error) {
    console.log(error);
  } finally {
    this.setState({isLoading: false})
  }
}



handleSubmit = e => {
  e.preventDefault ()
  this.setState ({
      page: 1,
      query: e.target.elements.query.value,
      items: [],
  })
  e.target.reset()
}

loadMore =() => {
  this.setState(
      prevState => ({
          page: prevState.page + 1,
      }
      )
  )
}


  render () {
    <ul class="gallery">

  {imgData?.data.map((imgData)=>(
    <ImageGalleryItem />
  ))}
  
</ul>
<Button onClick={this.loadMore}/>

  }
}










// import css from './ImageGallery.module.css';

  // import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
  // import { Loader } from '../Loader/Loader';
  
  // import { Section } from 'components/Section/Section';
  // import { Button } from 'components/Button/Button';
  // import { Component } from 'react';
  // import { fetchPichureData } from 'components/helpers/fetchPichureData';
  
  // import { toast } from 'react-toastify';
  
  // const STATUS = {
  //   idle: 'idle',
  //   pending: 'pending',
  //   success: 'success',
  //   rejected: 'rejected',
  // };
  
  // export class ImageGallery extends Component {
  //   state = {
  //     imgData: [],
  //     page: 1,
  //     per_page: 12,
  //     status: STATUS.idle,
  //   };
  
  //   componentDidUpdate(prevProps, prevState) {
  //     const { searchQuery } = this.props;
  //     const { searchQuery: prevQuery } = prevProps;
  //     const { page } = this.state;
  //     const { page: prevPage } = prevState;
  
  //     if (searchQuery !== prevQuery) {
  //       this.setState({ page: 1, imgData: [] });
  //     }
  //     if (searchQuery !== prevQuery || page !== prevPage) {
  //       this.fetchData();
  //     }
  //   }
  
  //   fetchData = async () => {
  //     this.setState({ status: STATUS.pending });
  //     const { searchQuery } = this.props;
  //     const { page, per_page } = this.state;
  //     try {
  //       const requestData = await fetchPichureData(searchQuery, page, per_page);
  //       if (requestData.data.total === 0) {
  //         this.setState({
  //           status: STATUS.rejected,
  //         });
  //         toast.error('No images matching your request');
  //         return;
  //       }
  //       this.setState(({ imgData: prevData }) => ({
  //         imgData: [...prevData, ...requestData.data.hits],
  //         status: STATUS.success,
  //       }));
  //     } catch (error) {
  //       this.setState({
  //         status: STATUS.rejected,
  //       });
  //       toast.error('No images matching your request');
  //     }
  //   };
  
  //   buttonClickHandler = () => {
  //     this.setState(({ page: prevPage }) => ({ page: prevPage + 1 }));
  //   };
  
  //   render() {
  //     const { status, imgData,per_page } = this.state;
  
  //     return (
  //       <Section className="gallery">
  //         <>
  //           <ul className={css.container}>
  //             {imgData.map(imgItem => (
  //               <ImageGalleryItem key={imgItem.id} {...imgItem} />
  //             ))}
  //           </ul>
  //           {status === STATUS.pending && <Loader />}
  //           {status === STATUS.success && !(imgData.length<per_page)&&
  //             (<Button onClick={this.buttonClickHandler} />
  //           )}
  //         </>
  //       </Section>
  //     );
  //   }
  // }
  






