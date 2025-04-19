import AsteriskText from "./TextTypes/AsteriskText";
import QuotedText from "./TextTypes/QuotedText";
import BasicText from "./TextTypes/BasicText";

function BubbleText({chunks}) {
  let textBlock = <></>;
  for (let c of chunks) {
    switch (c.type) {
      case "basicText":
        textBlock = (
          <>
            {textBlock}
            <BasicText text={c.value} />
          </>
        );
        break;
      case "quotedText":
        textBlock = (
          <>
            {textBlock}
            <QuotedText text={c.value} />
          </>
        );
        break;
      case "asteriskText":
        textBlock = (
          <>
            {textBlock}
            <AsteriskText text={c.value} />
          </>
        );
        break;
    }
  }
  return textBlock;
}
export default BubbleText