import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <img
              src="/logo.png"
              alt="Quizzers Anonymous Logo"
              className="w-10 h-10 mb-2"
            />
            <span className="font-bold text-lg text-dark-text mb-1">
              Quizzers Anonymous
            </span>
            <p className="text-dark-text-secondary text-sm mb-3 leading-snug">
              The official quiz club of College of Engineering Guindy, Anna
              University.
            </p>
            <div className="space-y-1 text-xs text-dark-text-secondary">
              <p>Room No. 11, Third Floor, CEG Square</p>
              <p>College of Engineering Guindy</p>
              <p>Anna University, Chennai</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-dark-text">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="/events"
                  className="text-dark-text-secondary hover:text-accent-blue"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/quiz-sets"
                  className="text-dark-text-secondary hover:text-accent-blue"
                >
                  Quiz Sets
                </a>
              </li>
              {/*<li><a href="/articles" className="text-dark-text-secondary hover:text-accent-blue">Articles</a></li>*/}
              <li>
                <a
                  href="/new-articles"
                  className="text-dark-text-secondary hover:text-accent-blue"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-dark-text-secondary hover:text-accent-blue"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-dark-text-secondary hover:text-accent-blue"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-dark-text-secondary hover:text-accent-blue"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-dark-text">
              Follow Us
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x67;&#x6f;&#x6f;&#x67;&#x6c;&#x65;&#x2e;&#x63;&#x6f;&#x6d;&#x2f;&#x6d;&#x61;&#x69;&#x6c;&#x2f;&#x3f;&#x76;&#x69;&#x65;&#x77;&#x3d;&#x63;&#x6d;&#x26;&#x74;&#x6f;&#x3d;&#x71;&#x75;&#x69;&#x7a;&#x7a;&#x65;&#x72;&#x73;&#x61;&#x6e;&#x6f;&#x6e;&#x79;&#x6d;&#x6f;&#x75;&#x73;&#x63;&#x65;&#x67;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;&#x26;&#x73;&#x75;&#x3d;&#x47;&#x65;&#x6e;&#x65;&#x72;&#x61;&#x6c;&#x25;&#x32;&#x30;&#x49;&#x6e;&#x71;&#x75;&#x69;&#x72;&#x79;"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-accent-blue"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email</span>
              </a>

              <a
                href="https://www.instagram.com/cegquizclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-accent-blue"
              >
                {/* Instagram Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.402a4.92 4.92 0 011.68 1.09 4.92 4.92 0 011.09 1.681c.162.46.347 1.26.402 2.43.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.055 1.17-.24 1.97-.402 2.43a4.92 4.92 0 01-1.09 1.68 4.92 4.92 0 01-1.681 1.09c-.46.162-1.26.347-2.43.402-1.267.058-1.647.07-4.851.07s-3.584-.012-4.851-.07c-1.17-.055-1.97-.24-2.43-.402a4.92 4.92 0 01-1.68-1.09 4.92 4.92 0 01-1.09-1.681c-.162-.46-.347-1.26-.402-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.851c.055-1.17.24-1.97.402-2.43a4.92 4.92 0 011.09-1.68 4.92 4.92 0 011.681-1.09c.46-.162 1.26-.347 2.43-.402C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.772.131 4.683.346 3.8.7c-.888.355-1.64.829-2.392 1.581a6.923 6.923 0 00-1.58 2.392C-.346 5.316-.131 6.405-.072 7.685-.013 8.965 0 9.368 0 12s-.013 3.036-.072 4.316c-.059 1.28-.274 2.369-.628 3.252a6.923 6.923 0 00-1.581 2.392c-.355.888-.829 1.64-1.581 2.392a6.923 6.923 0 00-2.392 1.581c-.883.354-1.972.569-3.252.628C.013 23.668 0 24.072 0 24s.013.332.072.612c.059 1.28.274 2.369.628 3.252a6.923 6.923 0 001.581 2.392c.355.888.829 1.64 1.581 2.392a6.923 6.923 0 002.392 1.581c.883.354 1.972.569 3.252.628C8.332 31.987 8.736 32 12 32s3.668-.013 4.948-.072c1.28-.059 2.369-.274 3.252-.628a6.923 6.923 0 002.392-1.581 6.923 6.923 0 001.581-2.392c.354-.883.569-1.972.628-3.252C31.987 15.668 32 15.264 32 12s-.013-3.668-.072-4.948c-.059-1.28-.274-2.369-.628-3.252a6.923 6.923 0 00-1.581-2.392 6.923 6.923 0 00-2.392-1.581c-.883-.354-1.972-.569-3.252-.628C15.668.013 15.264 0 12 0z" />
                  <circle cx="12" cy="12" r="3.6" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://slideshare.net/quizzersanonymous"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-accent-cyan"
              >
                {/* SlideShare Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M464 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 384h-64V128h64v256zm192-192h-64v192h64V192z" />
                </svg>
                <span>SlideShare</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-dark-border mt-6 pt-4 text-center">
          <p className="text-dark-text-secondary text-xs">
            © 2025 Quizzers Anonymous. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
