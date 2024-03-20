import Friend from "./Friend";

export function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          selectedFriend={selectedFriend}
          onSelection={onSelection}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
