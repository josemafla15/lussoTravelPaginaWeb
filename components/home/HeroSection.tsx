import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/images/brand/descarga2.jpg"
        alt="Lusso Travel Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay oscuro suave */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Recuadro CTA */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="bg-white rounded-2xl w-1/2 h-20" />
      </div>
    </section>
  );
}