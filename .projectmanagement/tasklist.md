# CSS Refactor & Improvement Tasklist for layout25.scss

## 1. Reduce Duplication and Use Variables
- [ ] Replace repeated color values with CSS variables where possible
- [ ] Use variables for media query breakpoints

## 2. Improve Selector Specificity
- [ ] Review and refactor selectors for better specificity
  - [ ] Simplify or standardize theme selectors (e.g., `.layout25-post-link`)
  - [ ] Increase specificity for component styles to avoid conflicts

## 3. Scope CSS to Components
- [ ] Ensure navigation styles are scoped to `.layout25-profile` and children
- [x] Namespace post list styles to avoid conflicts with other lists
- [x] Group and scope theme toggle styles as a component
- [ ] Review and refactor other component styles for isolation

## 4. Address Other Notable Issues
- [ ] Add fallback and font-face for 'Sometype Mono'
- [ ] Reduce excessive selector nesting
- [ ] Simplify overlapping or redundant media queries
- [ ] Standardize BEM-like naming conventions throughout
