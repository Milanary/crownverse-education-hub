import SectionTitle from "./SectionTitle";

const AffiliatedSection = () => {
  const images = ["/Partner1.png", "/Partner2.png", "/Partner3.png"];

  return (
    <section className="py-16 bg-crown-bg">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Partnerships & Networks"
          subtitle="Collaborating for global success"
          center
        />

        <div className="overflow-hidden relative mt-12">
          <div className="flex items-center animate-scroll-left">
            {[...images, ...images].map((src, idx) => (
              <div key={idx} className="flex-shrink-0">
                <img
                  src={src}
                  alt={`Partner ${idx + 1}`}
                  className="w-[600px] h-auto object-contain rounded shadow-md block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliatedSection;
