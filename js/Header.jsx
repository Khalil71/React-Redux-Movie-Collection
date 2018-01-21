// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

const Header = (props: { showSearch?: boolean }) => {
  let utilSpace;
  const { searchTerm } = props;
  if (props.showSearch) {
    utilSpace = <input onChange={props.handleSearchTermChange} value={searchTerm} type="text" placeholder="Search" />;
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispactchToProps = (dispactch: Function) => ({
  handleSearchTermChange(e) {
    dispactch(setSearchTerm(e.target.value));
  }
});

export default connect(mapStateToProps, mapDispactchToProps)(Header);
