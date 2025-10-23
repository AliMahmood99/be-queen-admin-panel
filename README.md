# BE QUEEN Admin Panel

A comprehensive admin dashboard for managing the BE QUEEN beauty services marketplace platform in Qatar. This React-based application provides complete control over users, providers, services, products, bookings, and advertising campaigns.

![BE QUEEN Admin Panel](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### Core Modules

#### 📊 Dashboard Overview
- Real-time platform metrics and KPIs
- Revenue tracking and analytics
- Active users and provider statistics
- Booking trends visualization
- Top performing providers ranking

#### 👥 User Management
- Comprehensive user database
- Search and filter capabilities
- User status management (Active, Suspended, Banned)
- Detailed user profiles with activity history
- Booking and order tracking per user

#### 🏢 Provider Management
- Manual provider registration and onboarding
- Provider profile management
- Service and product approval workflows
- Financial overview and commission tracking
- Provider performance analytics

#### 💼 Services Management
- Service catalog organization
- Category management
- Service approval and quality control
- Pricing oversight
- Multi-provider service tracking

#### 🛍️ Products Management
- Product catalog oversight
- Category and brand management
- Inventory monitoring
- Product approval workflow
- Sales analytics per product

#### 📅 Bookings Management
- Complete booking oversight
- Real-time booking status tracking
- In-salon and at-home service differentiation
- Customer and provider details
- Payment status monitoring
- Export capabilities (CSV, Excel)

#### 🎯 Premium Advertising Management
- Advertisement review and approval
- Campaign performance tracking
- Active and pending ads management
- Homepage placement control
- Conversion rate analytics
- Mobile preview functionality

#### 🎟️ Coupon Management
- Create and manage discount campaigns
- Set validity periods and usage limits
- Track coupon performance
- Revenue impact analysis

#### 💰 Financial Reports
- Daily, weekly, and monthly revenue analytics
- Commission tracking
- Payment method distribution
- Provider payout management
- Advertising subscription revenue

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AliMahmood99/be-queen-admin-panel.git
cd be-queen-admin-panel
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
VITE_API_BASE_URL=https://api.bequeen.qa
VITE_APP_ENV=development
```

4. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` directory.

## 📁 Project Structure

```
be-queen-admin-panel/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Top header with notifications
│   │   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   │   └── MainLayout.tsx      # Main layout wrapper
│   │   ├── ui/                     # Reusable UI components
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── input.tsx
│   │   └── users/
│   │       └── UserDetailsModal.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx           # Dashboard with KPIs ✅
│   │   ├── UsersManagement.tsx     # User management ✅
│   │   ├── UserDetailsPage.tsx     # User details ✅
│   │   └── DebugEnv.tsx           # Environment debug page ✅
│   ├── api/
│   │   ├── client.ts              # Axios API client
│   │   └── users.service.ts       # User API endpoints
│   ├── hooks/
│   │   └── useUsers.ts            # React Query hooks for users
│   ├── services/
│   │   └── mock/
│   │       └── users.mock.ts      # Mock service implementations
│   ├── stores/
│   │   ├── authStore.ts           # Auth state (Zustand)
│   │   └── uiStore.ts             # UI state (Zustand)
│   ├── data/
│   │   └── mockData.ts            # Mock API data
│   ├── types/
│   │   └── index.ts               # TypeScript types
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── App.tsx                    # Main app with routing
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── public/                         # Static assets
├── docs/                          # Documentation
├── index.html                     # HTML template
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── vercel.json                    # Vercel deployment config
```

## ✨ Features Implemented

### ✅ Completed Features
- **Dashboard Page**: KPI cards, revenue charts, top performers, category distribution
- **Users Management**: Search, filter, CRUD operations, status management, export
- **User Details Page**: Individual profiles with booking and order history
- **Environment Debug Page**: For troubleshooting deployment issues
- **Responsive Design**: Works on all screen sizes
- **Live Navigation**: Fully functional sidebar navigation
- **Mock Data System**: Easy testing without backend dependency

### 🔄 Navigation Routes
All routes are set up and ready:
- `/` - Dashboard ✅
- `/users` - Users Management ✅
- `/users/:id` - User Details ✅
- `/debug-env` - Environment Debug ✅
- `/providers` - Providers Management (planned)
- `/services` - Services Management (planned)
- `/products` - Products Management (planned)
- `/bookings` - Bookings Management (planned)
- `/orders` - Orders Management (planned)
- `/coupons` - Coupons Management (planned)
- `/advertisements` - Advertisements Management (planned)
- `/financial` - Financial Reports (planned)
- `/settings` - Settings (planned)

## 🎨 Tech Stack

### Frontend Framework
- **React 18.x** - UI library with latest features
- **TypeScript 5.x** - Type safety and better developer experience
- **Vite 5.x** - Lightning-fast build tool and dev server

### UI Components & Styling
- **Tailwind CSS 3.x** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Lucide React** - Beautiful, consistent icon library
- **Recharts** - Composable charting library for analytics
- **Class Variance Authority** - Component variant management

### State Management & Data Fetching
- **Zustand** - Lightweight state management
- **TanStack React Query** - Powerful server state management
- **Axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

## 📊 Mock Data

The project uses mock data to simulate API responses during development:

**Mock Data Features:**
- Dashboard statistics (users, providers, bookings, revenue)
- 7-day revenue trends
- Category distribution data
- Top performing providers
- 100 generated users with realistic data
- Configurable via environment variable: `VITE_ENABLE_MOCK_DATA=true`

Mock data is located in:
- `src/data/mockData.ts` - Dashboard mock data
- `src/services/mock/users.mock.ts` - User service mock implementation

## 🔌 API Integration

### Environment Configuration

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8000/api
VITE_ENABLE_MOCK_DATA=true
VITE_ENABLE_DEBUG=true

# App Configuration
VITE_APP_NAME=BE QUEEN Admin Panel
VITE_APP_VERSION=1.0.0
```

### Connecting to Backend

To connect to your Laravel backend:

1. Set `VITE_ENABLE_MOCK_DATA=false` in your `.env` file
2. Configure `VITE_API_BASE_URL` to point to your backend
3. Ensure your backend API endpoints match the service definitions
4. Authentication tokens are stored in localStorage as `auth_token`

The API client automatically:
- Adds authentication tokens to all requests
- Handles errors with toast notifications
- Manages request/response interceptors
- Supports automatic token refresh

## 🔐 Authentication & Authorization

The admin panel implements JWT-based authentication with:

- Login/logout functionality
- Automatic token management
- Protected routes
- Token persistence in localStorage
- Automatic redirect on unauthorized access

**Planned Role-Based Access:**
- **Super Admin** - Full system access
- **Admin** - Standard administrative access
- **Manager** - Limited management capabilities

## 📱 Responsive Design

The admin panel is fully responsive and optimized for:
- **Desktop** (1920px and above)
- **Laptop** (1366px - 1919px)
- **Tablet** (768px - 1365px)
- **Mobile** (below 768px)

Responsive features:
- Collapsible sidebar for mobile
- Adaptive grid layouts
- Touch-friendly controls
- Mobile-optimized tables

## 📈 Performance Optimization

- **Code splitting** - Route-based lazy loading
- **Tree shaking** - Unused code elimination
- **Optimized builds** - Minification and compression
- **Efficient re-renders** - React Query caching
- **Virtual scrolling** - Planned for large lists

## 🚀 Deployment

### Vercel (Recommended)

The project is configured for Vercel deployment:

```bash
vercel --prod
```

Configuration is in `vercel.json`:
- Node.js 22.x runtime
- Automatic environment variables
- SPA routing support

### Other Platforms

**Netlify:**
```bash
netlify deploy --prod
```

**Docker:**
```bash
docker build -t be-queen-admin .
docker run -p 3000:3000 be-queen-admin
```

## 📝 Development Notes

### Current Status
✅ Project setup complete
✅ Dashboard page working
✅ Users management fully functional
✅ User details page implemented
✅ Routing configured
✅ Mock data system ready
✅ Layout components functional
✅ Navigation active
✅ Environment debug page added

### Next Steps
1. Implement remaining pages (Providers, Services, Products, etc.)
2. Complete backend API integration
3. Add authentication flow
4. Implement role-based access control
5. Add form validation with React Hook Form & Zod
6. Add comprehensive error handling
7. Implement automated testing
8. Add loading states and skeleton screens

## 🧪 Testing

Testing infrastructure is planned with:

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run with coverage
npm run test:coverage
```

**Planned Testing Stack:**
- Vitest for unit tests
- React Testing Library for component tests
- Playwright for E2E tests

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure TypeScript types are properly defined

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead** - Ali Mahmood
- **Backend Team** - BE QUEEN Development Team
- **Design Team** - UI/UX Design Team

## 📞 Support

For support and questions:
- Email: admin@bequeen.qa
- Documentation: [docs.bequeen.qa](https://docs.bequeen.qa)
- Issues: [GitHub Issues](https://github.com/AliMahmood99/be-queen-admin-panel/issues)

## 🗺️ Roadmap

### Q1 2025
- [ ] Advanced analytics dashboard
- [ ] Multi-language support (Arabic/English)
- [ ] Email notification system
- [ ] Advanced reporting module

### Q2 2025
- [ ] Mobile app for admin panel
- [ ] AI-powered insights
- [ ] Automated fraud detection
- [ ] Provider self-service portal enhancements

### Q3 2025
- [ ] WhatsApp integration
- [ ] Advanced inventory management
- [ ] Loyalty program management
- [ ] Custom branding options

## 📊 Project Status

- ✅ Core dashboard implementation
- ✅ User management module
- 🚧 Provider management (Planned)
- 🚧 Booking system (Planned)
- 🚧 Product management (Planned)
- 🚧 Advertising management (Planned)
- 🚧 Financial reporting (Planned)
- 🚧 API integration (In Progress)
- ⏳ Testing phase (Upcoming)
- ⏳ Production deployment (Upcoming)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Lucide](https://lucide.dev/) for the icon set
- [Recharts](https://recharts.org/) for data visualization
- [TanStack Query](https://tanstack.com/query) for server state management
- [Zustand](https://zustand-demo.pmnd.rs/) for client state management

## 📄 Documentation

Comprehensive documentation is available in the `/docs` directory:

- [System Requirements Specification](docs/System%20Requirements%20Specification.md)
- [API Documentation](docs/API.md) (Coming soon)
- [User Guide](docs/USER_GUIDE.md) (Coming soon)
- [Developer Guide](docs/DEVELOPER_GUIDE.md) (Coming soon)

---

**Made with ❤️ for the beauty industry in Qatar**

For more information about BE QUEEN platform, visit [bequeen.qa](https://bequeen.qa)
