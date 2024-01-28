import UserContectProvider from "./context/USerContextProvider";
import Login from './Components/Login';
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContectProvider>
      <h1>GO</h1>
      <Login />
      <Profile />
    </UserContectProvider>
  );
}

export default App;
