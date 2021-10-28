import Github from './modules/github';
import Loading from './components/Loading';
import UserCard from './components/UserCard';

import './styles/main.css'

const github = new Github();

document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;

  const app = document.getElementById('app');

  app.innerHTML = Loading();

  setTimeout(async () => {
    const user = await github.getUser(username);

    app.innerHTML = UserCard(user);
  }, 500);
});