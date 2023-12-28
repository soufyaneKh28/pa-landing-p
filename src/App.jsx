import {
  Hero,
  Header,
  Footer,
  HowToGet,
  CTA,
  Contact,
  HowItWorks,
  ContactBtn,
  Menu,
} from "./components";

const App = () => (
  <>
    <div className=" relative " dir="RTL">
      <Header />

      <Hero />
      {/* <ContactBtn /> */}
      <HowItWorks />
      <CTA />
      <HowToGet />
      <Contact />
      <Footer />
      <Menu />
    </div>
  </>
);

export default App;
