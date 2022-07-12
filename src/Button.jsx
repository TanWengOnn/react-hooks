//-------------------------useState and UseEffect-------------------------//
// Reference: https://www.youtube.com/watch?v=jQc_bTFZ5_I
import React, { useState, useEffect } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("testing");

  // Only listen to the count state
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(`You clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        You clicked {count} times
      </button>
      <button onClick={() => setName("Test2")}>Name</button>
      <p>{name}</p>
    </div>
  );
}

//-------------------------useRef-------------------------//
// import React, { useRef } from "react";

// export default function Button() {
//   const inputEl = useRef(null);
//   return (
//     <>
//       <input ref={inputEl} />
//       <button onClick={() => inputEl.current.focus()}>Focus the input</button>
//     </>
//   );
// }

//-------------------------Mutable Variable (useState, useEffect and useRef)-------------------------//

//-------------Will cause error------------//
// Reference: https://www.youtube.com/watch?v=gv9ugDJ1ynU
// import React, { useRef, useState, useEffect } from "react";

// export default function Button() {
//   const inputEl = useRef(null);
//   const [intervalID, setIntervalID] = useState(null);
//   //const intervalRef = useRef();

//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log("a second passed");
//     }, 1000);

//     //intervalRef.current = id;

//     setIntervalID(id);
//     //console.log(id);
//     return () => clearInterval(intervalID);
//   });

//   return (
//     <>
//       <input ref={inputEl} />
//       <button onClick={() => inputEl.current.focus()}>Focus the input</button>
//     </>
//   );
// }

//------------Corrected-------------//
// import React, { useRef, useState, useEffect } from "react";

// export default function Button() {
//   const inputEl = useRef(null);
//   //const [intervalID, setIntervalID] = useState(null);
//   const intervalRef = useRef();

//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log("a second passed");
//     }, 1000);

//     intervalRef.current = id;

//     //setIntervalID(id);
//     //console.log(id);
//     return () => clearInterval(intervalRef.current);
//   });

//   return (
//     <>
//       <input ref={inputEl} />
//       <button onClick={() => inputEl.current.focus()}>Focus the input</button>
//     </>
//   );
// }

//--------------------Custom Hooks------------------//
// import React from "react";
// import { useToggle } from "./useToggle";

// export default function Button() {
//   const [open, toggle] = useToggle(false);

//   return (
//     <>
//       {open && <input />}
//       <button onClick={toggle}>Toggle input</button>
//     </>
//   );
// }
