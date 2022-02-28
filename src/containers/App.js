import "./App.css";
import { connect } from "react-redux";
import "tachyons";
import React, { useState, useEffect } from "react";

import { setSearchField } from "../actions";
import { users } from "../data/users";
import CardList from "../components/CardList";
import SearchField from "../components/SearchField";
import ScrollBox from "../components/ScrollBox";
import { requestInitialUsers } from "../actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    searchField: state.searchUsers.searchField,
    users: state.requestUsers.users,
    isPending: state.requestUsers.isPending,
    error: state.requestUsers.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestUsers: () => dispatch(requestInitialUsers()),
  };
};

const App = (props) => {
  const { searchField, onSearchChange, onRequestUsers, users, isPending } =
    props;

  useEffect(() => {
    onRequestUsers();
  }, []);

  const get_user = () => {
    // Filter users whose username includes the searchfield value
    let filtered_users = users.filter((item) =>
      item.username.toLowerCase().includes(searchField.toLowerCase())
    );

    // Add new user with username equal to the searchfield to the filtered users array
    if (searchField.length > 0) {
      filtered_users.unshift({ username: searchField });
    }

    return filtered_users;
  };

  return (
    <div className="tc">
      <h1 className="">CATFRIENDS</h1>
      <SearchField on_change={onSearchChange}></SearchField>
      {isPending ? (
        <ScrollBox>
          <div className="ma2 pa2">Fetching example users...</div>
        </ScrollBox>
      ) : (
        <ScrollBox>
          <CardList users={get_user()}></CardList>
        </ScrollBox>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
