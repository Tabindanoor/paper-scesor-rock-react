
import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const choices = ['Paper', 'Rock', 'Scissors'];

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);

  const chooseOption = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    const gameResult = checkResult(choice, computerChoice);
    setResult(gameResult);
    updatePoints(gameResult);
  };

  const checkResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  };

  const updatePoints = (gameResult) => {
    if (gameResult === 'You win!') {
      setUserPoints(userPoints + 1);
      toast.success('You won!', { autoClose: 2000 });
    } else if (gameResult === 'Computer wins!') {
      setComputerPoints(computerPoints + 1);
      toast.error('Computer won!', { autoClose: 2000 });
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 ">
       <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <h1 className="text-3xl font-bold mb-4">Paper Rock Scissors</h1>
      <div className="flex justify-around w-2/3 mb-4">
        {choices.map((choice) => (
          <button
            key={choice}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => chooseOption(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className="flex justify-around w-2/3">
        <div className="text-center">
          <p className="text-lg font-semibold">You chose:</p>
          <p>{playerChoice}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">Computer chose:</p>
          <p>{computerChoice}</p>
        </div>
      </div>
      {result && <p className="text-2xl font-bold mt-4">{result}</p>}
      <div className="flex justify-around w-2/3 mt-4">
        <div>
          <p className="text-lg font-semibold">Your points:</p>
          <p>{userPoints}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Computer&apos;s points:</p>
          <p>{computerPoints}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
