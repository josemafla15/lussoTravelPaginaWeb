import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="bg-lusso-sage py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        {/* Mensaje + CTA */}
        <div className="text-center md:text-left">
          <h2 className="font-display font-semibold text-3xl text-lusso-charcoal md:text-4xl">
            ¿No sabes a dónde ir?{" "}
            <span className="italic">Nosotros sí.</span>
          </h2>
          <p className="mt-3 text-lusso-charcoal/80">
            Cuéntanos qué sueñas y armamos el viaje perfecto para ti.
          </p>
          <a
            href="https://wa.me/573000000000?text=Hola%2C%20quiero%20planear%20un%20viaje"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-lusso-charcoal px-8 py-3 text-sm font-semibold text-lusso-cream hover:opacity-90 transition-opacity"
          >
            Hablemos por WhatsApp
          </a>
        </div>

        {/* Mascota */}
        <div className="relative h-48 w-48 md:h-56 md:w-56 shrink-0">
          <Image
            src="/images/assets/asset_01.png"
            alt="Mascota Lusso Travel"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}