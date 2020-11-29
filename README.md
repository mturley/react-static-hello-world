# react-static-hello-world

A [react-static](https://github.com/react-static/react-static) template app configured just the way [mturley](https://github.com/mturley) likes it.

I started with `react-static create` using the `typescript` option, and then I:

- Removed the example routes to leave only a Hello World homepage (nothing to remove when starting a new site, I can always reference the original)
- Added Prettier and ESLint, and opinionated config files for them.
- Fixed existing Prettier and ESLint issues in the starter code so it matches the new config.
- Added some new package.json scripts:
  - `yarn format` - runs Prettier in write mode
  - `yarn lint` - runs ESLint (which also checks Prettier style)
  - `yarn type-check` - runs tsc to check TypeScript types
  - `yarn ci` - runs both ESLint and tsc, useful as a CI check

# Starting a new site

Copy the contents of this repo and change the name in `package.json` to your new project name.

It is probably a good idea to, in a temporary directory, run `react-static create` and select `typescript`, then compare the results with this repo to see if anything is out of date. Maybe upgrade dependencies to any new versions you see in that package.json.

# Developing

```sh
yarn # Install dependencies
yarn start # Start dev server on port 3000
```

# Building for production

```sh
yarn build # Builds to ./dist/
yarn serve # Test locally (optional)
```
