import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minimumLoadTime = 700;
    const startedAt = performance.now();
    let timeoutId;

    const finishLoading = () => {
      const remainingTime = Math.max(
        0,
        minimumLoadTime - (performance.now() - startedAt),
      );

      timeoutId = window.setTimeout(() => setIsLoading(false), remainingTime);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div
        className={`page-loader${isLoading ? "" : " page-loader--hidden"}`}
        aria-hidden={!isLoading}
      >
        <div className="page-loader__content" role="status" aria-live="polite">
          <div className="page-loader__mark">
            AHR<span>.</span>
          </div>
          <div className="page-loader__track">
            <div className="page-loader__progress" />
          </div>
          <p className="page-loader__label">Initializing experience</p>
        </div>
      </div>

      <div className="bg-dark-bg text-text-main min-h-screen font-mono">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
