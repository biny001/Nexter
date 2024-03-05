import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import Error from "./Pages/Error";
import ComingSoon from "./Pages/ComingSoon";
import Watch from "./Pages/Watch";
import Trending from "./Pages/Trending";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            path="/"
            element={<Home />}
          />
          <Route
            path="/watch/:id"
            element={<Watch />}
          />
          <Route
            path="/favourites"
            element={<Favourites />}
          />
          <Route
            path="/comingsoon"
            element={<ComingSoon />}
          />
          <Route
            path="/trending"
            element={<Trending />}
          />
        </Route>

        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
