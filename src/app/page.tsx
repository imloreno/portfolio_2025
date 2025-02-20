import About from "@layouts/About";
import Banner from "@layouts/Banner";
import Contact from "@layouts/Contact";
import ContentLayout from "@layouts/ContentLayout";
import Experience from "@layouts/Experience";
import Features from "@layouts/Features";
import Footer from "@layouts/Footer";
import Projects from "@layouts/Projects";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <main>
      <AnimatedCursor
        innerSize={8}
        outerSize={50}
        color="206, 194, 255"
        outerScale={1.5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        outerStyle={{
          border: ".1rem solid var(--cursor-color)",
          background: "none",
        }}
        showSystemCursor={true}
      />
      <ContentLayout>
        <Banner />
        <Features />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </ContentLayout>
    </main>
  );
}
