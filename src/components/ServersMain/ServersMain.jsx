import { useEffect, useState } from 'react';
import './ServersMain.css';

export default function ServersMain() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <>
      <main className="servers-page_main">
        <div className="servers-page_container">
          <h1 className={`servers-page_title ${isLoaded ? 'loaded' : ''}`}>
            Lunar ARK Servers
          </h1>
          <p></p>
        </div>
      </main>
    </>
  );
}
