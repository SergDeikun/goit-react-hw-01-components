import PropTypes from 'prop-types';
import FriendListItem from 'components/friendCard/friendCard';
import css from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
