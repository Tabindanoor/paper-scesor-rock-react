
import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Stars from './Stars';
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { FaHandRock } from "react-icons/fa";
import sisor from "../public/sisor.jpg"
import rock from "../public/rock.jpeg"
import images from "../public/images.jpeg"

const choices = ['Paper', 'Rock', 'Scissors'];
const data =[
  {
    choice:"Paper",
    svg:<FaHandPaper/>,
    img:images
  },

  {
    choice:"Rock",
    svg:<FaHandRock/>,
    img:rock


  },
  
  {
    choice:"Scissors",
    svg:<FaHandScissors/>,
    img:sisor


  },
  
]

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

 

  const restartGame = () => {
    if (userPoints !== 0 || computerPoints !== 0) {
      toast.info('Game reset!', { autoClose: 2000 });
    }
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setUserPoints(0);
    setComputerPoints(0);
  };


  return (
    <div className="flex flex-col p-5 vh-100  my-10 mx-auto   bg-transparent  rounded-md items-center justify-center">
      
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
  <div className=' bg-orange-50 bg-opacity-50 rounded-3xl max-w-xl  max-h-xl p-5 sm:p-10 border-t-2 border-green-600  shadow-xl justify-center'>
    <h1 className="text-3xl font-bold p-4"> <span className='text-green-600'>Paper</span> <span className='text-purple-700'>Rock</span>  <span className='text-red-600'>Scissors</span>  </h1>
      <div className="flex justify-between bg-black p-4 rounded-xl mb-4">
        {data.map((choice) => (
          <button
            key={choice.choice}
            className="  text-white font-bold text-xl  rounded"
            onClick={() => chooseOption(choice.choice)}
          >{choice.choice}
           <img className='w-[60px] h-[60px] rounded-full mt-4' src={choice.img} alt="" />
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-center">
          <p className="text-lg font-semibold">You choose:</p>
          <p className='text-xl font-serif font-semibold text-orange-600'>{playerChoice}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">Computer chooses:</p>
          <p className='text-xl font-serif font-semibold text-teal-500'>{computerChoice}</p>
        </div>
      </div>
      {result && <p className="text-2xl font-bold text-center text-cyan-700 animate-bounce mt-4">{result}</p>}
      <div className="mt-4">
        <div className='flex'>
          <p className=" text-xl font-serif font-semibold text-rose-700">Your points:</p>
          <p className=" text-xl font-serif font-semibold text-black">{userPoints}</p>
        </div>
        <div  className='flex'>
          <p className=" text-xl font-serif font-semibold text-pink-600">Computer&apos;s points:</p>
          <p className=" text-xl font-serif font-semibold text-black">{computerPoints}</p>
        </div>

      </div>

      <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-black text-white text-center font-bold rounded-xl "
            onClick={restartGame}
          >
            Restart Game
          </button>
        </div>
   
  </div>
   


      <div className=''>
      <Stars/>

      </div>
     

    </div>
  );
};

export default Game;


// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Stars from './Stars';
// import { FaHandPaper, FaHandScissors, FaHandRock } from 'react-icons/fa';
// import sisor from '../public/sisor.jpg';
// import rock from '../public/rock.jpeg';
// import images from '../public/images.jpeg';

// const choices = ['Paper', 'Rock', 'Scissors'];
// const data = [
//   {
//     choice: 'Paper',
//     svg: <FaHandPaper />,
//     img: images
//   },
//   {
//     choice: 'Rock',
//     svg: <FaHandRock />,
//     img: rock
//   },
//   {
//     choice: 'Scissors',
//     svg: <FaHandScissors />,
//     img: sisor
//   }
// ];

// const Game = () => {
//   const [playerChoice, setPlayerChoice] = useState(null);
//   const [computerChoice, setComputerChoice] = useState(null);
//   const [result, setResult] = useState(null);
//   const [userPoints, setUserPoints] = useState(0);
//   const [computerPoints, setComputerPoints] = useState(0);

//   const chooseOption = (choice) => {
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//     setPlayerChoice(choice);
//     setComputerChoice(computerChoice);
//     const gameResult = checkResult(choice, computerChoice);
//     setResult(gameResult);
//     updatePoints(gameResult);
//   };

//   const checkResult = (playerChoice, computerChoice) => {
//     if (playerChoice === computerChoice) {
//       return "It's a tie!";
//     } else if (
//       (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
//       (playerChoice === 'Paper' && computerChoice === 'Rock') ||
//       (playerChoice === 'Scissors' && computerChoice === 'Paper')
//     ) {
//       return 'You win!';
//     } else {
//       return 'Computer wins!';
//     }
//   };

//   const updatePoints = (gameResult) => {
//     if (gameResult === 'You win!') {
//       setUserPoints(userPoints + 1);
//       toast.success('You won!', { autoClose: 2000 });
//     } else if (gameResult === 'Computer wins!') {
//       setComputerPoints(computerPoints + 1);
//       toast.error('Computer won!', { autoClose: 2000 });
//     }
//   };

//   const restartGame = () => {
//     if (userPoints !== 0 || computerPoints !== 0) {
//       toast.info('Game reset!', { autoClose: 2000 });
//     }
//     setPlayerChoice(null);
//     setComputerChoice(null);
//     setResult(null);
//     setUserPoints(0);
//     setComputerPoints(0);
//   };

//   return (
//     <div className="flex flex-col p-5 vh-100 my-10 mx-auto bg-transparent rounded-md items-center justify-center">
//       <ToastContainer
//         position="top-right"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       <div className="bg-orange-50 bg-opacity-50 rounded-3xl max-w-xl max-h-xl p-5 sm:p-10 border-t-2 border-green-600 shadow-xl justify-center">
//         <h1 className="text-3xl font-bold p-4">
//           <span className="text-green-600">Paper</span> <span className="text-purple-700">Rock</span>{' '}
//           <span className="text-red-600">Scissors</span>
//         </h1>
//         <div className="flex justify-between bg-black p-4 rounded-xl mb-4">
//           {data.map((choice) => (
//             <button
//               key={choice.choice}
//               className="text-white font-bold text-xl rounded transition duration-300 ease-in-out transform hover:scale-110"
//               onClick={() => chooseOption(choice.choice)}
//             >
//              <span className='text-center justify-text mx-auto '>{choice.svg}</span> 
//               <img className="w-[60px] h-[60px] rounded-full mt-4" src={choice.img} alt="" />
//             </button>
//           ))}
//         </div>
//         <div className="flex justify-between mt-4">
//           <div className="text-center">
//             <p className="text-lg font-semibold">You choose:</p>
//             <p className="text-xl font-serif font-semibold text-orange-600">{playerChoice}</p>
//           </div>
//           <div className="text-center">
//             <p className="text-lg font-semibold">Computer chooses:</p>
//             <p className="text-xl font-serif font-semibold text-teal-500">{computerChoice}</p>
//           </div>
//         </div>
//         {result && (
//           <p className="text-2xl font-bold text-center text-cyan-700 mt-4 animate-bounce">{result}</p>
//         )}
//         <div className="mt-4">
//           <div className="flex justify-center space-x-4">
//             <div className="text-center">
//               <p className="text-xl font-serif font-semibold text-rose-700">Your points:</p>
//               <p className="text-xl font-serif font-semibold text-black">{userPoints}</p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl font-serif font-semibold text-pink-600">Computer's points:</p>
//               <p className="text-xl font-serif font-semibold text-black">{computerPoints}</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center mt-4">
//           <button
//             className="px-4 py-2 bg-blue-500 text-white text-center font-bold rounded transition duration-300 ease-in-out transform hover:scale-110"
//             onClick={restartGame}
//           >
//             Restart Game
//           </button>
//         </div>
//       </div>
//       <div className="mt-10">
//         <Stars />
//       </div>
//     </div>
//   );
// };

// export default Game;
