import { Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Head from "./Components/Head";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";

const Layout = ({ children }) => (
  <>
    <Head />
    {children}
  </>
);

const App = () => {
  return (
    <div className="w-screen">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Body>
                <MainContainer />
              </Body>
            </Layout>
          }
        />
        <Route
          path="/watch"
          element={
            <Layout>
              <Body>
                <WatchPage />
              </Body>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
