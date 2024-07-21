import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arabic from "./component/Arabic";
import FirstPage from "./component/FirstPage";
import Login from "./component/Login";
import UserProfile from "./component/UserProfile";
import { GlobalProvider } from "./component/GlobalContext";
import "./scss/main.scss";
import "./scss/CustomButton.scss";
import "./scss/BackButton.scss";
import "./scss/HomeScreen.scss";
import "./scss/Login.scss";
import "./scss/UserProfile.scss";
import "./scss/Popup.scss";

// Lazy load the Englishpage component
const Englishpage = lazy(() => import("./component/Englishpage"));

function App() {
  const [user, setUser] = useState(null);

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route
            path="/english"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Englishpage />
              </Suspense>
            }
          />
          <Route path="/arabic" element={<Arabic />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/userprofile" element={<UserProfile user={user} />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
