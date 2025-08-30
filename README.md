# NamasteReact - Restaurant Discovery App 🍽️

A modern React-based restaurant discovery application built as part of the Namaste React course by Akshay Saini. This project demonstrates advanced React concepts, custom hooks, routing, and modern web development practices.

## 🚀 Live Demo

A fully functional restaurant discovery platform where users can browse restaurants, search by name, filter by ratings, and view detailed restaurant information.

## ✨ Features

### 🔐 User Authentication
- **Login System**: Form-based authentication with validation using Formik
- **Input Validation**: Real-time validation for first name, last name, and email
- **Navigation**: Seamless redirect to home page after successful login

### 🏠 Restaurant Discovery
- **Restaurant Listing**: Dynamic display of restaurants with real-time data
- **Search Functionality**: Search restaurants by name with instant filtering
- **Rating Filter**: Filter restaurants by rating (4.2+ stars)
- **Restaurant Cards**: Beautiful cards showing restaurant image, name, cuisines, rating, cost, and delivery time

### 🧭 Navigation & Routing
- **React Router**: Complete SPA navigation with React Router DOM v6
- **Dynamic Routes**: Individual restaurant pages with unique URLs
- **Error Handling**: Custom 404 error page with elegant design

### 📱 Responsive Design
- **Mobile-First**: Fully responsive design that works on all devices
- **Modern UI**: Gradient backgrounds, hover effects, and smooth animations
- **Loading States**: Beautiful loading spinners and shimmer effects

### 🌐 Network Awareness
- **Online Status**: Real-time network status detection
- **Offline Handling**: Graceful offline experience with user notifications

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1**: Latest React with hooks and modern features
- **React Router DOM 6.22.0**: Client-side routing
- **Formik 2.4.6**: Form handling and validation

### Build Tools
- **Parcel 2.12.0**: Zero-configuration build tool
- **Babel**: JavaScript transpilation
- **PostCSS**: CSS processing

### Development
- **ES6+ JavaScript**: Modern JavaScript features
- **CSS3**: Advanced styling with animations and gradients
- **Font Awesome**: Icon library for enhanced UI

## 📁 Project Structure

```
NamasteReact/
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation header with logo and menu
│   │   ├── Login.js           # Login form with validation
│   │   ├── Body.js            # Main restaurant listing page
│   │   ├── RestaurantCard.js  # Individual restaurant card component
│   │   ├── RestaurantMenu.js  # Restaurant detail page
│   │   ├── About.js           # About page with class components
│   │   ├── Contact.js         # Contact form page
│   │   ├── Error.js           # 404 error page
│   │   ├── UserClass.js       # Class-based user component
│   │   └── ShimmerUI.js       # Loading skeleton components
│   ├── utils/
│   │   ├── constants.js       # API URLs and configuration
│   │   ├── useOnlineStatus.js # Network status hook
│   │   ├── useRestaurantCard.js    # Restaurant data fetching hook
│   │   ├── useFilteredRestaurant.js # Search and filter logic hook
│   │   └── useRestaurantMenu.js    # Individual restaurant data hook
│   └── App.js                 # Main application component
├── index.html                 # HTML template
├── index.css                  # Global styles
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🎯 Key Components

### Custom Hooks
- **`useOnlineStatus`**: Monitors network connectivity
- **`useRestaurantCard`**: Fetches and manages restaurant data
- **`useFilteredRestaurant`**: Handles search and filtering logic
- **`useRestaurantMenu`**: Fetches individual restaurant details

### Core Components
- **`Header`**: Responsive navigation with login/logout functionality
- **`Body`**: Main restaurant listing with search and filter capabilities
- **`RestaurantCard`**: Reusable card component for restaurant display
- **`Login`**: Form component with comprehensive validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Soumik29/NamasteReact.git
   cd NamasteReact
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:1234`

### Build for Production
```bash
npm run build
```

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds**: Modern gradient color schemes
- **Hover Effects**: Interactive hover animations on cards and buttons
- **Loading States**: Smooth loading animations and skeleton screens
- **Responsive Grid**: CSS Grid layout for restaurant cards

### User Experience
- **Instant Search**: Real-time search with no page refresh
- **Filter Options**: Quick access to top-rated restaurants
- **Smooth Navigation**: Seamless page transitions
- **Error Boundaries**: Graceful error handling

## 🔧 Configuration

### API Integration
The app uses a mock API for restaurant data:
- **Restaurant List**: Fetched from external JSON source
- **Restaurant Details**: Individual restaurant information
- **Image CDN**: Swiggy's CDN for restaurant images

### Environment Setup
- **Parcel Configuration**: Zero-config setup with automatic optimization
- **Browser Support**: Modern browsers with ES6+ support
- **Development Tools**: Hot reload and source maps

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

### Mobile Features
- **Touch-Friendly**: Optimized for touch interactions
- **Flexible Layout**: Adapts to different screen sizes
- **Performance**: Optimized for mobile networks

## 🧪 Learning Concepts Demonstrated

### React Fundamentals
- **Functional Components**: Modern React component patterns
- **Hooks**: useState, useEffect, and custom hooks
- **Props & State**: Data flow and state management
- **Event Handling**: User interaction management

### Advanced React
- **Custom Hooks**: Reusable logic extraction
- **React Router**: SPA navigation and routing
- **Form Handling**: Formik integration for complex forms
- **Error Boundaries**: Error handling and recovery

### Modern JavaScript
- **ES6+ Features**: Arrow functions, destructuring, modules
- **Async/Await**: Modern asynchronous programming
- **Array Methods**: map, filter, and other functional programming concepts

## 👨‍💻 Author

**Soumik Mitra**
- GitHub: [@Soumik29](https://github.com/Soumik29)
- Email: soumikdeb2@gmail.com
- University: University of South Carolina Aiken
- Degree: Master's in Computer Science

## 📚 Course Information

This project is part of the **Namaste React** course by **Akshay Saini**, covering:
- React fundamentals and advanced concepts
- Modern JavaScript and ES6+ features
- Build tools and development workflow
- Best practices in React development

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Akshay Saini** for the comprehensive Namaste React course
- **Swiggy** for the restaurant data and image CDN
- **React Team** for the amazing framework
- **Open Source Community** for the tools and libraries used

---

**Happy Coding! 🚀**
