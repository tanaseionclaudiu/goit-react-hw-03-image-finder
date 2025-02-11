import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ImSearch } from "react-icons/im";

class Searchbar extends Component {
    state = {
      query: '',
    };
    
    handleChange = e => {
      this.setState({query: e.target.value});
    }
  
    handleSubmit = e => {
      e.preventDefault();

      // console.log(this.props);
      // console.log(this.state);

      if (this.state.query.trim() === '') {
        alert('Enter a search word');
        return;
      }

      this.props.onSubmit(this.state.query);
      
      this.setState({query: ''}); 
    };
  
    render () {
      return (
<header className={css.searchbar} onSubmit={this.handleSubmit}>
    <form className={css.searchForm}>
        <button type="submit" className={css.button}>
        <ImSearch />
        <span className={css.buttonLabel}>Search</span>
        </button>

        <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={this.handleChange}
        />
    </form>
</header>
          );
    };
  };
    
  Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
  export default Searchbar;