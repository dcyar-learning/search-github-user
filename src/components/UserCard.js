import location from '../images/location.svg';
import twitter from '../images/twitter.svg';
import link from '../images/link.svg';
import business from '../images/business.svg';

const UserCard = (user) => {
  return `<div id="card-user">
    <div class="user-avatar">
      <img
        src="${user.avatar_url}"
        alt="${user.name}"
      />
    </div>
    <div class="user-data-section">
      <div class="user-name">
        <div class="username">
          <h2>${(user.name ? user.name : 'Not Available')}</h2>
          <span><a href="${user.html_url}" target="_blank">@${user.login}</a></span>
        </div>
        <div class="user-joined">
          <span>Joined ${(new Date(user.created_at)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>
      <p class="user-bio">${(user.bio ? user.bio : 'This profile has no bio')}</p>
      <div class="user-stats">
        <div>
          <h5>Repos</h5>
          <span>${user.public_repos}</span>
        </div>
        <div>
          <h5>Followers</h5>
          <span>${user.followers}</span>
        </div>
        <div>
          <h5>Following</h5>
          <span>${user.following}</span>
        </div>
      </div>
      <div class="user-aditional-info">
        <span><img src="${location}" alt="Location" />${(user.location ? user.location : 'Not Available')}</span>
        <span><img src="${twitter}" alt="Twitter username" />${(user.twitter_username ? ('@' + user.twitter_username) : 'Not Available')}</span>
        <span><img src="${link}" alt="Blog" />${(user.blog ? user.blog : 'Not Available')}</span>
        <span><img src="${business}" alt="Company" />${(user.company ? user.company : 'Not Available')}</span>
      </div>
    </div>
  </div>`;
}

export default UserCard;