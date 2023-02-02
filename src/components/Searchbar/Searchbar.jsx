import { Component } from "react";
import css from '../Searchbar/Searchbar.module.css'

export class Searchbar extends Component {

  state ={
    searchForm:''
  }

  handleSubmit = event => {
    event.preventDefault()
    const { searchForm } = this.state;
    this.props.onSubmit({ searchForm });
    this.setState({searchForm:''})
}


render() {
  return (
    <header className={css.searchbar}>
    <form className={css.searchForm} onSubmit={this.handleSubmit}>
      <button type="submit" className={css.searchForm_button}>
        <span className="button-label">Search</span>
      </button>
  
      <input
        className={css.searchForm_input}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        onChange={this.handleSubmit}
        value={this.search}
      />
    </form>
  </header>
  )
}

}





// import css from './Searchbar.module.css';
// import { ImSearch } from 'react-icons/im';
// import { Component } from 'react';
// import { toast } from 'react-toastify';

// export class Searchbar extends Component {
//   state = {
//     formSearchQuery: '',
//   };

//   onChangeHandler = evt => {
//     this.setState({ formSearchQuery: evt.currentTarget.value.trim() });
//   };

//   onSubmitFormHandler = evt => {
//     evt.preventDefault();
//     const{formSearchQuery}=this.state
//     if (!formSearchQuery.length) {
//       toast.warning('Enter something in the search bar');
//       return;
//     }
//     this.props.onSubmit(formSearchQuery);
//     this.setState({formSearchQuery:''})
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.searchForm} onSubmit={this.onSubmitFormHandler}>
//           <button type="submit" className={css['searchForm-button']}>
//             <span className={css['button-labe']}>
//               <ImSearch className={css.icon} />
//             </span>
//           </button>

//           <input
//             className={css.input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             value={this.state.formSearchQuery}
//             placeholder="Search images and photos"
//             onChange={this.onChangeHandler}
//           />
//         </form>
//       </header>
//     );
//   }
// }
