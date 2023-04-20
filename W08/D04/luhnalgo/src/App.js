import "./styles.css";
import { useState } from "react";

export default function App() {
  const [card, setCard] = useState(null);

  const validCard = (num) => {
    if (!num) return;
    const arr = num.toString().split("");
    for (let i = arr.length - 2; i >= 0; i -= 2) {
      arr[i] = arr[i] * 2;
      if (arr[i] >= 10) {
        arr[i] = arr[i] - 9;
      }
    }
    const sum = arr.reduce((k, m) => {
      return +k + +m;
    });
    return sum % 10 === 0;
  };

  // const validCard = (num) => {
  //   if (!num) return;
  //   const arr = num.toString().split("");
  //   let sum = arr.reduce((acc, num, i) => {
  //     let int = parseInt(num);
  //     if (i % 2 === arr.length % 2) {
  //       return (acc += int * 2 > 9 ? int * 2 - 9 : int * 2);
  //     } else {
  //       return (acc += int);
  //     }
  //   }, 0);
  //   return sum % 10 === 0;
  // };

  // validCard(1234567890123456); //should be false
  // validCard(4408041234567893); //should be true
  // validCard(38520000023237); //should be true
  // validCard(4222222222222); //should be true

  return (
    <div className="App">
      <h1>Luhn Algorithm Validator</h1>
      <input
        type="text"
        onKeyUp={(e) => {
          setCard(e.target.value);
        }}
      />
      <div>
        {!card
          ? "Please enter a card number"
          : !validCard(card)
          ? "Card is not valid"
          : "Card is valid"}
      </div>
    </div>
  );
}
