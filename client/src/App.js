import React, { useState, useEffect } from 'react'
import './App.css';
import Landing from './screens/Landing/Landing'
import AdventureDetail from './screens/AdventureDetail/Detail'
import AdventureEdit from './screens/AdventureEdit/Edit'
import Adventures from './screens/Adventures/Adventures'
import AdventureCreate from './screens/AdeventureCreate/Create'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import SignUp from './screens/SignUp/SignUp'
import { verifyUser } from './services/users'




function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)


  return (
    <div className="app">
    <Switch>
      <Route exact path="/">
        <Landing user={user} />
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
        <Adventures user={user} />
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
