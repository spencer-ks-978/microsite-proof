import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  useParams,
  useLocation,
  HashRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const EveryPageComponent = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: site-one</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
);

const Dashboard = () => {
  return (
    <>
      <EveryPage>
        <div className="text-green-700">page located!</div>
        <div>- you are on ROUTE DASHBOARD route of:</div>
      </EveryPage>
    </>
  );
};

const Invoices = () => {
  return (
    <>
      <EveryPage>
        <div className="text-green-700">page located!</div>
        <div>- you are on INVOICES route of:</div>
      </EveryPage>
    </>
  );
};

const Team = () => {
  return (
    <>
      <EveryPage>
        <div className="text-green-700">page located!</div>
        <div>- you are on TEAM route of:</div>
      </EveryPage>
    </>
  );
};

const NotFound = () => {
  return (
    <EveryPage>
      <div className="text-red-600"> page not found</div>
    </EveryPage>
  );
};

const EveryPage = ({ children }) => {
  let navigate = useNavigate();

  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log("params  ", params);
    console.log("location  ", location);
  }, []);

  const navigateTo = (url) => {
    window.location = url;
  };

  const CustomLink = ({ url, label }) => {
    return (
      <div className="text-purple-700" onClick={() => navigateTo(url)}>
        {label}
      </div>
    );
  };

  return (
    <>
      <div className="text-blue-700 bg-purple-200">
        DASHBOARD (invoices and team subs)
      </div>
      pathname:
      <pre>{location?.pathname ?? ""}</pre>
      {children}
      <div className="flex justify-start w-full">
        <CustomLink url={`/dashboard/#/invoices`} label="dash-invoices" />
        <div className="px-2"> | </div>
        <CustomLink url={`/dashboard/#/team`} label="dash-team" />
        <div className="px-2"> | </div>
        <CustomLink url={`/home/#/about`} label="home-about" />
        <div className="px-2"> | </div>
        <CustomLink url={`/home/#/support`} label="home-support" />
      </div>
      <EveryPageComponent />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route path="invoices" element={<Invoices />} />
          <Route path="team" element={<Team />} />
          <Route path="" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
