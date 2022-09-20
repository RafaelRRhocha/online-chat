### Hi there! 👋

## What is inside?
- [Next](https://nextjs.org/docs)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind Css](https://tailwindcss.com/docs/installation)
- [Daisy UI](https://daisyui.com)
- [Eslint](https://eslint.org)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Getting Started

### Install dependencies:

```bash
yarn install
```

or

```bash
npm install
```

### Run development server

```bash
yarn run dev
```

or 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

```
└── src
    ├── components
                └── auth
                        └── <Component Folder>
                                index.tsx
                                styles.ts
                            <Component Folder />
                └── icons
                └── pages
                        └── <Component Folder>
                                index.tsx
                                styles.ts
                            <Component Folder />
                └── templates
                        └── <Component Folder>
                                index.tsx
                                styles.ts
                            <Component Folder />
    ├── data
            └── context
            └── hook
    ├── firebase
    ├── model
    ├── pages
    ├── styles
```

| Folder         | Description                                          |
| ----------     | -------------------------------------------          |
| **components** | Page components                                      |
| **data**       | Global State and Hooks                               |
| **firebase**   | Google Firebase Configs                              |
| **core**       | user model page                                      |
| **pages**      | Pages Routes                                         |
| **styles**     | Application styles                                   |

## Commands

- `dev`: run development server
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages