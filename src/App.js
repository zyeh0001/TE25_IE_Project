import { Route, Switch } from "react-router-dom";
// import Todo from "./components/Todo";
// import Header from "./components/header";
// import Footer from "./components/footer";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import DisclaimerPage from "./pages/Disclaimer";
import HealthyTipsPage from "./pages/HealthyTips";
import SelfCheckPage from "./pages/SelfCheck";
import SymptomPage from "./pages/Symptom";
import MedicalSupportPage from "./pages/MedicalSupport";
import MainNavigation from "./components/MainNavigation";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="http://www.skindicator.ga/" exact={true}>
          <HomePage />
        </Route>
        <Route path="http://www.skindicator.ga/about-us">
          <AboutUsPage />
        </Route>
        <Route path="http://www.skindicator.ga/disclaimer">
          <DisclaimerPage />
        </Route>
        <Route path="http://www.skindicator.ga/healthy-tips">
          <HealthyTipsPage />
        </Route>
        <Route path="http://www.skindicator.ga/self-check">
          <SelfCheckPage />
        </Route>
        <Route path="http://www.skindicator.ga/symptom">
          <SymptomPage />
        </Route>
        <Route path="http://www.skindicator.ga/medical-support">
          <MedicalSupportPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
