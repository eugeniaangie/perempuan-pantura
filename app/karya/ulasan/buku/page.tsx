import { WorksListing } from "@/components/content/works-listing";

export default function UlasanBukuPage() {
  return (
    <WorksListing
      title="Ulasan Buku"
      intro="Ulasan buku sastra, nonfiksi, dan bacaan anak dari komunitas Pantura."
      works={[]}
      activeHref="/karya/ulasan"
      showFilters={false}
    />
  );
}
