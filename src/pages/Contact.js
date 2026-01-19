import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-8">
      {/* Global grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Contact Us</h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Have questions about our quiz competitions? Want to collaborate or
            join our team? We'd love to hear from you. Get in touch using any of
            the methods below.
          </p>
        </div>

        <div className="border-t border-white/10 my-6"></div>

        {/* Contact Information Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Details */}
            <div className="space-y-8">
              {/* Club Room Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-dark-text-secondary mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-text mb-2">
                    Club Room Location
                  </h3>
                  <p className="text-dark-text-secondary">
                    Room No. 11, Third Floor, CEG Square
                  </p>
                  <p className="text-dark-text-secondary">
                    College of Engineering Guindy
                  </p>
                  <p className="text-dark-text-secondary">
                    Anna University, Chennai - 600025
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-dark-text-secondary mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-text mb-2">Email</h3>
                  <a
                    href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x67;&#x6f;&#x6f;&#x67;&#x6c;&#x65;&#x2e;&#x63;&#x6f;&#x6d;&#x2f;&#x6d;&#x61;&#x69;&#x6c;&#x2f;&#x3f;&#x76;&#x69;&#x65;&#x77;&#x3d;&#x63;&#x6d;&#x26;&#x74;&#x6f;&#x3d;&#x71;&#x75;&#x69;&#x7a;&#x7a;&#x65;&#x72;&#x73;&#x61;&#x6e;&#x6f;&#x6e;&#x79;&#x6d;&#x6f;&#x75;&#x73;&#x63;&#x65;&#x67;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;"
                    className="text-accent-blue hover:text-blue-400 transition-colors"
                  >
                    quizzersanonymousceg@gmail.com
                  </a>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-dark-text-secondary mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-text mb-2">
                    Contact Numbers
                  </h3>
                  <div className="space-y-1">
                    <div>
                      <span className="text-dark-text-secondary">
                        Jaison Jecinth Vincent (President):{" "}
                      </span>
                      <a
                        href="tel:+919025601119"
                        className="text-accent-blue hover:text-blue-400 transition-colors"
                      >
                        +91 90256 01119
                      </a>
                    </div>
                    <div>
                      <span className="text-dark-text-secondary">
                        Visvam Srinivasan (Vice President):{" "}
                      </span>
                      <a
                        href="tel:+916385050355"
                        className="text-accent-blue hover:text-blue-400 transition-colors"
                      >
                        +91 63850 50355
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-dark-text-secondary mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-text mb-2">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="https://instagram.com/quizzersanonymous"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://slideshare.net/quizzersanonymous"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      SlideShare
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Google Map Embed */}
            <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden border border-dark-border">
              <iframe
                title="CEG Square Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.044763878229!2d80.23635566960469!3d13.010738899206785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526700035eebd9%3A0x7984c41bf20d3100!2sCEG%20Square!5e1!3m2!1sen!2sin!4v1758214888628!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 my-6"></div>
        {/* Reach Out Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Enquiry and Suggestions",
              text: "Have something to let us know or do you want to know something about us? Click the button below!",
              link: "https://forms.gle/X2cA1tWy9Fgroknr7",
              iconBg: "bg-accent-green",
              shadowColor: "shadow-accent-green/30",
            },
            {
              title: "Alumni",
              text: "Were you part of the QA Fam during your college days? We would love to get in touch with you!",
              link: "https://forms.gle/dGmWYF13DzBW38mN7",
              iconBg: "bg-accent-blue",
              shadowColor: "shadow-accent-blue/30",
            },
            {
              title: "Something Fun",
              text: "Are you bored? Click here to watch something interesting and fun!",
              link: "https://youtu.be/xvFZjo5PgG0?si=T1aNYOUiu4Dxgw0Y",
              iconBg: "bg-accent-yellow",
              shadowColor: "shadow-accent-yellow/30",
            },
          ].map((card, idx) => (
            <a
              key={card.title}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg 
                        hover:bg-white/20 ${card.shadowColor} transition-all duration-300 transform hover:-translate-y-2 text-white`}
            >
              <div
                className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center mb-4`}
              >
                {card.title === "Enquiry and Suggestions" && (
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                )}
                {card.title === "Alumni" && (
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
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                )}
                {card.title === "Something Fun" && (
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300 mb-4">{card.text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
