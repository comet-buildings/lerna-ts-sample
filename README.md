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

# Add jest globally
Clean up can be done [manually](https://github.com/lerna/lerna/issues/1886)
Then to install jest globally, you need to use npm/jest the same way you will install packages on any classic js project:
```
// go to the root folder
npm i -D @types/jest jest ts-jest
``` 

Then to launch jest tests on all repo projects:
```
lerna run test
```