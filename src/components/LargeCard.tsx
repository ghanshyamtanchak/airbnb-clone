import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  // eslint-disable-next-line no-undef
  img: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard: FC<Props> = ({ img, title, description, buttonText }) => (
  <section className="relative py-16 cursor-pointer">
    <div className="relative h-96 min-w-[300px]">
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
    </div>
    <div className="absolute top-32 left-12">
      <h3 className="text-4xl mb-3 w-64">{title}</h3>
      <p>{description}</p>
      <button
        type="button"
        className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5"
      >
        {buttonText}
      </button>
    </div>
  </section>
);

export default LargeCard;
