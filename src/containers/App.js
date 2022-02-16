import "./App.css";
import { users } from "../data/users";
import CardList from "../components/CardList";
import "tachyons";
import React, { useState, useEffect } from "react";
import SearchField from "../components/SearchField";
import ScrollBox from "../components/ScrollBox";

const App = () => {
  // Define states
  const [searchField, setSearchField] = useState("");
  const [usersState, setUsersState] = useState(users);

  const on_change = (event) => {
    setSearchField(event.target.value);
  };

  const get_user = () => {
    // Filter users whose username includes the searchfield value
    let filtered_users = usersState.filter((item) =>
      item.username.toLowerCase().includes(searchField.toLowerCase())
    );

    //  Return the searchfield if no users include the searchfield
    // if (filtered_users.length == 0) {
    //   console.log(searchField);
    //   return [{ username: searchField }];
    // }

    // Add new user with username equal to the searchfield to the filtered users array
    if (searchField.length > 0) {
      filtered_users.unshift({ username: searchField });
    }

    return filtered_users;
  };

  return (
    <div className='tc'>
      <h1 className=''>CATFRIENDS</h1>
      <SearchField on_change={on_change}></SearchField>
      <ScrollBox>
        <CardList users={get_user()}></CardList>
      </ScrollBox>
    </div>
  );
};

export default App;
