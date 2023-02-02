import { Component } from "react";
import {Searchbar} from './Searchbar/Searchbar'
import {ImageGallery} from './ImageGallery/ImageGallery'

import css from '../styles.css'


export  class App extends Component {
  state = {
  search: ''
  }
  

onSubmit = search => {
this.setState (()=> ({search}))
}

render () {
const {search} = this.state;


  return (
    <div className={css.app}>
      <Searchbar onSubmit={this.onSubmit}/>
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
