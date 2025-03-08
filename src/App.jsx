import './App.css';
import Profile from './Profile';// Импорт Profile
import FriendList from './FriendList'; // Импорт FriendList
import TransactionHistory from './TransactionHistory'; // Импорт TransactionHistory
import userData from './userData.json'; // Импорт данных пользователя
import friends from './friends.json'; // Импорт данных о друзьях
import transactions from './transactions.json'; // Импорт данных транзакций

function App() {
  return (
    <div>
      <Profile
        name={userData.username}  //  имя
        tag={userData.tag}  //  тег
        location={userData.location}  //  локацию
        image={userData.avatar}  //  аватар
        stats={userData.stats}  //  статистику
      />
      <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
