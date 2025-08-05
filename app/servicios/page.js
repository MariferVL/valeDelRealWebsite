import valeriaServices from "@/lib/servicesData";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesPage() {
  return (
    <main>
      <section
        id="hero-section"
        className="relative w-full h-screen bg-[url('/images/mainService.webp')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="relative mx-auto max-w-screen-xl h-full flex items-center justify-end px-4 lg:pl-8">
          <div className="max-w-lg p-5 text-left lg:bg-light lg:bg-opacity-30 rounded-lg">
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-serif">
              Descubre una Jornada de
              <strong className="block mt-2 text-3xl lg:text-4xl text-rose-700 font-sans">
                Autoconocimiento y Bienestar.
              </strong>
            </h1>
            <p className="mt-4 max-w-lg text-2xl lg:text-3xl text-white lg:text-black font-serif">
              Transforma tu vida a través de servicios especializados.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 pb-24">
        <div className="relative my-6 mx-auto w-64 h-16">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/images/separador.webp')" }}
          ></div>
        </div>

        {valeriaServices.map((service) => (
          <div key={service.title}>
            <ServiceCard {...service} />
            <div className="relative my-6 mx-auto w-64 h-16">
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/separador.webp')" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}






