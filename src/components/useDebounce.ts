import { useEffect, useState } from 'react';

interface UseDebouncedParams {
    searchQuery: string;
    delay?: number;
}

export function useDebounced({
    searchQuery,
    delay = 1000
}: UseDebouncedParams): string {
    const [debouncedValue, setDebouncedValue] = useState(searchQuery);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(searchQuery), delay);
        return () => clearTimeout(handler);
    }, [searchQuery, delay]);

    return debouncedValue;
}
