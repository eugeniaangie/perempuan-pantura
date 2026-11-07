import { StaticPage } from "@/components/content/static-page";
import { kodeEtikPage } from "@/lib/content/pages";

export default function KodeEtikPage() {
  return (
    <StaticPage title={kodeEtikPage.title} updated={kodeEtikPage.updated}>
      <ol className="list-decimal space-y-3 pl-5">
        {kodeEtikPage.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </StaticPage>
  );
}
