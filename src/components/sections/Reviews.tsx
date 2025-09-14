import useEmblaCarousel from "embla-carousel-react";
import Rating from "../Rating";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

interface ReviewProps {
  id: string;
  review: string;
  rate: number;
  profile: string;
  username: string;
  platform: string;
}

const reviews: ReviewProps[] = [
  {
    id: "r-1",
    review:
      "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    rate: 5,
    profile: "images/avatar1.png",
    username: "David Fincher",
    platform: "On Capterra",
  },
  {
    id: "r-2",
    review:
      "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
    rate: 5,
    profile: "images/avatar2.png",
    username: "Lillian Williams",
    platform: "On Capterra",
  },
  {
    id: "r-3",
    review:
      "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    rate: 5,
    profile: "images/avatar3.png",
    username: "Michael",
    platform: "On Capterra",
  },
  {
    id: "r-4",
    review:
      "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    rate: 5,
    profile: "images/avatar1.png",
    username: "David Fincher",
    platform: "On Capterra",
  },
];
const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="pt-11 pb-13">
      <div className="container-wide">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold mb-9 text-deep-blue">
            What people are saying about LeadCRM
          </h1>
          <div className="flex gap-4">
            <Button
              icon={<ChevronLeft className="size-5" />}
              onClick={onPrevButtonClick}
              variant="outline"
              className="hover:bg-deep-blue active:bg-deep-blue/80 hover:text-white size-[46px] text-deep-blue border-deep-blue rounded-full"
            />
            <Button
              icon={<ChevronRight className="size-5" />}
              onClick={onNextButtonClick}
              variant="outline"
              className="hover:bg-deep-blue hover:text-white active:bg-deep-blue/80 text-deep-blue rounded-full border-deep-blue size-[46px]"
            />
          </div>
        </div>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="flex -ml-5">
              {reviews.map((review: ReviewProps) => (
                <div className="pl-5 flex-[0_0_33.33%] select-none cursor-grab active:cursor-grabbing">
                  <div
                    className="bg-[#F9F0F8] min-h-[390px] rounded-2xl px-[25px] py-7 flex items-start flex-col justify-between gap-5"
                    key={review?.id}
                  >
                    <div>
                      <p className="text-[16px] leading-[26px] text-[#2C2C2C] mb-3.5 font-semibold">
                        “{review?.review}”
                      </p>

                      <div className="flex items-center mb-6">
                        <div className="size-7.5 mr-2.5 bg-white rounded-md flex items-center justify-center">
                          <img src="images/capterra.png" className="size-5" />
                        </div>
                        <Rating count={5} value={review?.rate} />
                      </div>
                    </div>

                    <div className="flex items-center border-t border-[#7A7A7A4F] w-full space-x-2 pt-4">
                      <div className="size-11 bg-gray-300 rounded-full overflow-hidden">
                        <img src={review?.profile} className="size-full" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[20px] text-deep-blue">
                          {review?.username}
                        </h3>
                        <p className="font-normal text-sm text-[#696969]">
                          {review?.platform}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
