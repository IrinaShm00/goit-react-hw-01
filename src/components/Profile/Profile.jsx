import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css'; // Импортируем стили

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <img className={styles.avatar} src={image} alt="User avatar" />
      <div className={styles.profileInfo}>
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <table className={styles.profileStats}>
        <tbody>
          <tr>
            <td>Followers</td>
            <td>{stats.followers}</td>
          </tr>
          <tr>
            <td>Views</td>
            <td>{stats.views}</td>
          </tr>
          <tr>
            <td>Likes</td>
            <td>{stats.likes}</td>
          </tr>
        </tbody>
      </table>
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

