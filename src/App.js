import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/BodyComponent";
import Head from "./Components/HeadComponent";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
        {/* <Body /> */}
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
      },
      {
        path:"/watch",
        element:<WatchPage/>,
      },
    ]
  }

])

export default App;
