import Image from "next/image";

export const Hero = ({ data }: { data: AboutHeroSectionData }) => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 items-center pb-20 pt-36">
      <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
        <Image
          src={data.profile_image.image}
          alt={data.profile_image.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex-1 text-center lg:text-left">
        <p className="uppercase tracking-widest text-xs text-blue-100 mb-2">
          {data.badge}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          I&apos;m <span className="text-purple-400">{data.name}</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
          {data.description}
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10">
          {data.stats.map((stat: any, i: number) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-purple-300 text-sm uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
