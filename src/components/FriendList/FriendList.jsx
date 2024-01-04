import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends = [] }) => {
  const FriendListElem = friends.map(({ id, avatar, name, isOnline }) => (
    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));
  return <ul>{FriendListElem}</ul>;
};
