
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css'; // Импортируем стили

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.profileStats}>
        <li className={styles.profileStat}>
          <p>Followers</p>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.profileStat}>
          <p>Views</p>
          <span>{stats.views}</span>
        </li>
        <li className={styles.profileStat}>
          <p>Likes</p>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

