class Github {
  constructor() {
    this.apiURL = 'https://api.github.com';
  }

  getUser(username) {
    return fetch(`${this.apiURL}/users/${username}`)
      .then(response => response.json());
  }
}

export default Github;