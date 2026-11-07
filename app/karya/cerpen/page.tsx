import { WorksListing } from "@/components/content/works-listing";
import { getWorksByKind } from "@/lib/content/works";

export default function CerpenPage() {
  return (
    <WorksListing
      title="Cerpen"
      intro="Cerita pendek tentang kehidupan, tunggu, dan ketahanan di garis pantai utara."
      works={getWorksByKind("cerpen")}
      activeHref="/karya/cerpen"
    />
  );
}
