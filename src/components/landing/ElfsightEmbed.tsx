import { useEffect } from "react";

const WIDGET_ID = import.meta.env.VITE_ELFSIGHT_WIDGET_ID?.trim();
const PLATFORM_SCRIPT = "https://elfsightcdn.com/platform.js";

let scriptPromise: Promise<void> | null = null;

function loadElfsightPlatform() {
  if (typeof document === "undefined") return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${PLATFORM_SCRIPT}"]`);
  if (existing) {
    return scriptPromise ?? Promise.resolve();
  }

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = PLATFORM_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Elfsight platform script failed to load"));
    document.body.appendChild(script);
  });

  return scriptPromise;
}

type ElfsightEmbedProps = {
  className?: string;
};

/**
 * Elfsight Google Reviews widget.
 *
 * In Elfsight dashboard → Publish → Embed code, copy the widget ID from:
 * <div class="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"></div>
 *
 * Set VITE_ELFSIGHT_WIDGET_ID in .env.local to the UUID part only.
 */
export function ElfsightEmbed({ className }: ElfsightEmbedProps) {
  useEffect(() => {
    if (!WIDGET_ID) return;

    loadElfsightPlatform().catch(() => {
      // Widget stays empty if script fails
    });
  }, []);

  if (!WIDGET_ID) {
    return null;
  }

  return (
    <div className={className}>
      <div
        className={`elfsight-app-${WIDGET_ID}`}
        data-elfsight-app-lazy
        suppressHydrationWarning
      />
    </div>
  );
}
