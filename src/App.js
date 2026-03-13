import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import("./pages/Home"));
const Events = lazy(() => import("./pages/Events"));
const QuizSets = lazy(() => import("./pages/QuizSets"));
const Articles = lazy(() => import("./pages/NewArticles"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <SpeedInsights />
      <Analytics />
      <div className="App min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense
            fallback={
              <div className="px-4 py-8 text-center text-gray-300">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <PageWrapper
                    title="Home"
                    description="Welcome to Quizzers Anonymous - The ultimate platform for quiz enthusiasts."
                  >
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/events"
                element={
                  <PageWrapper
                    title="Events"
                    description="Join our upcoming quiz events and competitions."
                  >
                    <Events />
                  </PageWrapper>
                }
              />
              <Route
                path="/quiz-sets"
                element={
                  <PageWrapper
                    title="Quiz Sets"
                    description="Practice with our extensive collection of quiz sets and trivia."
                  >
                    <QuizSets />
                  </PageWrapper>
                }
              />
              <Route
                path="/articles"
                element={
                  <PageWrapper
                    title="Articles"
                    description="Check out our latest articles and updates."
                  >
                    <Articles />
                  </PageWrapper>
                }
              />
              <Route
                path="/gallery"
                element={
                  <PageWrapper
                    title="Gallery"
                    description="Browse photos from our past events and community gatherings."
                  >
                    <Gallery />
                  </PageWrapper>
                }
              />
              <Route
                path="/team"
                element={
                  <PageWrapper
                    title="Our Team"
                    description="Meet the dedicated team behind Quizzers Anonymous."
                  >
                    <Team />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper
                    title="Contact Us"
                    description="Get in touch with Quizzers Anonymous for queries and collaborations."
                  >
                    <Contact />
                  </PageWrapper>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
