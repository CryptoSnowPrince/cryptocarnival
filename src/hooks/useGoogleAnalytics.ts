import React from "react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga4";
const TRACKING_ID = "G-TKEFGWGLPM";

export default function useGoogleAnalytics() {
  const location = useLocation();

  React.useEffect(() => {
    try {
      ReactGA.initialize(TRACKING_ID);
    } catch (error) {
      console.log('ReactGA.initialize(TRACKING_ID)', TRACKING_ID)
    }
  }, []);

  React.useEffect(() => {
    const currentPath = location.pathname + location.search + location.hash;
    ReactGA.send({ hitType: "pageview", page: currentPath });
  }, [location]);
}
