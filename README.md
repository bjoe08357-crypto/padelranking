# Indonesia Padel Rankings

A comprehensive web application for managing Indonesian padel player rankings, tournaments, clubs, and more. Built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

## Features

- 🏆 **Player Rankings**: Comprehensive ranking system with configurable algorithms
- 🏟️ **Tournament Management**: Create, manage, and track tournaments
- 🏢 **Club Management**: Directory and management portal for clubs
- 📊 **Analytics**: Charts and statistics for players and regions
- 🔐 **Role-based Access**: Different access levels for players, clubs, and administrators
- 🌐 **Internationalization**: Support for Bahasa Indonesia and English
- 📱 **Responsive Design**: Mobile-first design with modern UI

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Internationalization**: next-intl

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PadelRanking
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the following variables in `.env.local`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/padel_ranking"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Run database migrations
   npm run db:migrate
   
   # Seed the database with sample data
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components (header, footer)
│   └── home/             # Home page components
├── lib/                  # Utility functions and configurations
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Utility functions
└── prisma/               # Database schema and migrations
    ├── schema.prisma     # Prisma schema
    └── seed.ts           # Database seed script
```

## API Endpoints

### Public Endpoints
- `GET /api/stats` - Get platform statistics
- `GET /api/rankings` - Get player rankings with filters
- `GET /api/players/[slug]` - Get player profile
- `GET /api/tournaments` - Get tournaments list
- `GET /api/tournaments/[slug]` - Get tournament details

### Portal Endpoints (Authenticated)
- `POST /api/portal/tournaments` - Create tournament
- `POST /api/portal/results` - Import tournament results
- `POST /api/portal/ranking/config` - Configure ranking algorithm
- `POST /api/portal/ranking/recompute` - Recompute rankings

## Database Schema

The application uses the following main entities:

- **Users**: Authentication and role management
- **Players**: Player profiles and information
- **Clubs**: Club information and management
- **Tournaments**: Tournament details and management
- **MatchResults**: Individual match results
- **Rankings**: Player ranking snapshots
- **RankingConfig**: Configurable ranking algorithm parameters
- **Regions**: Geographic regions for players and clubs
- **NewsPosts**: News and announcements
- **MembershipPlans**: Membership tiers and pricing

## Ranking System

The ranking system is highly configurable and supports:

- **Rolling Window**: Configurable time window for results
- **Decay Functions**: Exponential or step decay over time
- **Level Multipliers**: Different point values for tournament levels
- **Best N Tournaments**: Use only the best N tournament results
- **Elo Rating**: Optional opponent strength consideration
- **Tie-breakers**: Multiple tie-breaking criteria

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:seed` - Seed database with sample data
- `npm run db:migrate` - Run database migrations
- `npm run db:generate` - Generate Prisma client
- `npm run db:studio` - Open Prisma Studio

### Database Management

```bash
# Create a new migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset

# View database in Prisma Studio
npm run db:studio
```

## Deployment

The application is designed to be deployed on Vercel with minimal configuration:

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

For other platforms, ensure you have:
- PostgreSQL database
- Environment variables configured
- Node.js 18+ runtime

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Email: support@padelranking.id
- Phone: +62 21 1234 5678

## Acknowledgments

- Built for the Indonesian Padel community
- Inspired by international padel ranking systems
- Designed with modern web development best practices