import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import Login from './components/Login';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Button from '@mui/material/Button';



function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Course Registration
           </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route exact path ='/'>
        <Button component={Link} to="/AddStudent" variant="outlined" color="primary" > 
          Add Student
          </Button>
          <Button component={Link} to="/login" variant="outlined" color="primary" > 
          login
          </Button>
          <Semester />
        </Route>
        <BrowserRouter>
       <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/semester' component={Semester} />
        <Route path='/schedule' component={SchedList} />
       </Switch>
      </BrowserRouter>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;