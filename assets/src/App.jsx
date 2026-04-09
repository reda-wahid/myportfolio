import { RouterProvider } from "react-router";
import "./App.css";
import Routes from "./routes/index.jsx";

function App() {
  return (
    <>
      <div className="app bg-main ">
        <RouterProvider router={Routes} />
        
      </div>
    </>
  );
}

export default App;
