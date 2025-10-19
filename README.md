# BE QUEEN Admin Panel

<<<<<<< HEAD
## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

=======
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

>>>>>>> 96851f035157bc9c14ef5e1c0b84703032912723
## 📁 Project Structure

```
be-queen-admin-panel/
├── src/
│   ├── components/
<<<<<<< HEAD
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Top header with notifications
│   │   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   │   └── MainLayout.tsx      # Main layout wrapper
│   │   └── ui/                     # Reusable UI components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── input.tsx
│   ├── pages/
│   │   └── Dashboard.tsx           # Dashboard page ✅
│   ├── data/
│   │   └── mockData.ts            # Mock API data
│   ├── types/
│   │   └── index.ts               # TypeScript types
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── App.tsx                    # Main app with routing
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html                      # HTML template
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## ✨ Features Implemented

### ✅ Dashboard (Home Page)
- **KPI Cards**: Total Users, Active Providers, Today's Bookings, Today's Revenue
- **Revenue Chart**: 7-day revenue trend with interactive tooltips
- **Top Performers**: Top 5 providers ranked by revenue
- **Category Distribution**: Bar chart showing bookings by service category
- **Responsive Design**: Works on all screen sizes
- **Live Navigation**: Fully functional sidebar navigation

### 🔄 Navigation
All routes are set up and ready:
- `/` - Dashboard ✅
- `/users` - Users Management (placeholder)
- `/providers` - Providers Management (placeholder)
- `/services` - Services Management (placeholder)
- `/products` - Products Management (placeholder)
- `/bookings` - Bookings Management (placeholder)
- `/orders` - Orders Management (placeholder)
- `/coupons` - Coupons Management (placeholder)
- `/advertisements` - Advertisements Management (placeholder)
- `/financial` - Financial Reports (placeholder)
- `/settings` - Settings (placeholder)

## 🎨 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router v6** - Routing
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Recharts** - Charts and graphs
- **Lucide React** - Icons

## 📊 Mock Data

The project uses mock data located in `src/data/mockData.ts` to simulate API responses:
- Dashboard statistics
- Revenue data (7 days)
- Category data
- Top providers
- Users list
- Providers list
- Bookings
- Advertisements

## 🔌 API Integration (Next Steps)

To connect to your Laravel backend:

1. Create an API service in `src/services/api.ts`
2. Replace mock data with real API calls
3. Add authentication and token management
4. Implement error handling and loading states

## 📝 Development Notes

### Current Status
✅ Project setup complete
✅ Dashboard page working
✅ Routing configured
✅ Mock data ready
✅ Layout components functional
✅ Navigation active

### Next Steps
1. Create remaining pages (Users, Providers, etc.)
2. Connect to Laravel API
3. Add authentication
4. Implement CRUD operations
5. Add form validation
6. Add loading states and error handling

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Private project for BE QUEEN platform.
=======
│   │   ├── ui/              # Reusable UI components
│   │   ├── layout/          # Layout components
│   │   └── shared/          # Shared components
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── UsersManagement.tsx
│   │   ├── UserDetails.tsx
│   │   ├── BookingsManagement.tsx
│   │   ├── ProductsManagement.tsx
│   │   └── AdvertisingManagement.tsx
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API services
│   ├── utils/               # Utility functions
│   ├── types/               # TypeScript types
│   ├── styles/              # Global styles
│   ├── App.tsx
│   └── main.tsx
├── public/                  # Static assets
├── docs/                    # Documentation
│   └── System Requirements Specification.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Tech Stack

### Frontend Framework
- **React 18.x** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### UI Components & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library
- **Recharts** - Chart library for analytics

### Key Libraries
- **React Router** - Navigation and routing
- **React Query** - Data fetching and caching
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 🔑 Key Features Breakdown

### User Management
- Advanced search with multiple filters
- Bulk actions support
- User activity timeline
- Comprehensive booking and order history
- Account status control with reasons

### Provider Advertising System
- Subscription-based advertising model
- Admin approval workflow
- Performance metrics tracking
- Mobile-optimized preview
- Campaign scheduling
- Homepage placement management

### Booking Operations
- Multi-status tracking (Upcoming, Confirmed, Completed, Canceled)
- Service type differentiation (In-salon vs At-home)
- Payment method tracking
- Customer communication tools
- Export and reporting capabilities

### Analytics Dashboard
- Revenue trends visualization
- Category performance breakdown
- Top provider rankings
- Real-time statistics
- Growth metrics and KPIs

## 🔐 Authentication & Authorization

The admin panel implements role-based access control:

- **Super Admin** - Full system access
- **Admin** - Standard administrative access
- **Manager** - Limited management capabilities

Authentication is handled via JWT tokens with automatic refresh.

## 📱 Responsive Design

The admin panel is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1366px - 1919px)
- Tablet (768px - 1365px)
- Mobile (below 768px)

## 🌐 API Integration

The admin panel connects to the BE QUEEN backend API. All API endpoints are documented in the System Requirements Specification.

### Environment Configuration

```env
# API Configuration
VITE_API_BASE_URL=https://api.bequeen.qa
VITE_API_TIMEOUT=30000

# App Configuration
VITE_APP_ENV=production
VITE_APP_NAME=BE QUEEN Admin Panel
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run with coverage
npm run test:coverage
```

## 📈 Performance Optimization

- Code splitting and lazy loading
- Image optimization
- Bundle size optimization
- Caching strategies
- Virtual scrolling for large lists

## 🚀 Deployment

### Build

```bash
npm run build
```

### Deploy to Vercel

```bash
vercel --prod
```

### Deploy to Netlify

```bash
netlify deploy --prod
```

### Docker Deployment

```bash
docker build -t be-queen-admin .
docker run -p 3000:3000 be-queen-admin
```

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

## 📝 License

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
- ✅ Provider management
- ✅ Booking system
- ✅ Product management
- ✅ Advertising management
- 🚧 Financial reporting (In Progress)
- 🚧 API integration (In Progress)
- ⏳ Testing phase (Upcoming)
- ⏳ Production deployment (Upcoming)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Lucide](https://lucide.dev/) for the icon set
- [Recharts](https://recharts.org/) for data visualization

## 📄 Documentation

Comprehensive documentation is available in the `/docs` directory:

- [System Requirements Specification](docs/System%20Requirements%20Specification.md)
- [API Documentation](docs/API.md) (Coming soon)
- [User Guide](docs/USER_GUIDE.md) (Coming soon)
- [Developer Guide](docs/DEVELOPER_GUIDE.md) (Coming soon)

---

**Made with ❤️ for the beauty industry in Qatar**

For more information about BE QUEEN platform, visit [bequeen.qa](https://bequeen.qa)
>>>>>>> 96851f035157bc9c14ef5e1c0b84703032912723
