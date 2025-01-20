## Unqualified Advice Podcast

This is the repository for the Unqualified Advice Podcast website.

##Tech Stack:

- Next.js 14
- Tailwind CSS
- Shadcn UI
- Lucide Icons
- TypeScript
- Cloudflare Pages

## Features:

- Landing page promoting the show, it's hosts, and a link to the podcast
- About page with a description of the show and the hosts
- Show transcripts page with a list of all the show's transcripts
    - Each transcript page will have a series of links to the podcast episodes on different platforms
    - Each transcript page will have the cover art for the episode
    - Each transcript page will have the title and date of the episode
    - Each transcript page will have an episode player
    - Each transcript page will have the description, shownotes, and transcript of the episode
- Newsletter signup form
- Footer with social media links and a link to the podcast

### Initial Setup
- [x] Initialize Next.js 14 project with TypeScript
- [x] Set up Tailwind CSS configuration
- [x] Install and configure Shadcn UI
- [x] Set up project folder structure
- [ ] Configure Cloudflare Pages deployment

### Component Architecture
- [x] Create reusable layout components
  - [x] Header/Navigation
  - [x] Footer
  - [ ] Episode Player
  - [ ] Newsletter Form
- [ ] Set up shared UI components

### Content Structure
- [ ] Define data schema for:
  - Episode metadata
  - Transcripts
  - Host information
  - Show information
- [ ] Choose content management approach:
  - Local MDX files
  - Headless CMS
  - Custom API

  ### Core Pages
- [ ] Landing Page
  - Show promotion section
  - Host highlights
  - Featured episodes
  - Platform links

- [ ] About Page
  - Show description
  - Host bios
  - Media kit (optional)

- [ ] Transcripts List Page
  - Episode grid/list view
  - Search functionality
  - Filtering options

- [ ] Individual Transcript Pages
  - Episode player integration
  - Platform links
  - Cover art display
  - Transcript content
  - Show notes section

  ### Interactive Elements
- [ ] Newsletter integration
  - Form validation
  - Email service provider integration
  - Success/error handling

- [ ] Audio Player
  - Custom controls
  - Progress tracking
  - Mobile optimization

- [ ] Social Media Integration
  - Share buttons
  - Platform links

  ### Final Steps
- [ ] SEO optimization
  - Meta tags
  - Open Graph data
  - Sitemap
  - robots.txt

- [ ] Performance optimization
  - Image optimization
  - Lazy loading
  - Caching strategy

- [ ] Accessibility
  - ARIA labels
  - Keyboard navigation
  - Screen reader compatibility

- [ ] Testing
  - Cross-browser testing
  - Mobile responsiveness
  - Performance testing