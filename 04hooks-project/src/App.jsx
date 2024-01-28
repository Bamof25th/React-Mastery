import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState("Password");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+?<>.,{}[]=-`~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyPasswordToclickboard = useCallback(
    () => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,length)
      window.navigator.clipboard.writeText(Password)
    },
    [Password,length],
  )
  
  useEffect(() => {
    passwordGenerator();
  }, [length,numAllow,charAllow,passwordGenerator])
  
  const passwordRef = useRef(null);

  return (
    <>
     

      <div className="w-full h-26 max-w-md mx-auto px-4 my-4 text-slate-900 bg-slate-500  rounded-lg shadow-md ">
      <h1 className="text-center text-white ">Password Generator</h1>
        <div className="flex  rounded-lg overflow-hidden py-2">
          <input
            className="outline-none w-full py-1 px-3 rounded-l-md text-slate-400"
            type="text"
            value={Password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 rounded-r-lg  "
          onClick={copyPasswordToclickboard} >
           Copy
          </button>
          
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input className="cursor-pointer" type="range" min={7} max={100} value={length} 
              onChange={(e) => (setLength(e.target.value))}
            />
            <lable>Length:{length}</lable>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numAllow}
            id="numberInput"
            onChange={()=>{setNumAllow((prev)=> !prev)}}
            />
            <lable>Numbers</lable>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllow}
            id="numberInput"
            onChange={()=>{setCharAllow((prev)=> !prev)}}
            />
            <lable>Characters</lable>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
