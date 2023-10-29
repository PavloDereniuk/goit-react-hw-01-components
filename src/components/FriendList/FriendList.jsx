import { Container } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
    <Container>
      <FriendListItem friends={friends} />
    </Container>
  );
};
