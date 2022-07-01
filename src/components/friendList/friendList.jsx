import PropTypes from 'prop-types';
import FriendListItem from 'components/friendListItem/frendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
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
