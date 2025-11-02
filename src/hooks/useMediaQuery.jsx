import { useEffect, useState } from "react";

export default function useMediaQuery (query) {
    const isClient = typeof window !== 'undefined';
    const [matches, setMatches] = useState(() => isClient ? window.matchMedia(query).matches : false)
    
    useEffect(() => {
        if (!isClient) return

        const media = window.matchMedia(query);
        const listener = (event) => setMatches(event.matches)
        
        setMatches(media.matches)

        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)

    }, [query, isClient])
    return matches
}