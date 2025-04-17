import AsteriskText from "./TextTypes/AsteriskText";
import BubbleImage from './BubbleImage'


function BotBubble({ text, from }) {
  const path = "hola" + from
  return (
    <>
      <article className="bg-white min-w-[30%] max-w-[80%] min-h-[100px] text-black mt-4 ml-2 rounded-2xl p-[10px] w-fit flex wrap-anywhere">
        <BubbleImage></BubbleImage>
        <div>
          <h1>{from}</h1>
          {text}
        </div>
      </article>
    </>
  );
}
export default BotBubble;
