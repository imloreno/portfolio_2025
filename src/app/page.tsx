import About from "@layouts/About";
import Banner from "@layouts/Banner";
import ContentLayout from "@layouts/ContentLayout";
import Features from "@layouts/Features";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <ContentLayout>
        <Features />
        <About />
      </ContentLayout>
    </main>
  );
}
