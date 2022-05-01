import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import s from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={s.list}>
    {friends.map(({ id, name, isOnline, avatar }) => (
      <FriendListItem
        key={id}
        name={name}
        isOnline={isOnline}
        avatar={avatar}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
