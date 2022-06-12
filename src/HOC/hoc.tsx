import { ComponentType } from "react";

export function hoc<T>(Component: ComponentType<T>) {
  return (hocProps: Omit<T, "svgHeight" | "svgWidth" >) => {
    return (
      <Component
        {...(hocProps as T)}
        svgHeight={200}
        svgWidth={600}
      />
    );
  };
}
