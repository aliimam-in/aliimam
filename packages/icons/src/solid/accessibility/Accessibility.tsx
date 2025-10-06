import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface AccessibilityProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Accessibility: IconComponent<AccessibilityProps> =
  React.forwardRef<SVGSVGElement, AccessibilityProps>(function Accessibility(
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
    if (type === "solid") {
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
            d="M16 1.5C17.381 1.5 18.5 2.619 18.5 4 18.5 5.381 17.381 6.5 16 6.5 14.619 6.5 13.5 5.381 13.5 4 13.5 2.619 14.619 1.5 16 1.5ZM18.753 10.521C19.225 10.442 19.706 10.593 20.048 10.927 20.39 11.261 20.553 11.739 20.485 12.212L19.485 19.212C19.368 20.032 18.608 20.602 17.788 20.485 16.968 20.368 16.398 19.608 16.515 18.788L17.225 13.816 13.247 14.48C12.43 14.616 11.657 14.064 11.521 13.247 11.384 12.43 11.936 11.657 12.753 11.521L18.753 10.521Z"
            fill="currentColor"
          />
          <path
            d="M7.03 3.855C7.5 3.457 8.171 3.385 8.719 3.684L14.219 6.684C14.589 6.886 14.857 7.235 14.957 7.645 15.057 8.055 14.98 8.489 14.744 8.839L12.384 12.339C11.921 13.026 10.989 13.207 10.302 12.744 9.615 12.281 9.433 11.348 9.896 10.661L11.334 8.527 8.267 6.854 6.061 9.061C5.475 9.646 4.525 9.646 3.939 9.061 3.354 8.475 3.354 7.525 3.939 6.939L6.939 3.939 7.03 3.855ZM2.806 14.062C3.048 13.269 3.887 12.823 4.679 13.065 5.471 13.308 5.917 14.146 5.675 14.939 5.477 15.585 5.471 16.274 5.656 16.924 5.842 17.573 6.212 18.156 6.721 18.6 7.23 19.044 7.858 19.331 8.526 19.427 9.195 19.522 9.877 19.422 10.49 19.139 11.242 18.791 12.134 19.118 12.482 19.87 12.829 20.622 12.501 21.514 11.749 21.861 10.61 22.388 9.344 22.574 8.102 22.397 6.86 22.219 5.695 21.685 4.749 20.86 3.804 20.036 3.117 18.954 2.772 17.748 2.427 16.542 2.439 15.261 2.806 14.062Z"
            fill="currentColor"
          />
          <path
            d="M6.25011 10.1389C7.38904 9.61233 8.65641 9.42615 9.89855 9.60378C11.1407 9.78142 12.3054 10.3152 13.2511 11.1399C14.1964 11.9645 14.8827 13.0451 15.2277 14.2512C15.5726 15.4577 15.5613 16.7388 15.1944 17.9387C14.9522 18.7308 14.1136 19.177 13.3214 18.9348C12.5293 18.6927 12.0834 17.8539 12.3253 17.0618C12.5228 16.4157 12.5295 15.726 12.3439 15.0764C12.1581 14.4268 11.7876 13.8447 11.2784 13.4007C10.7692 12.9567 10.1425 12.6691 9.47374 12.5735C8.80504 12.4779 8.12304 12.5781 7.50988 12.8616C6.75794 13.2093 5.86634 12.8811 5.51867 12.1292C5.17123 11.3774 5.49858 10.4867 6.25011 10.1389Z"
            fill="currentColor"
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
            d="M16 5C16.552 5 17 4.552 17 4 17 3.448 16.552 3 16 3 15.448 3 15 3.448 15 4 15 4.552 15.448 5 16 5ZM18 19 19 12 13 13M5 8 8 5 13.5 8 11.14 11.5M4.24 14.5C3.958 15.423 3.949 16.408 4.214 17.336 4.48 18.264 5.008 19.096 5.735 19.73 6.463 20.364 7.358 20.775 8.314 20.911 9.269 21.048 10.244 20.905 11.12 20.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.76 17.5C14.0422 16.5769 14.0511 15.5919 13.7858 14.6639C13.5205 13.7358 12.9922 12.9044 12.2647 12.27C11.5373 11.6356 10.6417 11.2253 9.68624 11.0887C8.73074 10.952 7.75611 11.0949 6.88 11.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`Accessibility doesn't support ${type}`);
    return null;
  });

Accessibility.displayName = "Accessibility";

Accessibility.metadata = {
  name: "Accessibility",
  category: "solid/accessibility",
  tags: ["accessibility", "icon"],
  description: "Accessibility icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Accessibility;
