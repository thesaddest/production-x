import { MutableRefObject, useCallback, useRef } from "react";

export const useDebounce = (callback: (...ars: any[]) => void, delay: number) => {
    const timer = useRef() as MutableRefObject<NodeJS.Timer>;

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
};
