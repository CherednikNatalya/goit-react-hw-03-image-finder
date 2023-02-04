import { Component } from "react";
import css from '../Searchbar/Searchbar.module.css'
import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';

export class Searchbar extends Component {

  state ={
    formSearchQuery:'',
  }

  onChangeHandler = evt => {
    this.setState({ formSearchQuery: evt.currentTarget.value.trim() });
  };

  handleSubmit = event => {
    event.preventDefault()
    const {formSearchQuery} = this.state;
    if (!formSearchQuery.length) {
      Notiflix.Notify.warning('Enter something in the searchbar');
      return;
    }
    this.props.onSubmit(formSearchQuery);
    this.setState({formSearchQuery:''})
}


render() {
  return (
    <header className={css.searchbar}>
    <form className={css.searchForm} onSubmit={this.handleSubmit}>
      <button type="submit" className={css['searchForm-button']}>
        <span className={css['button-label']}>
          <ImSearch className={css.icon} />
          </span>
      </button>
  
      <input
        className={css.input}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        value={this.state.formSearchQuery}
        onChange={this.onChangeHandler}
      />
    </form>
  </header>
  )
}
}





