import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { publicRoutes } from "./routes";
import Footer from "./components/Footer";

function App() {
  const appContentStyle = {
    width: "100%",
    height: "100vh",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div style={appContentStyle}>
          <div className="container">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
