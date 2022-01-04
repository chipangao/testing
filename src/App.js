//import './App.css';
import { Suspense, lazy } from 'react';
import { useState } from 'react';
import Loading from './UI/Loading'

const HomePage = lazy(() => import('./page/HomePage'));
const LoginPage = lazy(() => import('./page/LoginPage'));

function App(props) {

  const [auth, setauth] = useState(true)

  const Home = () => {
    return (
      <Suspense fallback={Loading()}>
        <HomePage />
      </Suspense>
    )
  }

  const Login = () => {
    return (
      <Suspense fallback={Loading()}>
        <LoginPage />
      </Suspense>
    )
  }

  return auth ? <Home /> : <Login />

}

export default App;
