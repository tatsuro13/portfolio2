import type { FC } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

type WorkSliderBtnsProps = {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
  previousLabel?: string;
  nextLabel?: string;
};

const WorkSliderBtns: FC<WorkSliderBtnsProps> = ({
  containerStyles,
  btnStyles,
  iconsStyles,
  previousLabel = "Previous slide",
  nextLabel = "Next slide",
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        type="button"
        className={btnStyles}
        aria-label={previousLabel}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        type="button"
        className={btnStyles}
        aria-label={nextLabel}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
