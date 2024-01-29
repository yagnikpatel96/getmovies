import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function eventCall(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", eventCall);

      return function () {
        document.removeEventListener("keydown", eventCall);
      };
    },
    [action, key]
  );
}
