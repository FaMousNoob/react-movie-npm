import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './module/main/pages/home/home.page';
import MovieDetail from './module/main/pages/movie-detail/movie-detail.page';
import SignIn from './module/main/pages/sign-in/sign-in.page';
import SignUp from './module/main/pages/sign-up/sign-up.page';
import Header from './module/main/components/header/header.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>

          <Route path='/movie-detail/:id' exact={true }>
            <MovieDetail />
          </Route>

          <Route path='/sign-in' exact={true}>
            <SignIn />
          </Route>

          <Route path='/sign-up' exact={true}>
            <SignUp />
          </Route>
          {/* xử lý not found */}
          <Route path=''>
            {/* <>404 Not Found</
            h1> */}
            <Redirect to='/' />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
