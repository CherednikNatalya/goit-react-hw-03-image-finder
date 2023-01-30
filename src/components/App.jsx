import { Component } from "react";

import {Searchbar} from './Searchbar/Searchbar'
// import {Modal} from './Modal/Modal'
// import {Loader} from './Loader/Loader'
// import {ImageGallery} from './ImageGallery/ImageGallery'
// import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem'
// import {Button} from './Button/Button'

export  class App extends Component {
  state = {
  image: null,
  search: null

//   id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL
  }
  
componentDidMount () {
  fetch('https://pixabay.com/api/?q=cat&page=1&key=31541189-0a437f1c4a0bdb60103b05fd6&image_type=photo&orientation=horizontal&per_page=12')
  .then(res => res.json())
  .then(image => this.setState({image}))
}





onSubmit = () => {
this.setState (()=> ({search: this.search.target.value}))
}

render () {
  return (
    <div>
     
      <Searchbar onSubmit={this.onSubmit}/>
      {/* <Modal/> */}
      {/* <Loader/> */}
      {/* <ImageGallery/> */}
      {/* <ImageGalleryItem/> */}
      {/* <Button/> */}
    </div>
  )
}  
  }
