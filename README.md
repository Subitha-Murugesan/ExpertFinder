# ExpertFinder

**ExpertFinder** is a SaaS web application that helps companies discover internal experts based on their work history, communication, and project contributions. It analyzes internal company data to identify expertise and make it searchable across the organization.

## Target Users

- Engineering teams looking for domain experts
- Managers staffing new projects
- HR and talent teams mapping organizational skills
- Any company wanting to unlock hidden internal expertise

## Features

### 1. Dashboard
- Organization-wide KPI overview (total experts, skills tracked, projects, departments)
- Trend indicators showing growth metrics
- Top experts list with expertise scores
- Trending skills across the company with growth percentages

### 2. Expert Search
- Full-text search by name, skill, or role
- Department-based filtering (Platform, AI/ML, Security, Product, Data)
- Real-time result count
- Expert cards showing skills, department, expertise score, and project count

### 3. Employee Skill Profiles
- AI-generated skill profiles with proficiency levels (progress bars)
- Skill source attribution (e.g., "Code commits", "Documentation", "Slack messages")
- Project history with role and timeline
- Activity summary (commits, reviews, documents, messages)
- Profile metadata: location, email, join date, bio

### 4. Project Expert Recommendations
- AI-suggested expert matches for active and upcoming projects
- Match percentage based on skill overlap
- Required skills listed per project
- Project status tracking (Active, Staffing, Planning)
- Direct links to recommended expert profiles

### 5. Admin Integrations
- Connect internal data sources to feed the expertise engine
- Supported integrations:
  - **Slack** — Analyze messages and channels
  - **Confluence** — Parse documentation and wiki pages
  - **GitHub** — Track code contributions and reviews
  - **Jira** — Monitor project activity and tickets
  - **Google Drive** — Index shared documents
  - **Microsoft Teams** — Analyze team communications
- Toggle connections on/off with sync status indicators
- Document count per connected source

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Component library (Radix UI primitives)
- **React Router** — Client-side routing
- **Recharts** — Data visualization
- **Lucide React** — Icon library
- **TanStack React Query** — Data fetching and caching

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── AppLayout.tsx     # Main layout with header and sidebar
│   ├── AppSidebar.tsx    # Collapsible navigation sidebar
│   └── NavLink.tsx       # Active-aware navigation links
├── pages/
│   ├── Dashboard.tsx             # Overview dashboard
│   ├── ExpertSearch.tsx          # Search and filter experts
│   ├── EmployeeProfile.tsx       # Individual skill profiles
│   ├── ProjectRecommendations.tsx # AI project matching
│   ├── AdminIntegrations.tsx     # Data source management
│   └── NotFound.tsx              # 404 page
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── App.tsx               # Root component with routing
├── main.tsx              # Entry point
└── index.css             # Design system tokens and global styles
```

## Getting Started

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project
cd expertfinder

# Install dependencies
npm install

# Start the dev server
npm run dev
```

## Design

Clean, professional SaaS dashboard inspired by **Linear** and **Notion** — featuring a collapsible sidebar, monospace data accents (JetBrains Mono), semantic color tokens, and a neutral palette with blue primary accents.
