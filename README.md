# Installation

```
npm install
```

# Recreating the bug

Run:

```
npm test
```

**Expected result**: The test passes and the console logs `componentDidUpdate`

**What actually happens**: The test fails and nothing is logged from lifecycle methods

## Other test scenarios

Open [scripts/Foo.test.jsx](scripts/Foo.test.jsx) and uncomment the other test scenarios. These work as expected. There are two other scenarios:

1. Using `mount` to render the component
2. Using `shallow` to render the component and passing in `lifecycleExperimental: true` as an option (which should be the default according to the docs)