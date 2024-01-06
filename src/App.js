import HeaderComponent from "./components/header/header.component";
import MidSectionComponent from "./components/mid-section/mid-section.component";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="lg:px-3 lg:pb-5 lg:bg-gray-100">
        <MidSectionComponent />
      </div>
    </>
  );
}
export default App;
