import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import AllenTexas from "./pages/AllenTexas";
import Locations from "./pages/Locations";
import SolarPanelCleaningCost from "./pages/SolarPanelCleaningCost";
import PressMediaKit from "./pages/PressMediaKit";
import CaseStudies from "./pages/CaseStudies";
import McKinney from "./pages/McKinney";
import Process from "./pages/Process";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "Solar-Panel-Cleaning-Allen-Texas", Component: AllenTexas },
      { path: "solar-panel-cleaning-cost-allen-tx", Component: SolarPanelCleaningCost },
      { path: "press-media-kit", Component: PressMediaKit },
      { path: "dallas-solar-cleaning-case-studies", Component: CaseStudies },
      { path: "solar-panel-cleaning-mckinney-tx", Component: McKinney },
      { path: "our-solar-cleaning-process", Component: Process },
      { path: "about-us", Component: About },
      { path: "contact-us", Component: Contact },
      { path: "service-areas", Component: Locations },
      { path: "locations", Component: Locations },
      { path: "*", Component: NotFound },
    ],
  },
]);