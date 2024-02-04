# Netflix GPT

## Steps

- Create React App
- Configure Tailwind CSS
- Routing
- Header
- Login Form
- SignUp Form
- Form Validation
  - useRef Hook
- Firebase Setup
  - Deploying App to production
- Create SignUp user account(auth)
- Implement SignIn user
- Created Redux store with User Slice
- Implemented Sign Out
- Update Profile name and Image
- BugFix: SignUp use Display name & profile image
- BugFix: If user is not logged in the redirect to /browse to login page and vice-versa
- Unsubscirbed to the onAuthStateChanged Callback
- Register for TMDB Api, and get the API access token
- Get data from TMDB now playing movie list
- Created custom hooks
- create movie slice
- updated store with movies data
- Planning for main and secondary container
- fetched data for trailer video
- update the store with trailer video data
- embedded yt video and make it autoplay and mute
- added tailwind classes to make main container looks good
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB image CDN
- Make UI browse page Better with Tailwind css
- usePopularMovies Custom hook
- useTopRatedMovies Custom hook
- useUpcomingMovies Custom hook
- GPT search Feature
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App

## Features / UI:

### Browse(Only come after Auth)

    - Header
    - Main Movie
        - Trailer in BG
        - Movie Title and Description
        - Play and Info button
        - Movie Suggestions
            - Movie List * N

- Main Container
  - Video Background
  - Video Title
- Secondary Container
  - Movie List \* N
  - Movie Cards \* N

### Login/Signup Page:

    - SignIn/SignUp Form
    - Redirect to Browse Page

### Netflix GPT:

    - Search Bar
    - Movie Suggestions
