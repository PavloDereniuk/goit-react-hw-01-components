import { Profile } from './components/Profile/Profile';
import user from './components//Profile/user.json';
import { Statistics } from './components/Statistics/Statistics';
import data from './components//Statistics/data.json';
import { FriendList } from './components/FriendList/FriendList';
import friends from './components//FriendList/friends.json';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './components//TransactionHistory/transactions.json';
import { Container } from './General.styled';

export const App = () => {
  return (
    <Container>
      <div>
        <Profile user={user} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </Container>
  );
};
