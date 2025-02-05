export const HardwareGuide = () => {
  return (
    <section className="py-16">
      <div className="px-4 mx-auto max-w-df">
        <h2 className="mb-8 text-3xl font-extrabold text-center font-nunito">
          Guía de Hardware
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a className="cursor-pointer">
            <article className="relative overflow-hidden group z-10 before:content-[''] before:absolute before:block before:inset-0 before:bg-black/50 before:size-full before:transition-all before:duration-1000 before:opacity-0 before:z-[1] hover:before:opacity-100">
              <img
                src="https://gamerbit.pe/wp-content/uploads/2023/11/guia-de-cpus-para-gaming.jpg"
                alt=""
                className="transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute z-10 top-5 left-5">
                <div className="flex flex-col items-center px-4 py-2 text-2xl bg-white text-[#333]">
                  <span>15</span>
                  <span className="text-xs font-semibold">NOV</span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10">
                <div className="w-full border-l-8 bg-black/80 border-primary-800">
                  <h3 className="px-4 py-3 text-xl font-medium text-white min-h-[80px]">
                    Guía de CPUs para Gaming: Núcleos, Frecuencia y Relación con
                    GPUs
                  </h3>
                </div>
              </div>
            </article>
          </a>
          <a className="cursor-pointer">
            <article className="relative overflow-hidden group z-10 before:content-[''] before:absolute before:block before:inset-0 before:bg-black/50 before:size-full before:transition-all before:duration-1000 before:opacity-0 before:z-[1] hover:before:opacity-100">
              <img
                src="https://gamerbit.pe/wp-content/uploads/2023/11/test-imagen.png"
                alt=""
                className="transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute z-10 top-5 left-5">
                <div className="flex flex-col items-center px-4 py-2 text-2xl bg-white text-[#333]">
                  <span>15</span>
                  <span className="text-xs font-semibold">NOV</span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10">
                <div className="w-full border-l-8 bg-black/80 border-primary-800">
                  <h3 className="px-4 py-3 text-xl font-medium text-white min-h-[80px]">
                    La plataforma definitiva para ray tracing e IA 2
                  </h3>
                </div>
              </div>
            </article>
          </a>
          <a className="cursor-pointe">
            <article className="relative overflow-hidden group z-10 before:content-[''] before:absolute before:block before:inset-0 before:bg-black/50 before:size-full before:transition-all before:duration-1000 before:opacity-0 before:z-[1] hover:before:opacity-100">
              <img
                src="https://gamerbit.pe/wp-content/uploads/2023/11/test-imagen.png"
                alt=""
                className="transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute z-10 top-5 left-5">
                <div className="flex flex-col items-center px-4 py-2 text-2xl bg-white text-[#333]">
                  <span>15</span>
                  <span className="text-xs font-semibold">NOV</span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10">
                <div className="w-full border-l-8 bg-black/80 border-primary-800">
                  <h3 className="px-4 py-3 text-xl font-medium text-white min-h-[80px]">
                    La plataforma definitiva para ray tracing e IA 2
                  </h3>
                </div>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
};
