import { useCallback, useRef } from "react";

export const useThrottle = (callback: (...ars: any[]) => void, delay: number) => {
    const throttleRef = useRef(false);
    return useCallback(
        (...args) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
};
