import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SigmaProps extends IconProps {
  type?: "stroke";
}

export const Sigma: IconComponent<SigmaProps> = React.forwardRef<
  SVGSVGElement,
  SigmaProps
>(function Sigma(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M18 7V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H6.5C6.40714 4 6.31612 4.02586 6.23713 4.07467C6.15815 4.12349 6.09431 4.19334 6.05279 4.27639C6.01126 4.35945 5.99368 4.45242 6.00202 4.5449C6.01036 4.63738 6.04429 4.72572 6.1 4.8L10.6 10.8C10.8596 11.1462 11 11.5673 11 12C11 12.4327 10.8596 12.8538 10.6 13.2L6.1 19.2C6.04429 19.2743 6.01036 19.3626 6.00202 19.4551C5.99368 19.5476 6.01126 19.6406 6.05279 19.7236C6.09431 19.8067 6.15815 19.8765 6.23713 19.9253C6.31612 19.9741 6.40714 20 6.5 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M18 7V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H6.5C6.40714 4 6.31612 4.02586 6.23713 4.07467C6.15815 4.12349 6.09431 4.19334 6.05279 4.27639C6.01126 4.35945 5.99368 4.45242 6.00202 4.5449C6.01036 4.63738 6.04429 4.72572 6.1 4.8L10.6 10.8C10.8596 11.1462 11 11.5673 11 12C11 12.4327 10.8596 12.8538 10.6 13.2L6.1 19.2C6.04429 19.2743 6.01036 19.3626 6.00202 19.4551C5.99368 19.5476 6.01126 19.6406 6.05279 19.7236C6.09431 19.8067 6.15815 19.8765 6.23713 19.9253C6.31612 19.9741 6.40714 20 6.5 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M18 7V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H6.5C6.40714 4 6.31612 4.02586 6.23713 4.07467C6.15815 4.12349 6.09431 4.19334 6.05279 4.27639C6.01126 4.35945 5.99368 4.45242 6.00202 4.5449C6.01036 4.63738 6.04429 4.72572 6.1 4.8L10.6 10.8C10.8596 11.1462 11 11.5673 11 12C11 12.4327 10.8596 12.8538 10.6 13.2L6.1 19.2C6.04429 19.2743 6.01036 19.3626 6.00202 19.4551C5.99368 19.5476 6.01126 19.6406 6.05279 19.7236C6.09431 19.8067 6.15815 19.8765 6.23713 19.9253C6.31612 19.9741 6.40714 20 6.5 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Sigma doesn't support ${type}`);
  return null;
});

Sigma.displayName = "Sigma";

Sigma.metadata = {
  name: "Sigma",
  category: "stroke/science",
  tags: ["sigma", "icon"],
  description: "Sigma icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Sigma;
