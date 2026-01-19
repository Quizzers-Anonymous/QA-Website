import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import QuizSets from "./pages/QuizSets";
import Articles from "./pages/Articles";
import NewArticles from "./pages/NewArticles";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import PageWrapper from "./components/PageWrapper";
import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <SpeedInsights />
      <Analytics />
      <div className="App min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
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
                  description="Read insightful articles and blog posts about quizzing and general knowledge."
                >
                  <Articles />
                </PageWrapper>
              }
            />
            <Route
              path="/new-articles"
              element={
                <PageWrapper
                  title="New Articles"
                  description="Check out our latest articles and updates."
                >
                  <NewArticles />
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
