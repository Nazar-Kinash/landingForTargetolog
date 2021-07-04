import "./App.scss";
import BenefitsComponent from "./components/BenefitsComponent";
import ContactsComponent from "./components/ContactsComponent";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import StagesOfWork from "./components/StagesOfWork";

function App() {
  return (
    <div className='App'>
      <Header />
      <MainPage />
      <BenefitsComponent />
      <StagesOfWork />
      <ContactsComponent />
    </div>
  );
}

export default App;
