import { Status, Container } from './FriendListItem.styled';

export const FriendListItem  = ({ friends }) => {
   return friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <Container key={id}>
            <Status status={isOnline}></Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </Container>
        );
      })}