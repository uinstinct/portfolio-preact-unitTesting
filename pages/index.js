import Landing from "@/containers/Landing";
import About from "@/containers/About";
import Skills from "@/containers/Skills";
import Cards from "@/containers/Projects";
import Footer from "@/containers/Footer";

export default function IndexPage() {

    return (
        <>
            <div
                id="all-containers"
            >
                <Landing />
                <div>
                    <About />
                </div>
                <Skills />
                <Cards />
                <Footer />
            </div>
        </>
    );
}