import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/routes/home/Home";
import { Layout } from "./components/views/layout";
import AiStore from "./components/routes/ai-store/AiStore";
import Profile from "./components/routes/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="create-art" element={<Home />} />
          <Route path="ai-store" element={<AiStore />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
