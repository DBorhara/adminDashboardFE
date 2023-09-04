import AppRoutes from "./Routes";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
