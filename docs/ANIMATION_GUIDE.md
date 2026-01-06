# Networkly Animation Guide

## Overview
This guide documents all the smooth, interactive animations added to Networkly using Framer Motion. The animations are designed to be subtle, welcoming, and professional while maintaining excellent performance.

---

## 🎨 Animation Library

### Installation
```bash
npm install framer-motion
```

### Core Animation Utilities
Location: `/src/lib/animations.ts`

This file contains reusable animation variants:

- **`fadeInUp`** - Elements fade in while sliding up
- **`fadeIn`** - Simple fade-in effect
- **`scaleOnHover`** - Slight scale increase on hover
- **`liftOnHover`** - Elevate cards with shadow effect
- **`staggerContainer`** - Animate children sequentially
- **`buttonTap`** - Press effect for buttons
- **`slideInLeft/Right`** - Slide animations from sides
- **`handshakeWave`** - Friendly waving animation
- **`pulse`** - Subtle pulsing effect
- **`bounce`** - Gentle bounce animation
- **`pageTransition`** - Smooth page transitions

---

## 🧩 Component Animations

### Button Component
**Location:** `/src/components/Button.tsx`

**Features:**
- Scale up on hover (1.02x)
- Press down effect on click (0.98x)
- Smooth box-shadow transition
- Spring-based animations

**Usage:**
```tsx
<Button variant="primary" size="lg">
  Click Me
</Button>
```

**Animation Details:**
- `whileHover`: Scale + shadow enhancement
- `whileTap`: Slight scale down
- Duration: 0.2s with easeInOut

---

### Card Component
**Location:** `/src/components/Card.tsx`

**Features:**
- Lift effect on hover (moves up 6px)
- Dynamic shadow enhancement
- Smooth transitions
- Optional hover animations

**Usage:**
```tsx
<Card hover>
  {/* Your content */}
</Card>
```

**Animation Details:**
- Hover state: `y: -6`, enhanced shadow
- Transition: 0.3s easeOut
- Disabled by default, enabled with `hover` prop

---

## 🎯 Page-Specific Animations

### Navbar
**Location:** `/src/components/Navbar.tsx`

**Features:**

1. **Logo Cursor-Follow Effect**
   - 3D rotation based on mouse position
   - Smooth spring animation
   - Scale up on hover

2. **Navigation Links**
   - Staggered fade-in on load
   - Sequential appearance (0.1s delay each)

3. **Bell Icon**
   - Gentle ringing animation
   - Repeats every 5 seconds
   - Scale on hover

4. **Mobile Menu**
   - Smooth height animation
   - Fade in/out effect

**Implementation Highlights:**
```tsx
// Cursor follow
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);
const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]));
const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]));
```

---

### Home Page
**Location:** `/src/pages/Home.tsx`

**Features:**

1. **Handshake Welcome Animation**
   - Waving hand icon
   - Continuous loop with delays
   - Friendly greeting effect

2. **Hero Section**
   - Sequential text reveals
   - Staggered appearance (0.3s-0.8s delays)
   - Smooth fade-in with slide

3. **Feature Cards**
   - Grid stagger animation
   - Icons pop in with spring effect
   - Cards lift on hover
   - Viewport-triggered animations

4. **CTA Section**
   - Fade up from bottom
   - Scale on hover
   - Sequential content reveal

**Key Animation Pattern:**
```tsx
<motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item, index) => (
    <motion.div key={index} variants={fadeInUp}>
      {/* Content */}
    </motion.div>
  ))}
</motion.section>
```

---

### Opportunities Page
**Location:** `/src/pages/Opportunities.tsx`

**Features:**

1. **Search Header**
   - Slide down animation
   - Sequential appearance

2. **Opportunity Cards**
   - Staggered grid animation
   - Smooth fade-in for each card
   - Real-time filter updates

3. **Bookmark Animation**
   - Scale bounce when saved
   - Hover scale effect
   - Color transition

**Bookmark Implementation:**
```tsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  <motion.div
    animate={isSaved ? { scale: [1, 1.2, 1] } : {}}
    transition={{ duration: 0.3 }}
  >
    <BookmarkIcon />
  </motion.div>
</motion.button>
```

---

### Profile Page
**Location:** `/src/pages/Profile.tsx`

**Features:**

1. **View/Edit Mode Transitions**
   - Smooth cross-fade between modes
   - Slide animation (left/right)
   - AnimatePresence for exit animations

2. **Profile Avatar**
   - Rotate and scale on hover
   - Spring animation

3. **Profile Sections**
   - Staggered appearance
   - Sequential reveals
   - Smooth badge animations

4. **Edit Mode**
   - Slide in from left
   - Instant response to changes

**Mode Switching:**
```tsx
<AnimatePresence mode="wait">
  {editing ? (
    <motion.div
      key="editing"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      {/* Edit form */}
    </motion.div>
  ) : (
    <motion.div
      key="viewing"
      variants={staggerContainer}
    >
      {/* Profile view */}
    </motion.div>
  )}
</AnimatePresence>
```

---

## 🎭 Animation Best Practices

### Performance Tips

1. **Use CSS Properties**
   - Animate `transform` and `opacity` when possible
   - Avoid animating `width`, `height`, or `top/left`

2. **Layout Animations**
   - Framer Motion handles layout animations efficiently
   - Use `layout` prop for position changes

3. **Viewport Triggers**
   - Use `whileInView` for scroll-triggered animations
   - Set `viewport={{ once: true }}` to prevent re-triggering

4. **Animation Timing**
   - Keep durations under 0.5s for most UI elements
   - Use 0.2-0.3s for interactive elements
   - Longer (0.6s+) for page transitions

### Accessibility

1. **Respect Reduced Motion**
```tsx
import { useReducedMotion } from 'framer-motion';

const shouldReduceMotion = useReducedMotion();
```

2. **Keep Animations Subtle**
   - Small scale changes (1.02x-1.1x)
   - Gentle movements (< 10px)
   - Smooth easing functions

---

## 🚀 Adding New Animations

### Quick Start Template

```tsx
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/animations';

function MyComponent() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      {/* Your content */}
    </motion.div>
  );
}
```

### Custom Animation

```tsx
const customAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

<motion.div variants={customAnimation} />
```

---

## 🎨 Animation Patterns Used

### 1. Stagger Children
Animate a list of items sequentially:
```tsx
<motion.div variants={staggerContainer}>
  {items.map(item => (
    <motion.div variants={fadeInUp}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### 2. Hover Effects
Interactive hover states:
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -4 }}
  whileTap={{ scale: 0.95 }}
/>
```

### 3. Scroll Animations
Trigger on viewport entry:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
/>
```

### 4. Mode Transitions
Smooth transitions between states:
```tsx
<AnimatePresence mode="wait">
  {condition ? <ComponentA /> : <ComponentB />}
</AnimatePresence>
```

---

## 📊 Animation Inventory

| Component | Animation Type | Duration | Trigger |
|-----------|---------------|----------|---------|
| Button | Scale + Shadow | 0.2s | Hover/Tap |
| Card | Lift + Shadow | 0.3s | Hover |
| Navbar Logo | 3D Rotate | Spring | Mouse Move |
| Bell Icon | Wave | 1.5s | Auto (5s delay) |
| Hero Section | Fade + Slide | 0.6s | Mount |
| Feature Cards | Stagger + Pop | 0.5s | Viewport |
| Opportunities | Fade In Up | 0.5s | Mount |
| Profile Avatar | Rotate + Scale | Spring | Hover |
| Bookmarks | Scale Bounce | 0.3s | Click |

---

## 🎯 Key Features

✅ **Smooth & Professional** - All animations use natural easing
✅ **Performant** - GPU-accelerated transforms
✅ **Responsive** - Works on all screen sizes
✅ **Accessible** - Respects user preferences
✅ **Reusable** - Shared animation utilities
✅ **Interactive** - Responds to user input
✅ **Welcoming** - Handshake and friendly effects
✅ **Modern** - Cutting-edge animation library

---

## 🔧 Troubleshooting

### Animation Not Working?

1. **Check import**
   ```tsx
   import { motion } from 'framer-motion';
   ```

2. **Verify variants**
   - Ensure parent has `variants` prop
   - Child components must also use `motion.*`

3. **Initial/Animate states**
   - Both `initial` and `animate` props needed
   - Or use `whileInView` for scroll triggers

### Performance Issues?

1. Use `will-change: transform` sparingly
2. Reduce number of simultaneously animating elements
3. Check for unnecessary re-renders
4. Use `useMemo` for animation variants

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Principles](https://www.framer.com/motion/animation/)
- [Gestures Guide](https://www.framer.com/motion/gestures/)

---

**Created with ❤️ for Networkly**
*Smooth animations that make users feel welcome!* 🤝



