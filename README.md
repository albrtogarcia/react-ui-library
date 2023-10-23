# IAGT UI Core Library

Collection of react UI components for IAGT projects.

## Installation

To install this project, you'll need to have Node.js and npm installed. Once you have those, you can run:

```bash
cd service-core
npm install
npm run dev
```

## Plugins

This project uses the following plugins to extend functionality:

- [vitest](https://vitest.dev/) - Vite + React testing library
- [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr) - Vite plugin for importing SVGs as React components
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Testing

To run tests, you can run:

```bash
npm run test
```

## Workflow

- Production branch: `main`
- Staging branch: `staging`
- Development branch: `develop`
- Feature branches: `feature/feature-name`
