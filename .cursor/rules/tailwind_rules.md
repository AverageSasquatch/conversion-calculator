# Tailwind CSS Rules

## Design System

### Colors (Custom Theme)
```js
// tailwind.config.ts
colors: {
  background: '#FFFFFF',
  foreground: '#333333',
  primary: '#4A90E2',
  secondary: '#7FA99B',
  muted: '#F5F5F5',
}
```

### Usage Guidelines
- Use design system colors: `bg-primary`, `text-foreground`
- Avoid arbitrary color values
- Use opacity modifiers: `bg-primary/80`

## Responsive Design

### Breakpoints
- Mobile first approach
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Pattern
```tsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Mobile: full width, Tablet: half, Desktop: third */}
</div>
```

## Component Styling

### Class Organization
Order classes logically:
1. Layout (flex, grid, position)
2. Sizing (w-, h-, p-, m-)
3. Typography (text-, font-)
4. Colors (bg-, text-, border-)
5. Effects (shadow-, rounded-)
6. States (hover:, focus:)

### Example
```tsx
<button className="
  flex items-center justify-center
  px-4 py-2
  text-sm font-medium
  bg-primary text-white
  rounded-lg shadow-sm
  hover:bg-primary/90 focus:ring-2
">
```

## Accessibility

### Focus States
- Always include visible focus indicators
- Use `focus:ring-2 focus:ring-primary focus:outline-none`

### Contrast
- Ensure WCAG AA contrast ratios
- Test text on all background colors
