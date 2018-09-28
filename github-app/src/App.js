import axios from 'axios';
import React, { Component } from 'react';
import AppContent from './components/AppContent';
import { OAUTH_TOKEN } from '../config/tokens.config';

const ENTER_KEY = 13;

class App extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      user: null,
      repos: [],
      stars: [],
    };
  }

  handleSearch(event) {
    const { value } = event.target;
    const { keyCode } = event;

    if (keyCode === ENTER_KEY) {
      axios
        .get(`https://api.github.com/users/${value}?access_token=${OAUTH_TOKEN}`)
        .then((res) => {
          this.setState(() => ({
            user: {
              login: res.data.login,
              name: res.data.name,
              img: res.data.avatar_url,
              repos: res.data.public_repos,
              following: res.data.following,
              followers: res.data.followers,
            },
          }));
        });
    }
  }

  render() {
    const { user, repos, stars } = this.state;

    return (
      <AppContent
        user={user}
        repos={repos}
        stars={stars}
        handleSearch={this.handleSearch}
      />
    );
  }
}

export default App;
