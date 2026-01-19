import React from "react";
import quizSets from "../data/quizSets.json";

const QuizSets = () => {
  // Category styles mapping
  const categoryStyles = {
    Technology: {
      bg: "bg-purple-500",
      hoverBg: "hover:bg-purple-500/90",
      shadow: "hover:shadow-purple-500/50",
    },
    "General Knowledge": {
      bg: "bg-blue-500",
      hoverBg: "hover:bg-blue-500/90",
      shadow: "hover:shadow-blue-500/50",
    },
    Science: {
      bg: "bg-green-500",
      hoverBg: "hover:bg-green-500/90",
      shadow: "hover:shadow-green-500/50",
    },
    Business: {
      bg: "bg-orange-500",
      hoverBg: "hover:bg-orange-500/90",
      shadow: "hover:shadow-orange-500/50",
    },
    "Arts & Literature": {
      bg: "bg-pink-500",
      hoverBg: "hover:bg-pink-500/90",
      shadow: "hover:shadow-pink-500/50",
    },
    Sports: {
      bg: "bg-red-500",
      hoverBg: "hover:bg-red-500/90",
      shadow: "hover:shadow-red-500/50",
    },
    "History & Geography": {
      bg: "bg-indigo-500",
      hoverBg: "hover:bg-indigo-500/90",
      shadow: "hover:shadow-indigo-500/50",
    },
    Entertainment: {
      bg: "bg-yellow-500",
      hoverBg: "hover:bg-yellow-500/90",
      shadow: "hover:shadow-yellow-500/50",
    },
    "Current Affairs": {
      bg: "bg-teal-500",
      hoverBg: "hover:bg-teal-500/90",
      shadow: "hover:shadow-teal-500/50",
    },
    default: {
      bg: "bg-gray-500",
      hoverBg: "hover:bg-gray-500/90",
      shadow: "hover:shadow-gray-500/50",
    },
  };

  // Sort quiz sets by date (most recent first)
  const sortedQuizSets = [...quizSets].sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split("/");
    const [dayB, monthB, yearB] = b.date.split("/");
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB - dateA;
  });

  // Format date for display
  const formatDate = (dateString) => {
    // Convert DD/MM/YYYY to MM/DD/YYYY for proper Date parsing
    const [day, month, year] = dateString.split("/");
    const date = new Date(year, month - 1, day);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-IN", options);
  };

  const totalQuestions = quizSets.reduce((sum, set) => sum + set.questions, 0);
  const categories = new Set(quizSets.map((set) => set.category)).size;

  return (
    <div className="min-h-screen py-8 relative overflow-hidden">
      {/* Global grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Quiz Sets</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Check out some of our quiz sets! Some from our Instagram quizzes and
            some used in events!
          </p>
        </div>

        <div className="border-t border-white/10 my-6"></div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-accent-blue mb-2">
              {quizSets.length}
            </div>
            <div className="text-gray-300">Quiz Sets</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {totalQuestions}
            </div>
            <div className="text-gray-300">Total Questions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-accent-green mb-2">
              {categories}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
        </div>

        {/* Quiz Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedQuizSets.map((quizSet) => {
            const style =
              categoryStyles[quizSet.category] || categoryStyles["default"];
            return (
              <div
                key={quizSet.id}
                className={`bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden shadow-lg 
                           transform transition-all duration-300 hover:-translate-y-1 ${style.shadow}`}
              >
                {/* Header with category color */}
                <div className={`${style.bg} p-4`}>
                  <span className="text-white font-medium">
                    {quizSet.category}
                  </span>
                </div>
                {/* Quiz Image */}
                <div className="relative">
                  <img
                    src={quizSet.image}
                    alt={quizSet.title}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {quizSet.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{quizSet.description}</p>

                  {/* Stats */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-300">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {quizSet.questions} Questions
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {formatDate(quizSet.date)}
                    </div>
                  </div>

                  {/* Redirect Button */}
                  <a
                    href={quizSet.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-200 
                               ${style.bg} ${style.hoverBg} text-black shadow-md hover:shadow-lg`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span>Check it out</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizSets;
