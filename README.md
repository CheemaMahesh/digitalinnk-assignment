# DigitalInnk Shopping Cart

A simple grocery shopping cart application built with React, Redux Toolkit and TypeScript. Users can add products to cart and see automatic discounts applied at checkout.
<img width="1918" height="870" alt="image" src="https://github.com/user-attachments/assets/ba377b5f-42c5-40f9-a03b-6dd0803a5439" />
<img width="1918" height="871" alt="image" src="https://github.com/user-attachments/assets/a68ccca6-a219-45a0-a7ba-86292a5c73a5" />
<img width="1918" height="867" alt="image" src="https://github.com/user-attachments/assets/1d720ad3-b538-436c-9b3b-5f7917068ffa" />

**Live Demo:** https://69cbb2c31efd0f321c8cf792--earnest-malabi-50943d.netlify.app/

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
