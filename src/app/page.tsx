import Banner from "@layouts/Banner";
import ContentLayout from "@layouts/ContentLayout";
import Features from "@layouts/Features";

export default function Home() {
  return (
    <main>
      <Banner />
      <ContentLayout>
        <Features />
      </ContentLayout>
    </main>
  );
}
