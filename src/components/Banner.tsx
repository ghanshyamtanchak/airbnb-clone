import Image from 'next/image';
import { BannerImg } from 'assets/images';
import { FC } from "react";

const Banner: FC = () => (
  <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
    <Image src={BannerImg} layout="fill" objectFit="cover" />
    <div className="absolute top-1/2 w-full text-center">
      <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
      <button type="button" className="button">
        I&apos;m flexible
      </button>
    </div>
  </div>
);

export default Banner;
