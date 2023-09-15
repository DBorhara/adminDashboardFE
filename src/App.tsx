import AppRoutes from "./Routes";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Loading from "./components/Loading";
import Login from "./pages/Login";

// async function getLoginState() {
//   const jwt = localStorage.getItem("jwt");
//   if (!jwt) return [false, null];
//   const response = await axios.get("/api/users/me", {
//     headers: {
//       Authorization: `Bearer ${jwt}`,
//     },
//   });
//   return [true, response.data];
// }

function useLoginState(): [boolean, object] {
  // const [loginState, setLoginState] = useState(undefined);
  // useEffect(() => {
  //   getLoginState().then(setLoginState);
  // }, []);
  // return loginState;
  return [true, {}];
}

function App() {
  const isLoggedIn: [boolean, object] = useLoginState();

  if (isLoggedIn === undefined) {
    return <Loading />;
  }

  const [loggedIn, user]: [boolean, object] = isLoggedIn;

  if (loggedIn) {
    return (
      <>
        <Topbar />
        <div className="flex">
          <Sidebar />
          <AppRoutes isLoggedIn={loggedIn} />
        </div>
      </>
    );
  } else {
    return <Login />;
  }
}

export default App;
