## Steps Taken to Set Up RSBuild and Tailwind CSS

### Tailwind CSS Setup

1. **Installed Tailwind CSS and Dependencies**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Initialized Tailwind CSS Configuration**:
   ```bash
   npx tailwindcss init -p
   ```
   This created `tailwind.config.cjs` and `postcss.config.cjs`.

3. **Updated `tailwind.config.cjs`**:
   Configured the `content` property to include paths to your files:
   ```javascript
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. **Updated `postcss.config.cjs`**:
   Replaced the default PostCSS configuration:
   ```javascript
   module.exports = {
     plugins: {
       '@tailwindcss/postcss': {},
       autoprefixer: {},
     },
   };
   ```

5. **Added Tailwind Directives to CSS**:
   In `src/index.css`, added:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Verified CSS Import in `src/main.jsx`**:
   Ensured `src/main.jsx` imports the CSS:
   ```javascript
   import './index.css';
   ```

7. **Started the Development Server**:
   ```bash
   npm run dev
   ```

### RSBuild Setup

1. **Installed RSBuild and React Plugin**:
   ```bash
   npm install -D @rsbuild/core @rsbuild/plugin-react
   ```

2. **Created RSBuild Configuration File**:
   Created `rsbuild.config.js` and added:
   ```javascript
   const { defineConfig } = require('@rsbuild/core');
   const reactPlugin = require('@rsbuild/plugin-react');

   module.exports = defineConfig({
     plugins: [reactPlugin()],
     entry: './src/main.jsx',
     output: './dist',
     mode: 'development',
   });
   ```

3. **Updated `package.json` Scripts**:
   Added the following scripts:
   ```json
   "scripts": {
     "build": "rsbuild",
     "start": "rsbuild --watch"
   }
   ```

4. **Ran RSBuild**:
   - Started the development server:
     ```bash
     npm run start
     ```
   - Built for production:
     ```bash
     npm run build
     ```

---

This setup ensures Tailwind CSS and RSBuild are fully integrated into your React project.

## Project Setup

### TypeScript
- TypeScript has been added for type safety.
- Configuration file: `tsconfig.json`

### Jest
- Jest is set up for unit testing.
- Configuration file: `jest.config.js`
- Run tests with:
  ```bash
  npm test
  ```

### Cypress
- Cypress is set up for end-to-end testing.
- Open Cypress with:
  ```bash
  npx cypress open
  ```

### Prettier
- Prettier is configured for code formatting.
- Configuration file: `.prettierrc`
- Format code with:
  ```bash
  npx prettier --write .
  ```

### GitHub Actions
- CI/CD pipeline is set up to run tests and build the project.
- Workflow file: `.github/workflows/ci.yml`

### Environment Variables
- Example environment variables are provided in `.env.example`.
- Copy `.env.example` to `.env` and update values as needed.

### Scripts
- Start development server:
  ```bash
  npm run start
  ```
- Build for production:
  ```bash
  npm run build
  ```

### Adding Custom Fonts (Satoshi)

1. **Font Files**:
   - Added the following font files to `src/assets/fonts`:
     - `Satoshi-Variable.woff2`
     - `Satoshi-VariableItalic.woff2`

2. **CSS Configuration**:
   - Updated `src/index.css` with `@font-face` rules:
     ```css
     @font-face {
       font-family: 'SatoshiFont';
       src: url('./assets/fonts/Satoshi-Variable.woff2') format('woff2');
       font-weight: 400;
       font-style: normal;
     }

     @font-face {
       font-family: 'SatoshiFont';
       src: url('./assets/fonts/Satoshi-VariableItalic.woff2') format('woff2');
       font-weight: 400;
       font-style: italic;
     }
     ```

3. **Tailwind Configuration**:
   - Updated `tailwind.config.cjs` to include the custom font:
     ```javascript
     fontFamily: {
       custom: ['SatoshiFont', 'sans-serif'],
     },
     ```

4. **Usage**:
   - Use the `font-custom` class in your HTML/JSX to apply the Satoshi font:
     ```jsx
     <h1 className="font-custom text-2xl">Hello, World!</h1>
     ```
