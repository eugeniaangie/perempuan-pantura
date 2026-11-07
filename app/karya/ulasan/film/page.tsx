import { WorksListing } from "@/components/content/works-listing";

export default function UlasanFilmPage() {
  return (
    <WorksListing
      title="Ulasan Film"
      intro="Catatan dan ulasan film bertema perempuan, pesisir, dan keadilan."
      works={[]}
      activeHref="/karya/ulasan"
      showFilters={false}
    />
  );
}
