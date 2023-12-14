// import {createBrowserRouter, RoutertProvider} from react-router-dom;
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import harvardArt from './data/harvardArt';
console.log(harvardArt);

function App() {
  const router = createBrowserRouter([
    { 
      path: "*",
      element: <h2>Page Not Found</h2>
    }
  
  ]);
  return <RouterProvider router={router} />;
}

export default App;
