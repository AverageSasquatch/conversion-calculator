# Tests

This folder contains tests for the Unit Converter website.

## Unit Tests

### Conversion Formula Tests

Run the conversion accuracy tests:

```bash
npx tsx tests/conversions.test.ts
```

Or with ts-node:

```bash
npx ts-node --esm tests/conversions.test.ts
```

## Test Coverage

### Tested Conversions

| Conversion | Test Values |
|------------|-------------|
| Pounds → Kilograms | 0, 1, 2, 10, 100 |
| Ounces → Grams | 0, 1, 16, 0.5 |
| Inches → Centimeters | 0, 1, 12, 36 |
| Feet → Meters | 0, 1, 3, 100 |
| Fahrenheit → Celsius | 32, 212, 0, 98.6, -40 |
| Liters → Milliliters | 0, 1, 0.5, 2.5 |
| Gallons → Liters | 0, 1, 5, 10 |

### Tolerance

All tests use an epsilon of 0.0001 for floating-point comparisons.

## E2E Tests (Future)

For full end-to-end testing with Playwright:

```bash
npm install -D @playwright/test
npx playwright install
npx playwright test
```

## Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] All category cards are clickable
- [ ] All 7 converter pages load
- [ ] Conversion updates in real-time
- [ ] Swap button reverses conversion
- [ ] Mobile responsive layout works
- [ ] Keyboard navigation works
- [ ] Skip to content link works
- [ ] Cookie consent banner appears
