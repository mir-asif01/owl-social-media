import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/about/About';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Media from './Components/media/Media';
import Message from './Components/message/Message';
const routes = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    children : [
      {
        path : '/home',
        element : <Home></Home>
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/media',
        element : <Media></Media>
      },
      {
        path : '/message',
        element : <Message></Message>
      }
    ]
  }
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
