/* eslint-disable no-unused-vars */
import './variables.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from "./routes/public/PublicRoute";
import PrivateRoute from "./routes/private/PrivateRoute";

function App() {


  return (
    <div className="tw-w-full tw-bg-secondary">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRoute />} />
          {/* <Route path="/checkverse/*" element={<PrivateRoute />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;