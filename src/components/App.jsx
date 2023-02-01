import { Component } from "react";
import axios from "axios";

import {Searchbar} from './Searchbar/Searchbar'
// import {Modal} from './Modal/Modal'

import {ImageGallery} from './ImageGallery/ImageGallery'

// import {Button} from './Button/Button'

export  class App extends Component {
  state = {
  search: ''
  }
  
//  async componentDidMount () {
 
//   try {
//     const {data} = await axios.get('https://pixabay.com/api/?q=cat&page=1&key=31541189-0a437f1c4a0bdb60103b05fd6&image_type=photo&orientation=horizontal&per_page=12')
//     this.setState({image: data})

//   } catch (error) {
//     console.log(error);
//   } finally {
//     this.setState({isLoading: false})
//   }
// }


onSubmit = search => {
this.setState (()=> ({search}))
}

render () {
const {search} = this.state;


  return (
    <div>
     
      <Searchbar onSubmit={this.onSubmit}/>
      {/* <Modal/> */}
      <ImageGallery search={search}/>
      
    </div>
  )
}  
  }









  


//   import { Component } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// //import data from './assets/data.json';

// export class App extends Component {
//   state = {
//     searchQuery: '',
//   };


//   formSubmit = searchQuery => {
//     this.setState({ searchQuery });
//   };

//   render() {
//     const { searchQuery, } = this.state;

//     return (
//       <>
//         <Searchbar onSubmit={this.formSubmit} />
//         <ImageGallery searchQuery={searchQuery} />
//         <ToastContainer
//           position="top-right"
//           autoClose={1500}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="colored"
//         />
//       </>
//     );
//   }
// }
