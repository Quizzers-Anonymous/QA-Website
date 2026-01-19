import React from "react";
import EventCard from "../components/EventCard";
import events from "../data/events.json";

const Events = () => {
  // Sort events by date (most recent first)
  const sortedEvents = [...events].sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split("/");
    const [dayB, monthB, yearB] = b.date.split("/");
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB - dateA;
  });

  const upcomingEvents = sortedEvents.filter(
    (event) => event.eventStatus === "upcoming",
  );
  const completedEvents = sortedEvents.filter(
    (event) => event.eventStatus === "completed",
  );

  return (
    <div>
      {/* Global grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Events</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Challenge your knowledge, compete with the best, and be part of our
            quizzing legacy
          </p>
        </div>

        {/* Horizontal divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16 animate-slideUp">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Horizontal divider */}
        {upcomingEvents.length > 0 && completedEvents.length > 0 && (
          <div className="border-t border-white/10 my-6"></div>
        )}

        {/* Completed Events */}
        {completedEvents.length > 0 && (
          <div className="mb-16 animate-slideUp">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Completed Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-8 max-w-2xl mx-auto shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want to Participate?
            </h2>
            <p className="text-gray-300 mb-6">
              Want to get updates on our upcoming events? Follow us on
              Instagram!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/cegquizclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white 
                  hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Follow Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
