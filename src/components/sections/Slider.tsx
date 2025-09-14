import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

const features = [
  {
    id: "1",
    icon: <img src="images/contact.png" className="size-14 min-w-14" />,
    text: (
      <span className="text-gray-custom text-[18px] font-normal">
        Access to{" "}
        <span className="text-dark-primary font-semibold">700M+ Contacts</span>
      </span>
    ),
  },
  {
    id: "2",
    icon: <img src="images/one-click.png" className="size-9 min-w-9" />,
    text: (
      <span className="text-gray-custom text-[18px] font-normal">
        <span className="text-dark-primary font-semibold">One click push </span>
        to CRM
      </span>
    ),
  },
  {
    id: "3",
    icon: <img src="images/custom-field.png" className="size-9 min-w-9" />,
    text: (
      <span className="text-gray-custom text-[18px] font-normal">
        <span className="text-dark-primary font-semibold">Custom Field </span>
        Mapping
      </span>
    ),
  },
  {
    id: "4",
    icon: <img src="images/advance-waterfall.png" className="size-9 min-w-9" />,
    text: (
      <span className="text-gray-custom text-[18px] font-normal">
        Advanced{" "}
        <span className="text-dark-primary font-semibold">
          Waterfall Enrichment
        </span>
      </span>
    ),
  },
  {
    id: "5",
    icon: <img src="images/contact.png" className="size-14 min-w-14" />,
    text: (
      <span className="text-gray-custom text-[18px] font-normal">
        Access to{" "}
        <span className="text-dark-primary font-semibold">700M+ Contacts</span>
      </span>
    ),
  },
  {
    id: "6",
    icon: <img src="images/one-click.png" className="size-9 min-w-9" />,
    text: (
      <span className="text-gray-custom text-[18px] font-normal">
        <span className="text-dark-primary font-semibold">One click push </span>
        to CRM
      </span>
    ),
  },
  {
    id: "7",
    icon: <img src="images/custom-field.png" className="size-9 min-w-9" />,
    text: (
      <span className="text-gray-custom text-[18px] font-normal">
        <span className="text-dark-primary font-semibold">Custom Field </span>
        Mapping
      </span>
    ),
  },
  {
    id: "8",
    icon: <img src="images/advance-waterfall.png" className="size-9 min-w-9" />,
    text: (
      <span className="text-gray-custom text-[18px] font-normal">
        Advanced{" "}
        <span className="text-dark-primary font-semibold">
          Waterfall Enrichment
        </span>
      </span>
    ),
  },
];
const Slider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnFocusIn: false }),
  ]);

  return (
    <div className="embla border-b border-[#F1F1F1] pt-20 pb-14">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container items-center">
          {features.map((feature, index) => (
            <div className="embla__slide" key={index}>
              <div className="flex items-center gap-4">
                <div className="">{feature.icon}</div>
                {feature.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
