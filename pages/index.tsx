import PageLayout from "../layouts/PageLayout";

import Banner from "../components/Banner";

export default function Home() {
  // const { data, isError, isLoading } = useAnimes({ limit: "5", sort: "desc" });
  return (
    <PageLayout banner={<Banner />}>
      <div>Hello</div>
    </PageLayout>
  );
}
