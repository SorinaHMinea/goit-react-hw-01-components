import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from './data.json';
import FriendList from './FriendsList/FriendList';
import friends from './friends.json';
import transactions from './transactions.json';
import Table from './Table/Table';

export const App = () => {
  return (
    <main>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <Table items={transactions} />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: 'red',
        }}
      >
        YOU GO GIRL
      </div>
    </main>
  );
};
