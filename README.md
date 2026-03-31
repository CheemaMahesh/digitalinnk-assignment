# DigitalInnk Shopping Cart

A simple grocery shopping cart application built with React, Redux Toolkit and TypeScript. Users can add products to cart and see automatic discounts applied at checkout.

## Folder Structure

```
src/
├── assets/
│   └── nav/
├── components/
│   ├── loading/
│   ├── nav/
│   └── not-found/
├── features/
│   ├── cart/
│   │   ├── components/
│   │   │   ├── cart-item.tsx
│   │   │   ├── empty-cart.tsx
│   │   │   └── order-summary.tsx
│   │   └── index.tsx
│   └── home/
│       ├── components/
│       │   └── product-card.tsx
│       └── index.tsx
├── store/
│   ├── cart.ts
│   └── store.ts
├── types/
│   └── index.ts
└── utils/
    ├── data/
    └── functions/
        ├── discounts.ts
        └── index.ts
```

## How to Run

1. Clone the repo

```
git clone https://github.com/CheemaMahesh/digitalinnk-assignment.git
cd digitalinnk-assignment
```

2. Install dependencies

```
npm install
```

3. Start dev server

```
npm run dev
```

4. Open http://localhost:5173 in your browser

## Features

- Add/remove products to cart
- Quantity controls (increment/decrement)
- Real-time cart badge showing item count
- Responsive design (mobile + desktop)
- Lazy loading for better perfomance
- Memoized components to prevent unecessary re-renders
- Clean order summary with itemized breakdown

## Offers and Discounts

The app automatically applys the following special offers:

### 1. Cheese - Buy One Get One Free (BOGOF)

- Original price: 90p per unit
- When you buy 2 cheese, you only pay for 1
- Effectivly 45p per unit when buying in pairs

### 2. Soup & Bread Combo

- Original: Soup (60p) + Bread (£1.10) = £1.70
- When you buy soup, bread becomes half price
- You pay: 60p + 55p = £1.15 (save 55p)

### 3. Butter - Third Off

- Orginal price: £1.20
- 33% discount applied automaticaly
- Final price: 80p per unit

All discounts are shown in the Order Summary section with individual savings displayed.

## Tech Stack

- React 19
- Redux Toolkit
- TypeScript
- Tailwind CSS v4
- Vite
- React Router v7
