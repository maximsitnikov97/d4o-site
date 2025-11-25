import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
// import { Portfolio } from "./components/Portfolio";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Process />
        {/* <Portfolio /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
