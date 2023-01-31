import { Component } from "react";
import css from '../../styles.css'

export class Searchbar extends Component {

  state ={
    search:''
  }

  handleSubmit = event => {
    event.preventDefault()
    const { search } = this.state;
    this.props.onSubmit({ search });
    this.setState({search:''})
}


render() {
  return (
    <header className={css.searchbar}>
    <form className={css.searchForm} onSubmit={this.handleSubmit}>
      <button type="submit" className={css.searchFor_button}>
        <span className="button-label">Search</span>
      </button>
  
      <input
        className={css.searchForm_input}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        // onChange={handleSubmit}
        // value={search}
      />
    </form>
  </header>
  )
}

}