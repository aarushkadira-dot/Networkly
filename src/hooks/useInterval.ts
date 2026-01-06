import { useEffect, useRef } from 'react';

/**
 * Custom hook for setInterval with proper cleanup and stable callback reference
 * @param callback Function to call on each interval
 * @param delay Delay in milliseconds, or null to pause
 */
export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback);

    // Remember the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval
    useEffect(() => {
        if (delay === null) return;

        const id = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(id);
    }, [delay]);
}
