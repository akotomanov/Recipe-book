## **Product Requirements Document — “My Recipes”**

### **1. Overview**

A responsive web application for discovering, filtering, and saving recipes. Built with React. Initial focus: browse + favorite recipes using external API data.

---

### **2. Goals**

- Fast recipe discovery (search + filters)
- Clean, scannable UI (card-based)
- Persisted favorites
- Solid design system foundation for scaling

**Non-goals (v1):**

- Creating/editing recipes
- Social features
- Meal planning

---

### **3. Target Platforms**

- Mobile (primary)
    
- Desktop (secondary)
    
- Responsive breakpoints (e.g. 360, 768, 1280+)
    

---

### **4. Core Features**

  

#### **4.1 Home (Start Page)**

**Components:**

- Search input (debounced)
- Filter chips:
    
    - Meat, Fish, Chicken, Vegetarian, Lactose-free, etc.
        
    
- Recipe list (infinite scroll or pagination)
    

  

**Recipe Card:**

- Image
    
- Title
    
- Cooking time
    
- Difficulty (e.g. Easy / Medium / Hard)
    
- Short description
    
- “Add to favorites” button (toggle state)
    

---

#### **4.2 Favorites**

- List of saved recipes
    
- Same card UI
    
- Remove from favorites
    
- Empty state
    

---

#### **4.3 Account (basic placeholder)**

- Minimal (v1)
    
- Optional: local-only profile state
    

---

#### **4.4 Navigation**

- Bottom nav (mobile): Home / Favorites / Account
    
- Top nav (desktop equivalent)
    

---

### **5. Data Layer**

  

#### **5.1 External API (candidates)**

Evaluate:

- Spoonacular API
    
- TheMealDB
    
- Edamam
    

  

**Selection criteria:**

- Free tier limits
    
- Filtering support (diet, category)
    
- Image availability
    
- Response latency
    
- Licensing constraints
    

---

#### **5.2 Data Model (normalized)**

```
Recipe:
- id
- title
- image
- cookingTime
- difficulty (derived if needed)
- description
- categories[]
- isFavorite (local state)
```

---

### **6. Design System (Phase 1)**

  

#### **6.1 Foundations**

- Color tokens
    
- Typography scale
    
- Spacing system (4px or 8px grid)
    
- Breakpoints
    

  

#### **6.2 Components**

- Buttons (primary, secondary, icon)
    
- Input (search)
    
- Chips (filter states)
    
- Cards (recipe)
    
- Navigation (bottom + top)
    
- Icons
    

  

#### **6.3 Source**

- Figma (to be provided)
    

---

### **7. UX Requirements**

- Fast perceived performance (<200ms interactions)
    
- Skeleton loading for cards
    
- Clear selected state for filters
    
- Optimistic UI for favorites
    
- Accessible (ARIA roles, contrast)
    

---

### **8. State Management**

- Server state: React Query / TanStack Query
    
- Client state: lightweight (Zustand or Context)
    
- Favorites:
    
    - v1: localStorage
        
    - future: backend sync
        
    

---

### **9. Technical Stack**

- React (Vite or Next.js)
    
- TypeScript
    
- Styling:
    
    - Option A: CSS Modules
        
    - Option B: Tailwind (faster iteration)
        
    
- API layer abstraction
    

---

### **10. Performance**

- Lazy loading images
    
- Virtualized lists (if large datasets)
    
- Debounced search (300–500ms)
    

---

### **11. Analytics (optional v1.1)**

- Search queries
    
- Most favorited recipes
    

---

### **12. Risks**

- API limitations / rate limits
    
- Inconsistent data (missing fields)
    
- Difficulty classification not provided → must derive
    

---

### **13. Milestones**

  

**Phase 1 — Design System**

- Tokens + core components
    
- Figma alignment
    

  

**Phase 2 — MVP**

- Home page
    
- API integration
    
- Favorites (local)
    

  

**Phase 3 — Polish**

- Performance
    
- Accessibility
    
- Edge cases
    

---

### **14. Open Questions**

- Which API to choose?
    
- Do we need authentication early?
    
- Should favorites sync across devices?
    
- Pagination vs infinite scroll?
    

---

If you want, I can:

- help you pick the best API (based on Sweden/EU constraints),
    
- or convert this into a Claude Code-ready task breakdown (very useful for execution).