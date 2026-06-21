import GalleryPage from "../../components/gallery";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;

  return <GalleryPage initialTab={tab || "all"} />;
}
