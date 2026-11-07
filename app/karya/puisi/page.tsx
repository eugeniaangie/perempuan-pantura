import { WorksListing } from "@/components/content/works-listing";
import { getWorksByKind } from "@/lib/content/works";

export default function PuisiPage() {
  return (
    <WorksListing
      title="Puisi"
      intro="Bait-bait dari bibir pantai, dermaga, dan rumah-rumah pesisir Karawang."
      works={getWorksByKind("puisi")}
      activeHref="/karya/puisi"
    />
  );
}
