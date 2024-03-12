import { useState, useEffect, useMemo } from "react";
import MarkButton from "./MarkButton";
import WinMessage from "./WinMessage";

export default function Grid() {
  let markTest = " ";
  const valueArray = useMemo(() => [], []);
  
  const [selectedMarks, setSelectedMarks] = useState({
    selectedMark1: " ",
    selectedMark2: " ",
    selectedMark3: " ",
    selectedMark4: " ",
    selectedMark5: " ",
    selectedMark6: " ",
    selectedMark7: " ",
    selectedMark8: " ",
    selectedMark9: " ",
  });

  const [hasWon, setHasWon] = useState(false);
  useEffect(() => {
    const winningCombinations = [
      [1, 2, 3], // Horizontal
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7], // Vertical
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9], // Diagonal
      [3, 5, 7]
    ];

    const hasWon = winningCombinations.some(combination =>
      combination.every(position => {
        const mark = selectedMarks[`selectedMark${position}`];
        return mark === "X" || mark === "O";
      }) && combination.every(position => selectedMarks[`selectedMark${position}`] === selectedMarks[`selectedMark${combination[0]}`])
    );
        console.log(hasWon)
        
    if (hasWon) {
      
      console.log( valueArray[Array.length-1] + " has won! Click reset to play again.");
      setHasWon(true);
    }
  }, [selectedMarks, markTest, valueArray]);



  function handleClick(markerKey) {
    setSelectedMarks((prevState) => {
      const newSelectedMarks = { ...prevState };
      if (prevState[markerKey] === " ") {
        newSelectedMarks[markerKey] = markTest;
      }
      console.log(newSelectedMarks)
      return newSelectedMarks;
    });
  }
  function handleButtonClear() {
    setSelectedMarks({
      selectedMark1: " ",
      selectedMark2: " ",
      selectedMark3: " ",
      selectedMark4: " ",
      selectedMark5: " ",
      selectedMark6: " ",
      selectedMark7: " ",
      selectedMark8: " ",
      selectedMark9: " ",
    });
    setHasWon(false)
  }
  

  function handlePlayerButton(value) {
      valueArray.push(value); // Append value to the end of valueArray
      console.log("valueArray:", valueArray);
      console.log("selectedMarks:", selectedMarks);
  }

  return (
    <div>
      {hasWon && <WinMessage previousMark={valueArray[valueArray.length-1]} />}
    <div className="grid gap-y-4 grid-cols-3 place-items-center p-4 bg-gradient-to-br from-pink-500 to-orange-400 rounded-b-xl mx-auto sm:w-2/3">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => handleButtonClear()}
      >
        Reset
      </button>

      <button
        type="button"
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        value="X"
        onClick={(event) => handlePlayerButton((markTest = event.target.value))}
      >
        Player X
      </button>

      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        value="O"
        onClick={(event) => handlePlayerButton((markTest = event.target.value))}
      >
        Player O
      </button>

      <MarkButton
        markerKey="selectedMark1"
        selectedMark={selectedMarks.selectedMark1}
        handleClick={handleClick}
        customStyle={
          selectedMarks.selectedMark1 === "X"
            ? "text-white text-9xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"
            : selectedMarks.selectedMark1 === "O"
            ? "text-white text-9xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
            : "text-black"
        }
      />
         <MarkButton
        markerKey="selectedMark2"
        selectedMark={selectedMarks.selectedMark2}
        handleClick={handleClick}
        customStyle={
          selectedMarks.selectedMark2 === "X"
            ? "text-white text-9xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"
            : selectedMarks.selectedMark2 === "O"
            ? "text-white text-9xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
            : "text-black"
        }
      />   <MarkButton
      markerKey="selectedMark3"
      selectedMark={selectedMarks.selectedMark3}
      handleClick={handleClick}
      customStyle={
        selectedMarks.selectedMark3 === "X"
          ? "text-white text-9xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"
          : selectedMarks.selectedMark3 === "O"
          ? "text-white text-9xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
          : "text-black"
      }
    />   <MarkButton
    markerKey="selectedMark4"
    selectedMark={selectedMarks.selectedMark4}
    handleClick={handleClick}
    customStyle={
      selectedMarks.selectedMark4 === "X"
        ? "text-white text-9xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"
        : selectedMarks.selectedMark4 === "O"
        ? "text-white text-9xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
        : "text-black"
    }
  />   <MarkButton
  markerKey="selectedMark5"
  selectedMark={selectedMarks.selectedMark5}
  handleClick={handleClick}
  customStyle={
    selectedMarks.selectedMark5 === "X"
      ? "text-white text-9xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"
      : selectedMarks.selectedMark5 === "O"
      ? "text-white text-9xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
      : "text-black"
  }
/>   <MarkButton
        markerKey="selectedMark6"
        selectedMark={selectedMarks.selectedMark6}
        handleClick={handleClick}
        customStyle={
          selectedMarks.selectedMark6 === "X"
            ? "text-white text-9xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"
            : selectedMarks.selectedMark6 === "O"
            ? "text-white text-9xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
            : "text-black"
        }
      />   <MarkButton
      markerKey="selectedMark7"
      selectedMark={selectedMarks.selectedMark7}
      handleClick={handleClick}
      customStyle={
        selectedMarks.selectedMark7 === "X"
          ? "text-white text-9xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"
          : selectedMarks.selectedMark7 === "O"
          ? "text-white text-9xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
          : "text-black"
      }
    />   <MarkButton
    markerKey="selectedMark8"
    selectedMark={selectedMarks.selectedMark8}
    handleClick={handleClick}
    customStyle={
      selectedMarks.selectedMark8 === "X"
        ? "text-white text-9xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"
        : selectedMarks.selectedMark8 === "O"
        ? "text-white text-9xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
        : "text-black"
    }
  />   <MarkButton
  markerKey="selectedMark9"
  selectedMark={selectedMarks.selectedMark9}
  handleClick={handleClick}
  customStyle={
    selectedMarks.selectedMark9 === "X"
      ? "text-white text-9xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"
      : selectedMarks.selectedMark9 === "O"
      ? "text-white text-9xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
      : "text-black"
  }
/>   

     
    </div>
    
    </div>
  );
}
