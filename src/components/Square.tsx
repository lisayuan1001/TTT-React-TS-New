import { useEffect, useState } from "react";
interface Props {
  childId: string;
  newState: () => void;
}
const Square = ({ childId, newState }: Props) => {
  //   useEffect(() => {
  //     console.log(`Render ${childId}`);
  //     return () => {
  //       console.log(`unmounting Square ${childId}`);
  //     };
  //   });
  const palet = ["#FCBAAD", "#E48586"];
  const [color, setColor] = useState("#E48586");
  const [status, setStatus] = useState(null);
  const XorO = ["O", "X"];

  const handleClick = (e) => {
    if (status === null) {
      let thisPlayer = newState(parseInt(childId));
      let col = palet[thisPlayer];
      e.target.style.background = col;

      setStatus(thisPlayer);
      console.log(`this player on child: ${thisPlayer}`);
    } else {
      alert("This place has been occupied!");
    }
  };

  return (
    <button id={childId} onClick={handleClick}>
      <h1>{XorO[status]}</h1>
    </button>
  );
};

export default Square;
