import  { useState } from "react";

const App = () => {
  const [color, setColor] = useState("white");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white py-1 px-1 rounded-xl ">
            <button
              className="outline-none px-2 rounded-full text-white shadow-lg"
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              className="outline-none px-2 rounded-full text-white shadow-lg"
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              className="outline-none px-2 rounded-full text-white shadow-lg"
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              className="outline-none px-2 rounded-full text-white shadow-lg"
              onClick={() => setColor("grey")}
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button
              className="outline-none px-2 rounded-full text-white shadow-lg"
              onClick={() => setColor("Black")}
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
            <button
              className="outline-none px-2 rounded-full text-white shadow-lg"
              onClick={() => setColor("violet")}
              style={{ backgroundColor: "blueviolet" }}
            >
              violet
            </button>
            <button
              className="outline-none px-2 rounded-full text-black shadow-lg"
              onClick={() => setColor("blanchedalmond")}
              style={{ backgroundColor: "blanchedalmond" }}
            >
              Skin
            </button>
            <button
              className="outline-none px-2 rounded-full text-white shadow-lg"
              onClick={() => setColor("#DBA6F7")}
              style={{ backgroundColor: "#DBA6F7" }}
            >
              Lavander
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
