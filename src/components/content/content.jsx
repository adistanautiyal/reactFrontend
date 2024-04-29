import React from "react";
import { useState, useEffect } from "react";
function Content() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div className="text-3xl font-bold text-center">
      <h1 className="">I've rendered {count} times!</h1>
      <h1 className="">I've rendered {count} times!</h1>
      <h1 className="">I've rendered {count} times!</h1>
      <h1 className="">I've rendered {count} times!</h1>
    </div>
  );
}

export default Content;
