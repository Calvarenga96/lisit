export default function Error() {
    return (
        <div className="flex items-center justify-center h-screen bg-[#121A21] p-2">
            <div className="text-center p-6 bg-[#243647] shadow-xl rounded-lg max-w-md w-full">
                <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
                    ¡Oops, la fuerza ha caído!
                </h1>
                <p className="text-lg text-white mb-4">
                    Algo salió mal. Por favor, vuelve a intentarlo, joven
                    Padawan.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-300 transition-colors"
                >
                    Recargar
                </button>
            </div>
        </div>
    );
}
