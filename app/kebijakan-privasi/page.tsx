import { StaticPage } from "@/components/content/static-page";
import { kebijakanPrivasiPage } from "@/lib/content/pages";

export default function KebijakanPrivasiPage() {
  return (
    <StaticPage
      title={kebijakanPrivasiPage.title}
      updated={kebijakanPrivasiPage.updated}
    >
      <p>{kebijakanPrivasiPage.body}</p>
    </StaticPage>
  );
}
