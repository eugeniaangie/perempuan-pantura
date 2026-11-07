import { WorksListing } from "@/components/content/works-listing";
import { getWorksByKind } from "@/lib/content/works";

export default function EsaiPage() {
  return (
    <WorksListing
      title="Esai"
      intro="Catatan reflektif dan laporan lapangan dari perempuan pesisir Pantura."
      works={getWorksByKind("esai")}
      activeHref="/karya/esai"
    />
  );
}
