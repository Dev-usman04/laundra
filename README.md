# Laundra - Premium Laundry Service Booking System

A modern React-based laundry service booking application that provides a seamless experience for customers to schedule their laundry services.

## Features

- **Multi-step Booking Process**
  - Service Selection
  - Schedule Pickup & Delivery
  - Pricing Calculator
  - Order Confirmation

- **Service Options**
  - Wash & Fold ($3.50/kg)
  - Dry Clean ($8.00/item)
  - Ironing ($2.50/kg)

- **User Experience**
  - Intuitive progress tracking
  - Animated transitions between steps
  - Responsive design
  - Interactive time slot selection
  - Dynamic pricing calculation

## Technical Stack

- **Frontend Framework**: React
- **Styling**: TailwindCSS with custom animations
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── steps/          # Booking step components
│   └── ...            # Common components
├── data/              # Static data and configurations
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
└── assets/           # Static assets
```

## How It Works

1. **Service Selection**
   - Users choose from three service types
   - Each service has its own pricing model
   - Interactive cards with visual feedback

2. **Scheduling**
   - Date selection for pickup and delivery
   - Predefined time slots
   - Validation for minimum delivery dates
   - Visual time slot selection

3. **Pricing**
   - Dynamic calculation based on service type
   - Weight-based pricing for Wash & Fold and Ironing
   - Per-item pricing for Dry Clean
   - Real-time total calculation

4. **Confirmation**
   - Order summary display
   - Total cost breakdown
   - Booking confirmation
   - Option to start new booking

## Setup and Development

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Key Features

- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **State Management**: Custom React hooks for centralized state management
- **Form Validation**: Built-in validation for dates and required fields
- **Animations**: Smooth transitions and micro-interactions
- **Modular Architecture**: Component-based structure for easy maintenance