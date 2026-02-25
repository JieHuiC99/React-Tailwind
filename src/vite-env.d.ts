/// <reference types="vite/client" />

// For TS to understand `import logo from './react.svg'`
declare module '*.svg' {
  const src: string;
  export default src;
}