function retunChunks(text) {
  const regex = /"(.*?)"|\*(.*?)\*/g;
  const chunks = [];
  let lastIndex = 0;
  for (const match of text.matchAll(regex)) {
    const start = match.index;
    const end = start + match[0].length;

    if (start > lastIndex) {
      chunks.push({
        type: "basicText",
        value: text.slice(lastIndex, start),
      });
    }

    if (match[1]) {
      chunks.push({
        type: "quotedText",
        value: match[0],
      });
    } else if (match[2]) {
      chunks.push({
        type: "asteriskText",
        value: match[2],
      });
    }

    lastIndex = end;
  }
  if (lastIndex < text.length) {
    chunks.push({
      type: "basicText",
      value: text.slice(lastIndex),
    });
  }
  return chunks
}

export default retunChunks