import { Container, Status, FriendListItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem key={id}>
            <Status status={isOnline}></Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </FriendListItem>
        );
      })}
    </Container>
  );
};
