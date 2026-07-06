import { useEffect, useState } from 'react';

<<<<<<< HEAD
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
=======
export default function ServersCountdown({ lastUpdated }) {
    const [secondsAgo, setSecondsAgo] = useState(0);

    useEffect(() => {
        if (!lastUpdated) return;

        const update = () => setSecondsAgo(Math.floor((Date.now() - lastUpdated) / 1000));
        update();
        const intervalId = setInterval(update, 1000);

        return () => clearInterval(intervalId);
    }, [lastUpdated]);

    if (!lastUpdated) return null;

    return (
        <div className="w-full flex justify-center gap-2 py-4">
            <p className="text-sm text-gray-400 text-center">
                Last updated: <span className="text-neon-blue font-mono">{secondsAgo}</span> seconds ago.
            </p>
        </div>
    )
}
>>>>>>> 4dd5b5dc9fdb275410df7727645dadcd8113c1ed
