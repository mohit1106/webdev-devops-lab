import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h2>This is a topbar header</h2>
    
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout() {
  return <div>
    header Layout 
    <Link to="/">landing page</Link> | <Link to="/neet/online-coaching-class-11">class 11</Link> | <Link to="/neet/online-coaching-class-12">class 12</Link>
    
    <Outlet />

    Footer layout
  </div>
}

function Landing() {
  return <div>
    WELCOME TO ALLEN
  </div>
}

function Class11Program() {
  return <div>
    NEET program for class 11th
  </div>
}


function Class12Program() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }

  return <div>
    NEET program for class 12th
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}


function ErrorPage() {
  return <div>
    You Fucked up the url
  </div>
}

export default App
