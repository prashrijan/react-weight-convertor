import Inputfield from "./Components/Inputfield";
import { useRef } from "react";
import { convertWeight } from "./Utils/convertWeight";

function App() {
  const fromRef = useRef("");
  const toRef = useRef("");
  const inputRef = useRef();
  const resultRef = useRef();

  // const convertWeight = (from, to, )

  const handleChange = () => {
    let convertedWeight = convertWeight(
      fromRef.current.value,
      toRef.current.value,
      parseFloat(inputRef.current.value)
    );

    resultRef.current.value = convertedWeight;
  };

  return (
    <>
      <div className="flex gap-5 flex-col h-screen items-center justify-center">
        <h2 className="font-bold text-3xl">Weight Convertor</h2>
        {/* input fields */}
        <div className="flex gap-4 w-4/6">
          <Inputfield
            defaultSelect="Gram"
            label="From"
            selectRef={fromRef}
            reference={inputRef}
            handleChange={handleChange}
          />
          <Inputfield
            defaultSelect="Kilogram"
            selectRef={toRef}
            label="To"
            reference={resultRef}
            disable="true"
            handleChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;
