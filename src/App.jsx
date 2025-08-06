import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
// eslint-disable-next-line no-unused-vars
import { motion, number } from "framer-motion";
import { useState } from "react";

function App() {
  const { counter } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [lastInputValue, setLastInputValue] = useState(input);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    if (input) {
      dispatch(increment(Number(input)));
      setLastInputValue(input);
      setInput("");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-7xl">
      <div className="flex items-center justify-center gap-10">
        Count -
        <motion.h1
          key={counter}
          initial={{ translateY: "-20px", opacity: 0 }}
          animate={{
            translateY: "0px",
            opacity: 1,
          }}
          transition={{ duration: 0.4 }}
        >
          {counter}
        </motion.h1>
      </div>

      <div className="flex gap-8">
        <button
          className="cursor-pointer active:scale-90 transition-all duration-100 ease-in-out"
          onClick={() => dispatch(increment(1))}
        >
          +
        </button>
        <button
          className={`cursor-pointer active:scale-90 transition-all duration-100 ease-in-out ${
            counter <= 0 ? "opacity-[30%]" : ""
          }`}
          onClick={() => counter > 0 && dispatch(decrement(1))}
        >
          -
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex gap-4 mt-10 max-[1100px]:flex-col"
      >
        <input
          type="number"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          className="outline-none max-[800px]:max-w-[500px] max-[600px]:text-4xl max-[600px]:max-w-[300px] max-[600px]:py-8 max-[600px]:placeholder:text-xl border-2 placeholder:text-4xl flex items-center justify-center border-white focus-visible:border-[aqua] rounded-[18px] px-4 py-4
            [appearance:textfield] 
            [&::-webkit-inner-spin-button]:appearance-none 
            [&::-webkit-outer-spin-button]:appearance-none "
          placeholder={"Current Value - " + counter}
          list="suggestions"
        />
        <datalist id="suggestions">
          <option value={counter} />
          <option value={counter * -1} />
          <option value={lastInputValue} />
          <option value={lastInputValue * -1} />
        </datalist>
        <button className="focus-visible:border-[aqua] max-[600px]:max-w-[300px] max-[600px]:text-5xl max-[1100px]:py-6 max-[800px]:max-w-[500px] active:border-[aqua] active:scale-95 transition-all duration-100 cursor-pointer ease-in-out border-2 rounded-[18px] border-white px-6 outline-none">
          Done 🔥
        </button>
      </form>
    </div>
  );
}

export default App;
