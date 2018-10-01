import axios from 'axios';
import React, { Component } from 'react';
import AppContent from './components/AppContent';
import { OAUTH_TOKEN } from '../config/tokens.config';

const ENTER_KEY = 13;

class App extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.getRepos = this.getRepos.bind(this);
    this.state = {
      user: null,
      repos: [],
      starred: [],
    };
  }

  getRepos(type) {
    return () => {
      const { user: { login } } = this.state;

      axios
        .get(`https://api.github.com/users/${login}/${type}?access_token=${OAUTH_TOKEN}`)
        .then((res) => {
          this.setState(() => ({
            [type]: res.data.map(repo => ({
              id: repo.id,
              name: repo.name,
              link: repo.html_url,
            })),
          }));
        });
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
            repos: [],
            starred: [],
          }));
        });
    }
  }

  render() {
    const { user, repos, starred } = this.state;

    return (
      <AppContent
        user={user}
        repos={repos}
        starred={starred}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
