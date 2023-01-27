import ReactGA from "react-ga4";

export const handlePageView = (e) => {
  const sessionId = window.sessionStorage.getItem("session_id");
  ReactGA.send({
    hitType: "pageview",
    page:
      "/exhibitor-widget/" +
      sessionId +
      "/" +
      e.target.name +
      "/" +
      e.target.value,
  });
};
