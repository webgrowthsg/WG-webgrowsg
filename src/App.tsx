import type { RouteRecord } from "vite-react-ssg";
import { Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { WebDesign } from "./pages/WebDesign";
import { Maintenance } from "./pages/Maintenance";
import { Seo } from "./pages/Seo";
import { LocalSeo } from "./pages/LocalSeo";
import { Pricing } from "./pages/Pricing";
import { RedDotEmergency } from "./pages/RedDotEmergency";
import { SingaporeCarpentry } from "./pages/SingaporeCarpentry";
import { WhereIsTheNextSpot } from "./pages/WhereIsTheNextSpot";
import { About } from "./pages/About";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "web-design-singapore", element: <WebDesign /> },
      { path: "website-maintenance", element: <Maintenance /> },
      { path: "seo", element: <Seo /> },
      { path: "local-seo", element: <LocalSeo /> },
      { path: "pricing", element: <Pricing /> },
      {
        path: "work",
        children: [
          { index: true, element: <Navigate to="/#our-work" replace /> },
          { path: "reddot-emergency", element: <RedDotEmergency /> },
          { path: "singapore-carpentry", element: <SingaporeCarpentry /> },
          { path: "where-is-the-next-spot", element: <WhereIsTheNextSpot /> },
        ],
      },
      { path: "about", element: <About /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
];
