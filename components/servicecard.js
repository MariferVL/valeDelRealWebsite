const ServiceCard = ({ title, description, features, images }) => (
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 px-4 md:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-4xl">{title}</h2>
      <p className="mt-4 text-gray-500">{description}</p>

      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        {features.map((feature) => (
          <div key={feature.name} className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-accent">{feature.name}</dt>
            <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Service Image ${index + 1}`}
          className="rounded-lg bg-gray-100"
        />
      ))}
    </div>
  </div>
);

export default ServiceCard;
