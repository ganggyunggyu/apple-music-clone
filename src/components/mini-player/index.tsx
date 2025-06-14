import { PlayIcon, SkipForwardIcon } from 'lucide-react';
import { useRouter } from '../../shared/hooks';

interface MiniPlayerProps {
  isCollapsed: boolean;
}

export const MiniPlayer: React.FC<MiniPlayerProps> = ({ isCollapsed }) => {
  const { pathname } = useRouter();

  const isSerach = pathname === '/search';
  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2  px-4 py-2 min-[70px] bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md rounded-full shadow-lg flex items-center justify-between text-white transition-all duration-300 border border-white/20
      ${
        isCollapsed && !isSerach ? 'bottom-2 w-7/12' : 'bottom-20 w-11/12'
      }      
      `}
    >
      <div className="flex items-center gap-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sCEcVG6Oet4mJBuDF8oiV-YgBPohttBDxA&s"
          alt="Cover"
          className="w-10 h-10 rounded-md object-cover"
        />
        <div className="text-sm">
          <p className="font-semibold truncate max-w-[90px]">
            곡 제목 곡 제목 곡 제목
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300">아티스트명</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button>
          <PlayIcon size={20} />
        </button>
        <button>
          <SkipForwardIcon size={20} />
        </button>
      </div>
    </div>
  );
};
