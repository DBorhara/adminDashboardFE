import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-4">other pages</div>
      </div>
    </>
  );
}

export default App;
