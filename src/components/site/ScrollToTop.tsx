import { useEffect } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    if (navEntry?.type === "reload") {
      if (pathname !== "/") {
        navigate({ to: "/", replace: true });
        return;
      }

      if (window.location.hash) {
        window.history.replaceState(null, "", "/");
      }

      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return null;
}
