import { useFadeIn } from '../../../hooks/useFadeIn';

const IntroTitle = () => {
  const opacity = useFadeIn(0, 1, 1000);

  return (
    <div
      className="font-pretendard bg-transparent text-white font-bold focus:outline-none transition-opacity duration-1000"
      style={{ opacity }}
    >
      <span className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
        우리들의 이야기, PROlog
      </span>
    </div>
  );
};

export default IntroTitle;
