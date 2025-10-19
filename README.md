# BE QUEEN Admin Panel

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

## 📁 Project Structure

```
be-queen-admin-panel/
├── src/
│   ├── components/
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
