import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./pages/CreateTrip";
import TripDetails from "./pages/TripDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTrip/>
  },
  {
    path: "/trips/:tripId",
    element: <TripDetails/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
