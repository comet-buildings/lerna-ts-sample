# Build commands
```
yarn
lerna bootstrap
lerna run tsc
```

# Add a lib to a package
Let's say add express to package app:
```
lerna add express */app
lerna add @types/express */app --dev

```

# Add jest to a package
Let's say we add jest to our common package:
```
lerna add jest ./packages/common  --dev
lerna add ts-jest ./packages/common  --dev
lerna add @types/jest ./packages/common  --dev
```

Then we need a test task in package.json that runs jest