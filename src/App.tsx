import type { RouteRecord } from "vite-react-ssg";
import { Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "web-design-singapore",
        lazy: () => import("./pages/WebDesign").then((m) => ({ Component: m.WebDesign })),
      },
      {
        path: "website-maintenance",
        lazy: () => import("./pages/Maintenance").then((m) => ({ Component: m.Maintenance })),
      },
      {
        path: "seo",
        lazy: () => import("./pages/Seo").then((m) => ({ Component: m.Seo })),
      },
      {
        path: "local-seo",
        lazy: () => import("./pages/LocalSeo").then((m) => ({ Component: m.LocalSeo })),
      },
      {
        path: "pricing",
        lazy: () => import("./pages/Pricing").then((m) => ({ Component: m.Pricing })),
      },
      {
        path: "work",
        children: [
          { index: true, element: <Navigate to="/#our-work" replace /> },
          {
            path: "reddot-emergency",
            lazy: () => import("./pages/RedDotEmergency").then((m) => ({ Component: m.RedDotEmergency })),
          },
          {
            path: "singapore-carpentry",
            lazy: () => import("./pages/SingaporeCarpentry").then((m) => ({ Component: m.SingaporeCarpentry })),
          },
          {
            path: "where-is-the-next-spot",
            lazy: () => import("./pages/WhereIsTheNextSpot").then((m) => ({ Component: m.WhereIsTheNextSpot })),
          },
        ],
      },
      {
        path: "about",
        lazy: () => import("./pages/About").then((m) => ({ Component: m.About })),
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
];
