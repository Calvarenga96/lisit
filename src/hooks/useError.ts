import { useEffect, useState } from "react";
import { ERROR_MESSAGES } from "@/constants/errors";

export default function useError(error: any) {
    const [errorMessage, setErrorMessage] = useState<string>(
        ERROR_MESSAGES.GENERIC
    );

    useEffect(() => {
        if (error instanceof Error) {
            if (error.message.includes("Network")) {
                setErrorMessage(ERROR_MESSAGES.NETWORK);
            } else if (error.message.includes("timeout")) {
                setErrorMessage(ERROR_MESSAGES.TIMEOUT);
            } else {
                setErrorMessage(`Error: ${error.message}`);
            }
        }
    }, [error]);

    return errorMessage;
}
