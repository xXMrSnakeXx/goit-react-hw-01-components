import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={s.list}>
    {friends.map(({ id, name, isOnline, avatar }) => (
      <li className={s.item} key={id}>
        <span className={isOnline ? s.online : s.offline}></span>
        <img src={avatar} alt={name} width="48" />
        <p className={s.name}>{name} </p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
