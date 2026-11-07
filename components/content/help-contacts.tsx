import { helpContacts } from "@/lib/content/pages";

export function HelpContacts() {
  return (
    <div className="rounded-2xl border border-blue-24 bg-white p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-blue sm:text-xl">
        Kontak Layanan Bantuan & Pendampingan
      </h2>
      <p className="mt-1 text-sm text-blue/80">
        Layanan darurat gratis dan rahasia bagi perempuan dan penyintas
        kekerasan.
      </p>
      <ul className="mt-5 space-y-4">
        {helpContacts.map((contact) => (
          <li
            key={contact.name}
            className="rounded-xl border border-blue-12 bg-blue-06 p-4"
          >
            <p className="font-semibold text-blue">{contact.name}</p>
            <p className="text-xs text-blue-60">{contact.area}</p>
            <p className="mt-2 text-sm text-blue/90">Telepon: {contact.phone}</p>
            <p className="text-sm text-blue/90">WhatsApp: {contact.whatsapp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
