export default function rawToChat(a) {
  let bubbleId = a[0];
  let sender = a[1][0];
  let charName = a[1][1]["char"];
  let text = a[1][1]["text"];
  return {
    id: bubbleId,
    type: sender,
    text,
    char: charName,
  };
}