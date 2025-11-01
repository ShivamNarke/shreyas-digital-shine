# Update Frontend API Calls to Use Environment Variable

## Overview
Replace all hardcoded backend URLs in the frontend with the environment variable `VITE_API_BASE_URL` from the `.env` file.

## Files to Update
- [x] src/components/AddProductModal.tsx
- [x] src/components/EditProductModal.tsx
- [x] src/pages/Login.tsx
- [x] src/pages/Signup.tsx
- [x] src/pages/ElectricalServices.tsx
- [x] src/pages/ElectronicsServices.tsx
- [x] src/pages/SolarServices.tsx
- [x] src/components/ProductCard.tsx

## Changes Needed
Replace hardcoded URLs like:
```
fetch('https://shreyas-digital-shine-backend.onrender.com/api/...')
```
With:
```
fetch(`${import.meta.env.VITE_API_BASE_URL}/api/...`)
```

## Testing
- [ ] Test locally with .env file
- [ ] Test on deployment (should use production URL)
