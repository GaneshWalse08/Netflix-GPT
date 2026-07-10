

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
       - Sign Out button
       - if user is not logged in and trying to go to browse page redirect hime to login page
       - unsubscribe onauthstatechange callback

- Browse Page (API for moovies: TMDB)
       (read react strict mode)
       - create movie slice
       - create VideoTitle
       - create VideoBackground
            - by cadding trailer video to store
            custom hook
