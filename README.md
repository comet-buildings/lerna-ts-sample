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