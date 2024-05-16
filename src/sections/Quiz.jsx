import React, { useState } from 'react';

const App = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [finalScore, setFinalScore] = useState(0);

  const changeQuestion = (questionNum, isCorrect) => {
    if (isCorrect) {
      setScore((questionNum) * 10);
    }

    setTimeout(() => {
      setCurrentQuestion(questionNum + 1);
    }, 1000);
  };

  const finalRes = (questionNum, isCorrect) => {
    if (isCorrect) {
      const finalScore = score === 0 ? questionNum * 10 : 100;
      setScore(finalScore);
      setFinalScore(finalScore);
    } else {
      setFinalScore(score);
    }

    setTimeout(() => {
      setCurrentQuestion('final');
    }, 1000);
  };

  return (
    <div className="flex items-center justify-around min-h-screen bg-gradient-to-r from-black via-gray-800 to-black text-black">
      <div className="w-96 p-6 bg-white shadow-lg rounded-3xl">
        <div className="bg-green-500 text-white flex justify-between p-4 rounded-t-3xl text-lg">
          <span>Score: {score}</span>
        </div>
        <div className="qa_body">
          {currentQuestion === 1 && (
            <div className="qa_set block">
              <h4 className="mb-4 text-lg">Que1: What does HTML stand for?</h4>
              <div className="qa_ans_row mb-2" onClick={() => changeQuestion(1, false)}>
                <input type="radio" name="a1" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">Hyper Tool Markup Language</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => changeQuestion(1, true)}>
                <input type="radio" name="a1" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" valid="valid" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">Hypertext Markup Language</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => changeQuestion(1, false)}>
                <input type="radio" name="a1" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">Home Text Markup Language</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => changeQuestion(1, false)}>
                <input type="radio" name="a1" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">Cascading Style Sheet</span>
              </div>
            </div>
          )}

          {currentQuestion === 2 && (
            <div className="qa_set block">
              <h4 className="mb-4 text-lg">Que2: What does WWW stand for?</h4>
              <div className="qa_ans_row mb-2" onClick={() => changeQuestion(2, false)}>
                <input type="radio" name="a2" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">World Wind Web</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => changeQuestion(2, true)}>
                <input type="radio" name="a2" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" valid="valid" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">World Wide Web</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => changeQuestion(2, false)}>
                <input type="radio" name="a2" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">World W Web</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => changeQuestion(2, false)}>
                <input type="radio" name="a2" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">Cascading Style Sheet</span>
              </div>
            </div>
          )}

          {currentQuestion === 3 && (
            <div className="qa_set block">
              <h4 className="mb-4 text-lg">Que3: What does CSS stand for?</h4>
              <div className="qa_ans_row mb-2" onClick={() => changeQuestion(3, false)}>
                <input type="radio" name="a3" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">Cascading Style Sheets</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => changeQuestion(3, true)}>
                <input type="radio" name="a3" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" valid="valid" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">Computer Style Sheets</span>
              </div>
            </div>
          )}

          {currentQuestion === 4 && (
            <div className="qa_set block">
              <h4 className="mb-4 text-lg">Que4: What is the capital of France?</h4>
              <div className="qa_ans_row mb-2" onClick={() => finalRes(4, false)}>
                <input type="radio" name="a4" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">London</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => finalRes(4, false)}>
                <input type="radio" name="a4" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">Berlin</span>
              </div>
              <div className="qa_ans_row mb-2" onClick={() => finalRes(4, true)}>
                <input type="radio" name="a4" className="opacity-0 absolute left-0 top-0 w-full h-full z-10 cursor-pointer" valid="valid" />
                <span className="block p-2 bg-green-100 rounded-lg border-2 border-green-500 hover:bg-green-200">Paris</span>
              </div>
            </div>
          )}

          {currentQuestion === 'final' && (
            <div className="qa_set block">
              <h4 className="text-lg">Your Total Score <span>{finalScore}</span> out of 100</h4>
            </div>
          )}
        </div>
        <div className="qa_footer text-center mt-4">
          <a href="s.html" className="btn1 inline-block p-2 bg-green-500 rounded-lg text-white hover:bg-green-700">Start</a>
        </div>
      </div>
    </div>
  );
};

export default App;
