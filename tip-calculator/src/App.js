import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  const totalNumber = Math.round(
    (myPercentage / 100) * bill + (friendPercentage / 100) * bill
  );

  const finalBill = totalNumber + bill;

  function handleClick() {
    setBill("");
    setFriendPercentage(0);
    setMyPercentage(0);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Bill bill={bill} setBill={setBill} />
        <Tip percentage={myPercentage} setPercentage={setMyPercentage}>
          How did you like the service?
        </Tip>
        <Tip percentage={friendPercentage} setPercentage={setFriendPercentage}>
          How did your friend like the service?
        </Tip>

        <p>
          You pay ${finalBill} (${bill} + ${totalNumber} tip)
        </p>

        <button onClick={handleClick}>Reset</button>
      </form>
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div className="bill">
      <span>How much was the bill?</span>
      <input
        type="text"
        name="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ children, percentage, setPercentage }) {
  // function extractNumber(str) {
  //   let pattern = /\((\d+)%\)/;
  //   const number = parseInt(str.match(pattern)[1]);
  //   return number;
  // }
  return (
    <div className="tip">
      <span>{children}</span>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default App;
