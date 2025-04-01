import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import BookingPage from "./pages/BookingPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/movie-detail", element: <MovieDetailPage /> },
  { path: "/booking", element: <BookingPage /> },
  { path: "/watchist", element: <WatchlistPage /> },
  { path: "*", element: <h1>404 - Page Not Found</h1> }
]);

export default router;