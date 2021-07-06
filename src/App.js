import "./App.scss";
import AnswerAndQuestion from "./components/AnswerAndQuestion";
import BenefitsComponent from "./components/BenefitsComponent";
import ContactsComponent from "./components/ContactsComponent";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import ServicesComponent from "./components/ServicesComponent";
import StagesOfWork from "./components/StagesOfWork";

function App() {
  return (
    <div className='App'>
      <Header />
      <MainPage />
      <BenefitsComponent />
      <StagesOfWork />
      <ServicesComponent />
      <AnswerAndQuestion />
      <ContactsComponent />
    </div>
  );
}

export default App;
