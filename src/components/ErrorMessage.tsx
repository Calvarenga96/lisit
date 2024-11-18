import { Button } from "@/components/ui/button";

interface ErrorMessageProps {
    errorMessage?: string;
    onRetry: () => void;
}

export default function ErrorMessage({
    errorMessage = "Ocurrió un error inesperado.",
    onRetry,
}: ErrorMessageProps) {
    return (
        <div className="text-center p-4 text-red-500 border border-red-500 bg-red-100 rounded-lg shadow-lg min-h-screen flex justify-center items-center flex-col">
            <p>
                Lo sentimos, pero ha ocurrido un error al intentar obtener los
                datos.
            </p>
            <p>{errorMessage}</p>
            <Button
                onClick={onRetry}
                className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors"
            >
                Intentar de nuevo
            </Button>
        </div>
    );
}
