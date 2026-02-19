# QA-Website - Quizzers Anonymous

The official website for Quizzers Anonymous, College of Engineering Guindy's premier quiz club. A modern React-based platform showcasing our events, team, articles, quiz sets, and gallery.

## Content Management Tutorial

For detailed instructions on how to add new content (events, articles, gallery images, quiz sets), please refer to our [Content Management Tutorial](CONTENT_MANAGEMENT.md).

## Features

- **Event Management**: Display upcoming and completed quiz events with details (events may include an optional Drive `drivelink` for reports; Event cards show an "Report" button when present)
- **Team Showcase**: Meet our current team members and alumni network
- **Articles Section**: Knowledge sharing through informative articles and videos
- **Quiz Sets**: Access our curated quiz question sets
- **Interactive Gallery**: Browse photos from our events and activities
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, dark-themed interface with smooth animations
- **Contact Integration**: Multiple ways to get in touch with the club

## Technologies Used

- **React 18** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing for single-page application
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Social Media Embed** - Instagram post embedding
- **Vercel Speed Insights** - Performance monitoring
- **React Testing Library** - Component testing framework

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aravindhan-KS/QA-Website.git
   cd QA-Website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   For a clean, reproducible install that matches the exact versions in `package-lock.json`:

   ```bash
   npm ci
   ```

3. Start the development server (frontend-only):

   ```bash
   npm start
   ```

   To exercise the protected team photo APIs locally, run Vercel's unified dev server instead:

   ```bash
   npx vercel dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

   > **Tip:** The `/api` routes (team roster + photo proxy) only exist when served through Vercel (`vercel dev` locally or the deployed site). When using `npm start` you can point the React app to a remote API by setting `REACT_APP_TEAM_API_BASE`.

## Protected Team Photos

Team member headshots now live in a private Vercel Blob bucket. They are never referenced directly inside the React bundle—instead we proxy them through signed `/api` endpoints to reduce scraping while keeping the gallery public.

### Required Environment Variables

Configure the following variables (via `.env.local` or `vercel env`):

```
TEAM_IMAGE_SIGNING_SECRET=generate-a-long-random-string
TEAM_IMAGE_BLOB_BASE_URL=https://<your-private-account>.blob.vercel-storage.com
# Optional helpers
TEAM_IMAGE_BLOB_READ_TOKEN=vercel_blob_rw_...
TEAM_IMAGE_REFERER=qa-website.vercel.app
TEAM_IMAGE_URL_TTL_SECONDS=300
REACT_APP_TEAM_API_BASE=https://qa-website.vercel.app   # only needed if you run npm start locally
```

- `TEAM_IMAGE_SIGNING_SECRET` powers the HMAC signature attached to every photo request.
- `TEAM_IMAGE_BLOB_BASE_URL` points at the bucket/web path that stores the actual files.
- `TEAM_IMAGE_BLOB_READ_TOKEN` lets the proxy access private blobs; omit it if the bucket is world-readable.
- `TEAM_IMAGE_REFERER` (optional) enforces a referer check to block obvious hotlinking.
- `TEAM_IMAGE_URL_TTL_SECONDS` controls how long the signed URLs stay valid (default 5 minutes).
- `REACT_APP_TEAM_API_BASE` is only required when the React build must talk to an already deployed API (e.g., running `npm start` without `vercel dev`).

### Runtime Flow

1. `/api/team` reads `src/data/team.json`, strips the raw blob keys, and returns short-lived signed URLs for each member photo.
2. The browser requests `/api/team-photo?...signature=...` for every headshot. The proxy validates the signature, checks optional referer headers, then streams the blob bytes.
3. CDN caching (`Cache-Control` + `s-maxage`) keeps traffic within the current Vercel plan limits (10k simple ops / 2k advanced ops / 10 GB transfer).

#### Rate Limiting

There is **no** server-side rate limiting applied yet. If scraping becomes an issue, wrap the two API handlers with middleware such as Vercel Edge Config + Upstash Redis or a simple in-memory limiter via `@upstash/ratelimit` / `lru-cache`, then document the chosen limits here.

## Website Structure

### Main Pages

- **Home**: Welcome page with club introduction and highlights
- **Events**: Showcase of upcoming and past quiz events
- **Team**: Current team members with roles and contact information
- **Articles**: Educational content and quiz-related articles
- **Quiz Sets**: Collection of downloadable quiz question sets
- **Gallery**: Photo gallery from events and activities
- **Contact**: Multiple ways to reach the club with embedded map

### Key Components

- **Navbar**: Responsive navigation with dark theme
- **EventCard**: Individual event display with status indicators
- **MemberCard**: Team member profiles with photos and details
- **GalleryImage**: Interactive image viewer with modal
- **Footer**: Social media links and contact information

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Project Structure

```
src/
├── components/         # Reusable React components
├── data/               # JSON data files
│   ├── events.json     # Event data
│   ├── quizSets.json   # Quiz sets data
│   └── galleryImages.json # Gallery images data
├── pages/              # Main page components
├── utils/              # Utility functions
└── App.js              # Main application component
```

Built with ♥️ by Quizzers Anonymous Team