import React from 'react';
import FriendListItem from './FriendListItem'; // Импорт FriendListItem
import styles from './FriendList.module.css'; // Импортируем стили

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}> {/* Используем стиль из CSS модуля */}
      {friends.map(friend => (
        <li key={friend.id} className={styles.friendListItem}> {/* Используем стиль из CSS модуля */}
          <FriendListItem 
            avatar={friend.avatar} 
            name={friend.name} 
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;


