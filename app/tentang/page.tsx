import { StaticPage } from "@/components/content/static-page";
import { tentangPage } from "@/lib/content/pages";

export default function TentangPage() {
  return (
    <StaticPage title={tentangPage.title} updated={tentangPage.updated}>
      <p>{tentangPage.body}</p>
    </StaticPage>
  );
}
