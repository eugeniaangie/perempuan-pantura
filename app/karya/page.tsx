import { WorksListing } from "@/components/content/works-listing";
import { karyaPage } from "@/lib/content/pages";
import { getWorksByKind } from "@/lib/content/works";

export default function KaryaPage() {
  return (
    <WorksListing
      title={karyaPage.title}
      intro={karyaPage.intro}
      works={getWorksByKind("all")}
      activeHref="/karya"
    />
  );
}
