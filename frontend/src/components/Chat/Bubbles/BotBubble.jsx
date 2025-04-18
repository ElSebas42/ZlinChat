import BubbleText from "./BubbleText";
import returnChunks from "./TextTypes/stringToChunks";

function BotBubble({ text, char }) {
  const imagePath = `/images/char-images/${char}.jpg`;
  let chunks = returnChunks(text);

  return (
    <>
      <article className="bg-white min-w-[30%] max-w-[80%] min-h-[100px] text-black mt-4 ml-2 rounded-2xl p-[10px] w-fit flex wrap-anywhere overflow-auto self-start shrink-0">
        <img src={imagePath} alt={char} className='w-[130px] me-2 shrink-0 object-contain self-start'/>
        <div>
          <h1 className="font-bold text-3xl">{char}</h1>
          <BubbleText chunks={chunks} />
        </div>
      </article>
    </>
  );
}
export default BotBubble;
