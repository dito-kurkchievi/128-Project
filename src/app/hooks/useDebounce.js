import { useEffect, useState } from "react";

export function useDebounce(state, callback) {
  useEffect(() => {
    const id = setTimeout(() => {
      callback()
    }, 300)

    return () => {
      clearTimeout(id);
    }
  }, [state])

  return state;
}