import { useState } from "react";

// const Contact = () => {
//   const [count, setCount] = useState(0);

//   const val = () => {
//     setCount(count + 1);
//   };
//   <>
//     <button onClick={val}>Click me</button>
//     <h2>{val}</h2>
//     <h1 className="text-3xl font-bold underline">This is my Contact page</h1>
//   </>;
// };

// export default Contact;

const Contact = () => {
  const [counter, setCounter] = useState(0);
  function value() {
    setCounter(counter + 1);
  }
  return (
    <>
      <button onClick={value}>Click me {counter}</button>
      <h1>This is my Contact</h1>
    </>
  );
};

export default Contact;
