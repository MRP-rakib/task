import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const pages = allPages.filter(page => 
    page === 1 ||     
    page === totalPages ||
    (page >= currentPage - 1 && page <= currentPage + 1) 
  ).reduce((acc: (number | string)[], page, index, array) => {
    if (index > 0 && page !== (array[index - 1] as number) + 1) {
      acc.push('...');
    }
    acc.push(page);
    return acc;
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 mt-8 md:mt-11.25 py-4 w-full">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 text-[#697077] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft size={18} className="md:size-5" />
        <span className="hidden sm:block text-[14px]">Previous</span>
      </button>
      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`dots-${index}`} className="px-1 md:px-3 py-1 text-[#62748E]">
                ...
              </span>
            );
          }

          const isActive = currentPage === page;

          return (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(page as number)}
              className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded transition-all text-[13px] md:text-[14px] ${
                isActive
                  ? 'bg-[#A6C8FF] text-[#001D6C] font-bold'
                  : 'text-[#0F62FE] hover:bg-[rgba(43,128,255,0.1)]'
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 text-[#0F62FE] hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <span className="hidden sm:block text-[14px]">Next</span>
        <ChevronRight size={18} className="md:size-5" />
      </button>
    </div>
  );
}