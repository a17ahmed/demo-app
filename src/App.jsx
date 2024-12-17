import './variables.css'
import Header from "./layouts/Header"
import AppRoute from './routes/AppRoute';

function App() {


  return (
    <div className="tw-w-full tw-h-screen tw-bg-secondary">
      <Header />
      <AppRoute />
    </div>
  )
}

export default App;