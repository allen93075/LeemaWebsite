import Image from "next/image";
import servicesData from "@/data/services.json";

const Services = () => {
  const serviceAmount = servicesData.serviceDetail.length
  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-semibold mb-6">What do we do?</h2>
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-8">
        {servicesData.serviceDetail.map((service) => (
          <div key={service.id} className={`w-full md:w-[${100 / serviceAmount}%] text-center flex flex-col items-center`}>
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <p className="mt-2 text-lg font-medium">{service.title}</p>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
