import React, { useState, useEffect } from 'react'
import './App.css';
import Landing from './screens/Landing/Landing'
import AdventureDetail from './screens/AdventureDetail/Detail'
import AdventureEdit from './screens/AdventureEdit/Edit'
import Adventures from './screens/Adventures/Adventures'
import AdventureCreate from './screens/AdventureCreate/Create'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import SignUp from './screens/SignUp/SignUp'
import { useHistory, Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/users'

function App() {
  const [user, setUser] = useState(null);
  const [filter, setFilter] = useState('all');
  const history = useHistory();
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)

  const onChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
    history.push(`/adventures`);
  }


  return (
    <div className="app">
    <Switch>
      <Route exact path="/">
        <Landing onChange={onChange} user={user} filter={filter} setFilter={setFilter}/>
      </Route>
      <Route path="/sign-up">
        <SignUp setUser={setUser} />
      </Route>
      <Route path="/sign-in">
        <SignIn setUser={setUser} />
      </Route>
      <Route path="/sign-out">
        <SignOut setUser={setUser} clearUser={clearUser} />
      </Route>
      <Route exact path="/adventures">
        <Adventures onChange={onChange} user={user} filter={filter} setFilter={setFilter}/>
      </Route>
      <Route path="/add-adventure">
        {user ? <AdventureCreate user={user} /> : <Redirect to="/sign-up" />}
      </Route>
      <Route exact path="/adventures/:id/edit">
        {user ? <AdventureEdit user={user} /> : <Redirect to='/' />}
      </Route>
      <Route exact path="/adventures/:id">
        <AdventureDetail user={user} />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
