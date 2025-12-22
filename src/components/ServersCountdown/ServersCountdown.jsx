import { useEffect, useState } from 'react';

export default function ServersCountdown() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter >= 20) return;

        const counterInterval = setInterval(() => {
            setCounter(prev => prev + 1);
        }, 1000);

        return () => clearInterval(counterInterval);
    }, [counter]);
   
    return (
        <div className="w-full flex justify-center gap-2 py-4">
            <p className="text-sm text-gray-400 text-center">
                Last updated: <span className="text-neon-blue font-mono">{counter}</span> seconds ago.
            </p>
        </div>
    )
}