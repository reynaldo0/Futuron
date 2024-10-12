import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const questions = [
  {
    id: 1,
    question: "Bagaimana cara Anda bepergian sehari-hari?",
    options: [
      { answer: "Saya mengemudi sendirian", value: 5 },
      { answer: "Saya berkendara bersama orang lain (carpool)", value: 2 },
      { answer: "Saya menggunakan transportasi umum", value: 1 },
      { answer: "Saya berjalan kaki atau bersepeda", value: 0 },
    ],
  },
  {
    id: 2,
    question: "Jenis energi apa yang digunakan di rumah Anda?",
    options: [
      { answer: "Sebagian besar menggunakan bahan bakar fosil", value: 5 },
      { answer: "Campuran antara energi terbarukan dan non-terbarukan", value: 3 },
      { answer: "Sebagian besar menggunakan energi terbarukan", value: 0 },
    ],
  },
  {
    id: 3,
    question: "Seberapa sering Anda mendaur ulang atau mengompos sampah?",
    options: [
      { answer: "Tidak pernah", value: 5 },
      { answer: "Jarang", value: 3 },
      { answer: "Terkadang", value: 2 },
      { answer: "Selalu", value: 0 },
    ],
  },
  {
    id: 4,
    question: "Berapa banyak air yang Anda gunakan setiap hari?",
    options: [
      { answer: "Lebih dari 100 galon", value: 5 },
      { answer: "50-100 galon", value: 3 },
      { answer: "Kurang dari 50 galon", value: 1 },
      { answer: "Saya berusaha menghemat air", value: 0 },
    ],
  },
  {
    id: 5,
    question: "Bagaimana pola makan Anda?",
    options: [
      { answer: "Sebagian besar makan daging dan produk susu", value: 5 },
      { answer: "Sebagian besar berbasis tanaman", value: 0 },
      { answer: "Pola makan yang seimbang", value: 2 },
    ],
  },
];

const recommendations = [
  {
    threshold: 0,
    message: "Jejak karbon Anda sangat rendah! Teruskan upaya ramah lingkungan Anda!",
  },
  {
    threshold: 5,
    message: "Jejak karbon Anda sedang. Pertimbangkan untuk mengurangi kebiasaan mengemudi dan menggunakan energi terbarukan.",
  },
  {
    threshold: 15,
    message: "Jejak karbon Anda cukup tinggi. Mulailah dengan mengurangi penggunaan air, mendaur ulang lebih banyak, dan beralih ke energi hijau.",
  },
  {
    threshold: 25,
    message: "Jejak karbon Anda sangat tinggi. Untuk menguranginya, coba ganti energi rumah ke energi terbarukan, kurangi penggunaan mobil, dan konsumsi lebih sedikit daging.",
  },
];

const CarbonFootprintQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option

  const handleOptionChange = (questionId, value) => {
    setSelectedOption(value);
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      return;
    }
    setSelectedOption(null); // Reset option when moving to the next question
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);
    setScore(totalScore);
  };

  const getRecommendation = () => {
    return recommendations.find((rec) => score >= rec.threshold)?.message;
  };

  const handleSubmit = () => {
    calculateScore();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg mt-[200px] shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Uji Jejak Karbon Anda</h2>

      {!submitted ? (
        <div>
          {/* Show the current question */}
          {currentQuestionIndex < questions.length ? (
            <div>
              <div className="mb-6">
                <p className="text-xl mb-4">{questions[currentQuestionIndex].question}</p>
                <div className="flex flex-col space-y-4">
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`question-${questions[currentQuestionIndex].id}`}
                        value={option.value}
                        onChange={() =>
                          handleOptionChange(questions[currentQuestionIndex].id, option.value)
                        }
                        className="text-green-500"
                        checked={selectedOption === option.value}
                      />
                      <span>{option.answer}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNextQuestion}
                className={`w-full ${
                  selectedOption === null ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                } text-white font-bold py-2 px-4 rounded-lg mt-6 transition-all`}
                disabled={selectedOption === null}
              >
                Lanjutkan
              </button>
            </div>
          ) : (
            <div>
              <p className="text-xl mb-4">Apakah Anda yakin dengan jawaban Anda?</p>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-6 transition-all"
              >
                Kirim
              </button>
            </div>
          )}
        </div>
      ) : (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="text-2xl font-bold mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Skor Jejak Karbon Anda:
          </motion.h3>

          <motion.p
            className="text-3xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {score}
          </motion.p>

          <motion.p
            className="text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {getRecommendation()}
          </motion.p>

          <motion.img
            src="https://i.pinimg.com/originals/e5/7c/e1/e57ce195528ef472074b16552d0440e8.gif"
            alt="Jejak Karbon"
            className="mx-auto rounded-lg mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <p className="text-gray-400">Pelajari lebih lanjut tentang cara mengurangi jejak karbon Anda.</p>
        </motion.div>
      )}
    </div>
  );
};

export default CarbonFootprintQuiz;
