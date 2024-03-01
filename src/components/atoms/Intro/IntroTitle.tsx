import { useFadeIn } from '../../../hooks/useFadeIn';

const IntroTitle = () => {
  const opacity = useFadeIn(0, 1, 1000);

  return (
    <div
      className="font-pretendard bg-transparent text-zinc-100 font-bold focus:outline-none transition-opacity duration-1000"
      style={{ opacity }}
    >
      <div className="text-lg xl:text-4xl">우리들의 이야기, PROlog</div>
    </div>
  );
};

export default IntroTitle;
