# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Steps:

- Header
   -Logo

- Login Form
  - Make a toggle between signIn and singUp form
  - Validation using Ragex
  - connected firebase
  - signUp authentication using firebase
  - signIn authentication using firebase
  - once user sign in or sign up --> add that user object to Redux store so we can use that data anywhere in our app
       - created store
       - created slice
       - added slice reducer to store
       - provide the store 
       ((write in useEffect) look onAuthStateChange of firebase to automatically call when anything happen like sigin, signOut, login etc  in root comp. Body also do redirect to here using Navigate hook. } const navigate = useNavigate())
          ----> in login comp : if signIn } navigate("/browse) ..... in signOut } navigate("/")


