import "./App.scss";
import AboutSocial from "./components/AboutSocial";
import AnswerAndQuestion from "./components/AnswerAndQuestion";
import Banner from "./components/Banner";
import BenefitsComponent from "./components/BenefitsComponent";
import ContactsComponent from "./components/ContactsComponent";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import MainPage from "./components/MainPage";
import ServicesComponent from "./components/ServicesComponent";
import StagesOfWork from "./components/StagesOfWork";

function App() {
  return (
    <div className='App'>
      <Header />
      <MainPage />
      <BenefitsComponent />
      <ServicesComponent />
      <StagesOfWork />
      <Banner />
      <HowItWorks />
      <AboutSocial />
      <AnswerAndQuestion />
      <ContactsComponent />
    </div>
  );
}

export default App;
