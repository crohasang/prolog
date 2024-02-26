import { useFadeIn } from '../../hooks/useFadeIn';

const IntroTitle = () => {
  const opacity = useFadeIn(0, 1, 1000);

  return (
    <div
      className="font-pretendard bg-transparent text-white font-bold focus:outline-none text-6xl transition-opacity duration-1000"
      style={{ opacity }}
    >
      {/* 화면이 sm(640px)보다 작으면 PROlog가, sm보다 같거나 크면 '우리들의 이야기, PROlog'가 출력 */}
      <span className="sm:hidden">PROlog</span>
      <span className="hidden sm:inline">우리들의 이야기, PROlog</span>
    </div>
  );
};

export default IntroTitle;
