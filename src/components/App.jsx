import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './Friends';
import { TransactionHistory } from './TransactionHistory';

import user from '../data/user.json';
import stats from '../data/statistics.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
};
