import React, { useState } from "react";
import articles from "../data/articles.json";

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  // If an article is selected, show detailed view
  if (selectedArticle) {
    return (
      <div className="min-h-screen relative overflow-hidden py-8">
        {/* Global grain overlay */}
        <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none z-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Back button */}
          <button
            onClick={handleBackToList}
            className="flex items-center space-x-2 text-accent-blue hover:text-blue-400 transition-colors mb-8"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Articles</span>
          </button>

          {/* Full Article */}
          <article className="bg-dark-card rounded-lg border border-dark-border overflow-hidden shadow-lg">
            {/* Article Header */}
            <div className="p-8 border-b border-dark-border">
              <h1 className="text-3xl lg:text-4xl font-bold text-dark-text mb-4">
                {selectedArticle.title}
              </h1>
              <div className="flex items-center space-x-6 text-sm text-dark-text-secondary">
                <div className="flex items-center">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="font-medium">{selectedArticle.author}</span>
                </div>
                <div className="flex items-center">
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
                  <span>{formatDate(selectedArticle.date)}</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              <div className="space-y-8">
                {selectedArticle.content.map((section, index) => (
                  <div
                    key={`section-${selectedArticle.id}-${index}`}
                    className="space-y-6"
                  >
                    {/* Paragraph */}
                    <p className="text-base leading-relaxed text-dark-text-secondary">
                      {section.paragraph}
                    </p>

                    {/* Image */}
                    {section.image && (
                      <div className="flex justify-center">
                        <img
                          src={section.image}
                          alt={`Illustration for paragraph ${index + 1}`}
                          className="w-full max-w-2xl h-auto rounded-lg shadow-md border border-dark-border object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden py-8">
      {/* Global grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none z-0"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Articles</h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Dive deep into the world of knowledge with our insightful articles.
            From quiz strategies to educational insights, discover content that
            enhances your learning journey.
          </p>
        </div>

        <div className="border-t border-white/10 my-6"></div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-dark-card rounded-lg border border-dark-border overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent-cyan text-black">
                    Featured
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-dark-text mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-dark-text-secondary mb-6">
                  {articles[0].summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-dark-text-secondary">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {articles[0].author}
                    </div>
                    <div className="flex items-center text-sm text-dark-text-secondary">
                      <svg
                        className="w-4 h-4 mr-1"
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
                      {formatDate(articles[0].date)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleReadMore(articles[0])}
                    className="bg-accent-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <article
              key={article.id}
              className="bg-dark-card rounded-lg border border-dark-border overflow-hidden hover:border-accent-blue transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-text mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-dark-text-secondary mb-4 line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-dark-text-secondary">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {article.author}
                  </div>
                  <div className="flex items-center text-sm text-dark-text-secondary">
                    <svg
                      className="w-4 h-4 mr-1"
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
                    {formatDate(article.date)}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-text-secondary">
                    Article {article.id}
                  </span>
                  <button
                    onClick={() => handleReadMore(article)}
                    className="text-accent-cyan font-medium hover:text-cyan-400 transition-colors duration-200"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-accent-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
