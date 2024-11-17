interface PaginationProps {
    currentPage: number;
    hasNextPage: boolean;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    hasNextPage,
    onPageChange,
}: PaginationProps) {
    return (
        <div className="flex justify-between items-center mt-6 flex-col md:flex-row gap-2">
            <span className="text-gray-700">Página {currentPage}</span>

            <div className="flex gap-3">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="px-4 py-2 bg-gray-800 text-yellow-400 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Anterior
                </button>

                <button
                    disabled={!hasNextPage}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="px-4 py-2 bg-gray-800 text-yellow-400 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}
