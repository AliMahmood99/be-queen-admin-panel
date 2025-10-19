# BE QUEEN Admin Panel 👑

<div align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  
  <h3>Admin Dashboard for BE QUEEN Beauty Platform</h3>
  <p>A comprehensive beauty services marketplace management system in Qatar 🇶🇦</p>
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Documentation](#documentation)

---

## 🌟 Overview

BE QUEEN Admin Panel is a powerful, modern administrative dashboard designed for managing the BE QUEEN Beauty Platform - Qatar's premier beauty services marketplace. The platform connects customers with beauty service providers including salons, clinics, and at-home services.

### Key Capabilities:
- 📊 Real-time analytics and business intelligence
- 👥 Comprehensive user and provider management
- 📢 Premium advertising campaign management
- 📅 Service booking oversight and tracking
- 🛍️ E-commerce product catalog administration
- 💰 Financial reporting and commission tracking

---

## ✨ Features

### 📊 Dashboard Analytics
- **Real-time KPIs**: Track users, providers, bookings, and revenue
- **Performance Charts**: Visual data representation using Recharts
- **Top Performers**: Monitor highest-performing service providers
- **Pending Actions**: Alert system for items requiring attention

### 👥 User Management
- Complete user account administration
- Search and filter capabilities
- Account status control (Active/Suspended/Banned)
- Detailed user profiles with activity tracking
- Booking and order history per user

### 🏪 Provider Management
- Manual provider registration and onboarding
- Service and product approval workflows
- Premium advertising subscription management
- Financial overview and payout tracking
- Performance metrics per provider

### 📢 Advertising Management
- Review pending promotional campaigns
- Approve/reject advertisement submissions
- Monitor active campaigns with analytics
- Track views, clicks, bookings, and conversion rates
- Preview advertisements before publishing

### 📅 Bookings Management
- Complete booking oversight (in-salon & at-home)
- Real-time status tracking
- Payment verification
- Customer and provider information access
- Export capabilities (CSV/Excel)

### 🛍️ Products Management
- Product catalog administration
- Category management system
- Stock level monitoring
- Sales analytics per product
- Provider product oversight

---

## 📸 Screenshots

### Dashboard
![Dashboard Overview](docs/screenshots/dashboard.png)

### User Management
![User Management](docs/screenshots/users.png)

### Advertising Management
![Advertising](docs/screenshots/advertising.png)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ **React** | UI Framework |
| 🎨 **Tailwind CSS** | Utility-first CSS framework |
| 📊 **Recharts** | Data visualization and charts |
| 🧩 **Shadcn/ui** | Re-usable component library |
| 🎯 **Lucide Icons** | Beautiful icon system |
| 📱 **Responsive Design** | Mobile-first approach |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/be-queen-admin-panel.git

# Navigate to project directory
cd be-queen-admin-panel

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (or your configured port).

### Build for Production

```bash
# Create production build
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
be-queen-admin-panel/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── ui/                 # Shadcn/ui base components
│   │   │   ├── card.tsx
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   └── input.tsx
│   │   └── layout/             # Layout components
│   │       ├── Sidebar.tsx
│   │       └── Header.tsx
│   │
│   ├── pages/                  # Application pages
│   │   ├── Dashboard.tsx
│   │   ├── UsersManagement.tsx
│   │   ├── UserDetails.tsx
│   │   ├── AdvertisingManagement.tsx
│   │   ├── BookingsManagement.tsx
│   │   └── ProductsManagement.tsx
│   │
│   ├── lib/                    # Utility functions
│   │   └── utils.ts
│   │
│   ├── App.tsx                 # Main app component
│   └── main.tsx               # Application entry point
│
├── public/                     # Static assets
├── docs/                       # Documentation
│   ├── SRS.md                 # System Requirements Specification
│   └── screenshots/           # Application screenshots
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 📱 Pages Overview

### 1. 📊 Dashboard
**Route**: `/dashboard`

The main analytics hub displaying:
- Total users, active providers, today's bookings, and revenue
- 7-day revenue trend chart
- Top 5 performing providers with growth metrics
- Bookings distribution by category
- Pending actions alert banner

### 2. 👥 Users Management
**Route**: `/users`

Comprehensive user administration:
- User listing with search functionality
- Filter by status (Active/Suspended/Banned)
- View detailed user profiles
- Track user activity (bookings & orders)
- Manage account status

### 3. 📄 User Details
**Route**: `/users/:id`

Detailed user profile page:
- Complete user information
- Booking history with pagination
- Order history and tracking
- Statistics (total bookings, orders, lifetime value)
- Quick actions for account management

### 4. 📢 Advertising Management
**Route**: `/advertising`

Premium campaign oversight:
- **Pending Tab**: Review submitted advertisements
  - View campaign details and services
  - See promotional pricing and discounts
  - Preview advertisement display
  - Approve or reject with reasons
  
- **Active Tab**: Monitor live campaigns
  - Track performance metrics (views, clicks, bookings)
  - Monitor conversion rates
  - Deactivate campaigns as needed

### 5. 📅 Bookings Management
**Route**: `/bookings`

Service appointment tracking:
- View all bookings across the platform
- Filter by status and service type
- Distinguish between in-salon and at-home services
- Access customer and provider information
- Export data (CSV/Excel)
- Detailed booking view with payment status

### 6. 🛍️ Products Management
**Route**: `/products`

E-commerce administration:
- **Products Tab**: Complete catalog view
  - Search and filter products
  - Monitor stock levels
  - Track sales and revenue per product
  - View provider information
  
- **Categories Tab**: Category management
  - View all product categories
  - Add new categories
  - Edit or delete existing categories
  - Track products and revenue per category

---

## 🎨 Design System

### Color Palette
- **Primary**: Pink/Rose (`#ec4899`)
- **Success**: Emerald (`#10b981`)
- **Warning**: Amber (`#f59e0b`)
- **Danger**: Rose (`#f43f5e`)
- **Info**: Blue (`#3b82f6`)
- **Neutral**: Slate (`#64748b`)

### Components
- Built with **Shadcn/ui** for consistency
- **Lucide Icons** for visual elements
- Responsive design with **Tailwind CSS**
- Custom color schemes per status/type

### Typography
- System font stack via Tailwind
- Hierarchical heading structure
- Consistent spacing and sizing

---

## 📊 Key Features in Detail

### Real-time Analytics
- Dashboard updates with live data
- Revenue tracking (daily/weekly/monthly)
- User growth metrics and trends
- Booking conversion rate monitoring
- Provider performance rankings

### Approval Workflows
- **Services**: Review and approve new services from providers
- **Products**: Quality control for product listings
- **Advertisements**: Moderation of promotional campaigns
- **Quality Assurance**: Maintain platform standards

### Financial Management
- Commission calculation and tracking
- Payment status monitoring (Visa/Cash)
- Revenue breakdown by category
- Provider payout scheduling
- Financial reporting capabilities

### Search & Filtering
- Global search across users, bookings, products
- Advanced filtering options
- Date range selection
- Status-based filtering
- Category filtering

---

## 📚 Documentation

### System Documentation
- **[System Requirements Specification (SRS)](docs/SRS.md)** - Complete system requirements and business logic
- **API Documentation** - Coming soon
- **User Manual** - Coming soon

### Business Context
The BE QUEEN platform operates in Qatar's beauty services market, focusing on:
- Geographic coverage: Doha City
- Service radius: 3km from provider location
- Target market: Women seeking premium beauty services
- Business model: Commission-based marketplace

---

## 🔐 Security & Access

- Admin-only access control
- Role-based permissions (planned)
- Secure authentication flow
- Data protection compliance
- Audit trail logging (planned)

---

## 🚧 Roadmap

### Phase 1 (Current)
- [x] Dashboard analytics
- [x] User management
- [x] Provider management
- [x] Advertising management
- [x] Bookings management
- [x] Products management

### Phase 2 (Planned)
- [ ] Advanced reporting system with custom date ranges
- [ ] Email notification integration
- [ ] SMS notification system
- [ ] Multi-language support (Arabic/English)
- [ ] Export enhancements (PDF reports)

### Phase 3 (Future)
- [ ] Mobile app version
- [ ] Real-time notifications via WebSocket
- [ ] Advanced analytics dashboard
- [ ] AI-powered insights
- [ ] Automated workflows

---

## 🤝 Contributing

This is a private project for BE QUEEN Beauty Platform. For internal contributions, please follow the established coding standards and submit pull requests for review.

---

## 📄 License

**Private Project - All Rights Reserved © 2024 BE QUEEN**

This software is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 📞 Support & Contact

For technical support or inquiries about this project:
- **Email**: developer@bequeen.qa
- **Project Manager**: [Contact Info]
- **Development Team**: [Contact Info]

---

<div align="center">
  <p>Built with ❤️ for BE QUEEN Beauty Platform</p>
  <p>Empowering beauty professionals in Qatar 🇶🇦</p>
</div>
