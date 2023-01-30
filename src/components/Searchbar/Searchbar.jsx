import { Component } from "react";


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



return (
    <header class="searchbar">
  <form class="form" onSubmit={this.handleSubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={onSubmit}
      value={search}
    />
  </form>
</header>
)
}