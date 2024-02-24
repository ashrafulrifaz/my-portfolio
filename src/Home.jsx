import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services"
import Welcome from "./components/Welcome";

const Home = () => {
    return (
        <div>
            <Welcome></Welcome>
            <Header></Header>
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto">
                <Banner></Banner>
                <About></About>
                <Services></Services>
                <Expertise></Expertise>
                <Education></Education>
                <Projects></Projects>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;