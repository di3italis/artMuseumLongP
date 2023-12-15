import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";

// console.log(harvardArt);

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <h2>Harvard Art Museum</h2>
              <p>
                Look, but Don&apos;t Touch.{}
                <br></br>Please select a Gallery in the navigation bar.
              </p>
            </>
          ),
        },
        {
          path: "*",
          element: <h2>Page Not Found</h2>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
