# 🎓 EduTech Store - Educational Technology E-Commerce Platform

> **Empowering Education Through Technology**

A modern, full-stack e-commerce platform designed specifically for educational institutions to discover, purchase, and implement cutting-edge technology solutions.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.6.3-blue.svg)

## ✨ Features

### 🛒 **E-Commerce Core**
- **Product Catalog** - Comprehensive hardware & software listings
- **Smart Search** - Advanced filtering and categorization
- **Shopping Cart** - Seamless cart management with quantity controls
- **Secure Checkout** - Stripe-powered payment processing
- **Order Management** - Complete order tracking and history

### 🎯 **Educational Focus**
- **Institution-Specific** - Tailored for schools, colleges & universities
- **Bulk Pricing** - Special rates for educational purchases
- **Category Organization** - Hardware, Software, Services & Training
- **Compliance Ready** - Educational procurement standards

### 🔐 **Authentication & Security**
- **Replit Auth Integration** - Secure user authentication
- **Session Management** - Persistent user sessions
- **Role-Based Access** - Different access levels for users

### 📱 **Modern UI/UX**
- **Responsive Design** - Mobile-first approach
- **Dark/Light Mode** - Theme switching capability
- **Accessibility** - WCAG compliant interface
- **Modern Components** - Radix UI + Tailwind CSS

## 🚀 Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component library
- **Wouter** - Lightweight routing
- **TanStack Query** - Server state management

### **Backend**
- **Express.js** - Node.js web framework
- **TypeScript** - Full-stack type safety
- **PostgreSQL** - Robust relational database
- **Drizzle ORM** - Type-safe database operations
- **Replit Auth** - Authentication service

### **Payment & Services**
- **Stripe** - Payment processing
- **Neon Database** - Serverless PostgreSQL

## 🚀 Live Demo

Experience EduTech Store in action:

- **Vercel**: [https://edutech-store.vercel.app](https://edutech-store.vercel.app)
- **Netlify**: [https://edutech-store.netlify.app](https://edutech-store.netlify.app)

### 🔧 Technology Highlights

- **Frontend**: React 18 with TypeScript for type-safe development
- **Styling**: Tailwind CSS with Radix UI for modern, accessible components
- **State Management**: TanStack Query for efficient server state management
- **Routing**: Wouter for lightweight client-side routing
- **Payments**: Stripe integration for secure transactions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations

## 🎯 About the Project

EduTech Store is a comprehensive e-commerce platform specifically designed for educational institutions to streamline their technology procurement process. Built with modern web technologies, it provides a seamless shopping experience for schools, colleges, and universities looking to purchase educational technology solutions.

### 🌟 Why EduTech Store?

- **Educational Focus**: Unlike generic e-commerce platforms, we understand the unique needs of educational institutions
- **Bulk Pricing**: Special educational discounts and volume pricing for institutional purchases
- **Compliance Ready**: Built to meet educational procurement standards and requirements
- **Modern Technology**: Leverages cutting-edge web technologies for optimal performance and user experience
- **Secure Payments**: Integrated with Stripe for secure and reliable payment processing
- **Indian Market**: Prices in Indian Rupees (₹) to serve the Indian educational sector

## 🏗️ Project Structure

```
EduTech Store/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Base UI components (Radix)
│   │   │   └── examples/  # Example components
│   │   ├── pages/         # Route components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities & configurations
├── server/                # Express backend
│   ├── db.ts             # Database connection
│   ├── routes.ts         # API routes
│   ├── replitAuth.ts     # Authentication logic
│   └── index.ts          # Server entry point
├── shared/               # Shared types & schemas
│   └── schema.ts         # Database & validation schemas
├── vercel.json           # Vercel deployment config
└── README.md
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run vercel-build # Build for Vercel deployment

# Database
npm run db:push      # Push schema changes to database

# Code Quality
npm run check        # TypeScript type checking
```

## 🌟 Key Pages

- **🏠 Home** - Hero section, featured products, categories
- **💻 Software** - Educational software catalog
- **🖥️ Hardware** - Technology hardware listings  
- **🛒 Checkout** - Secure payment processing
- **📚 Training** - Educational training programs
- **🔧 Services** - Installation & support services
- **📞 Contact** - Customer support & information
- **📖 Documentation** - User guides & API docs

## 💰 Currency

All prices are displayed in **Indian Rupees (₹)** to serve the Indian educational market.

## 🎨 Design System

- **Colors** - Primary blue theme with educational focus
- **Typography** - Inter font family for readability
- **Components** - Consistent design language
- **Responsive** - Mobile-first responsive design
- **Accessibility** - WCAG 2.1 AA compliant

## 🚀 Deployment

### Vercel (Recommended)
1. Fork this repository
2. Connect to Vercel
3. Set environment variables
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For utility-first styling
- **Stripe** - For secure payment processing
- **Replit** - For authentication services

## 📞 Support

- **Email**: info@edutechstore.com
- **Documentation**: [View Docs](/documentation)
- **Issues**: [GitHub Issues](https://github.com/prateek1756/BV-Labs/issues)

---

<div align="center">

**Built with ❤️ for Education**

[Live Demo](https://edutech-store.vercel.app) • [Documentation](/documentation) • [Report Bug](https://github.com/prateek1756/BV-Labs/issues)

</div>