import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ name, isOnline, avatar }) => (
  <li className={s.item}>
    <span className={isOnline ? s.online : s.offline}></span>
    <img src={avatar} alt={name} width="48" />
    <p className={s.name}>{name} </p>
  </li>
);

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
