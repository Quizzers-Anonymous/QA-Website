import React, { Suspense } from "react";
import BouncingLogo from "../components/BouncingLogo";
import Snowfall from "react-snowfall";
const InstagramPostEmbed = React.lazy(
  () => import("../components/InstagramPostEmbed"),
);

const Home = () => {
  return (
    <div>
      {/* Global grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none z-0"></div>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black text-white py-20 overflow-hidden">
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>

        {/* Bouncing Logo */}
        <BouncingLogo />
        <Snowfall
          color="rgba(255, 255, 255, 0.3)"
          snowflakeCount={100}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 10,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn z-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to{" "}
            <span
              className="text-accent-cyan"
              style={{ fontFamily: "'Honk', cursive" }}
            >
              Quizzers Anonymous
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-400 max-w-3xl mx-auto animate-slideUp">
            The official quiz club of College of Engineering Guindy, where
            curiosity meets competition and knowledge knows no bounds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events"
              className="bg-white/10 backdrop-blur-lg text-accent-cyan px-8 py-3 rounded-xl font-semibold shadow-lg 
              hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Explore Events
            </a>
            <a
              href="/team"
              className="bg-white/10 backdrop-blur-lg border border-white/20 text-accent-blue px-8 py-3 rounded-xl font-semibold 
              hover:bg-white/20 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn space-y-6">
              <h2 className="text-3xl font-bold text-white">
                About Quizzers Anonymous
              </h2>
              <p className="text-gray-300">
                Founded as the premier quiz club of College of Engineering
                Guindy, Anna University, Quizzers Anonymous has been fostering a
                culture of learning and intellectual curiosity for years. We
                believe that questioning is the beginning of wisdom.
              </p>
              <p className="text-gray-300">
                Our club organizes regular quiz competitions, knowledge-sharing
                sessions, and hosts some of the most prestigious quiz events in
                Chennai. From literature to science, sports to entertainment, we
                cover it all.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div
                  className="text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg 
                hover:shadow-accent-cyan/30 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-accent-cyan">10+</div>
                  <div className="text-sm text-gray-300">
                    Years Of Quizzers Anonymous
                  </div>
                </div>
                <div
                  className="text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg 
                hover:shadow-accent-cyan/30 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-accent-cyan">
                    1000+
                  </div>
                  <div className="text-sm text-gray-300">Participants</div>
                </div>
              </div>
            </div>
            <div className="relative group animate-slideUp">
              <img
                src="/media/HomePage.jpg"
                alt="Quiz event"
                loading="lazy"
                decoding="async"
                className="rounded-xl shadow-lg w-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Divider between About and Instagram Feed */}
      <div className="border-t border-white/10 my-6"></div>

      {/* Instagram Feed Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-4">
              Follow Our Journey
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay updated with our latest events, achievements, and memorable
              moments. Follow us on Instagram for daily updates and
              behind-the-scenes content.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg animate-slideUp">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Latest Posts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <Suspense
                  fallback={
                    <div className="py-8 text-center">Loading post...</div>
                  }
                >
                  <div className="flex justify-center hover:scale-105 transition-transform duration-300">
                    <InstagramPostEmbed url="https://www.instagram.com/p/DM-oLOizDzC/" />
                  </div>
                  <div className="flex justify-center hover:scale-105 transition-transform duration-300">
                    <InstagramPostEmbed url="https://www.instagram.com/p/DMAe-fcSvCb/" />
                  </div>
                  <div className="flex justify-center hover:scale-105 transition-transform duration-300">
                    <InstagramPostEmbed url="https://www.instagram.com/p/DMAdi9YynBn/" />
                  </div>
                </Suspense>
              </div>
              <div className="text-center">
                <a
                  href="https://www.instagram.com/cegquizclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl 
                  hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <span>Follow @cegquizclub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Divider between Instagram Feed and Quick Links */}
      <div className="border-t border-white/10 my-6"></div>

      {/* Quick Links Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-4">Explore More</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our events, browse quiz sets, read articles, and get to
              know our amazing team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideUp">
            {/* Event Card */}
            <a
              href="/events"
              className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg 
              hover:bg-white/20 hover:shadow-accent-yellow/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-accent-yellow rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-black"
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
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Upcoming Events
              </h3>
              <p className="text-gray-300">
                Join our exciting quiz competitions and knowledge-sharing
                sessions.
              </p>
            </a>

            {/* Quiz Sets Card */}
            <a
              href="/quiz-sets"
              className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg 
              hover:bg-white/20 hover:shadow-accent-blue/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Quiz Sets
              </h3>
              <p className="text-gray-300">
                Practice with our curated collection of quiz questions.
              </p>
            </a>

            {/* Gallery Card */}
            <a
              href="/gallery"
              className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg 
              hover:bg-white/20 hover:shadow-accent-green/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Gallery</h3>
              <p className="text-gray-300">
                Relive the memorable moments from our events and activities.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
