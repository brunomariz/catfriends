import "./App.css";
import { users } from "../data/users";
import CardList from "../components/CardList";
import "tachyons";
import React from "react";
import SearchField from "../components/SearchField";
import SideScroll from "../components/SideScroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search_field: "",
      users: users,
    };
  }

  on_change = (event) => {
    this.setState({ search_field: event.target.value });
  };

  get_user() {
    const filtered_users = this.state.users.filter((item) =>
      item.username
        .toLowerCase()
        .includes(this.state.search_field.toLowerCase())
    );

    if (filtered_users.length == 0) {
      console.log(this.state.search_field);
      return [{ username: this.state.search_field }];
    }

    return filtered_users;
  }

  render() {
    return (
      <div className='tc'>
        <h1 className=''>CATFRIENDS</h1>
        <SearchField on_change={this.on_change}></SearchField>

        <SideScroll>
          <CardList users={this.get_user()}></CardList>
        </SideScroll>
      </div>
    );
  }
}

export default App;
