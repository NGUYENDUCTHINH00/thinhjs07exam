import React, { Component } from "react";

class SearchBox extends Component {
  state = {};
  render() {
    let { handleSearchChange } = this.props;
    return (
      <section className='search'>
        <form handleSearchChange={handleSearchChange}>
          <input
            type='text'
            className='btn-input'
            placeholder='Search characters'
          />
        </form>
      </section>
    );
  }
}

export default SearchBox;
