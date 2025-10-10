import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WrenchProps extends IconProps {
  type?: "stroke";
}

export const Wrench: IconComponent<WrenchProps> = React.forwardRef<
  SVGSVGElement,
  WrenchProps
>(function Wrench(
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
          d="M14.7 6.30003C14.5168 6.48696 14.4141 6.73828 14.4141 7.00003C14.4141 7.26178 14.5168 7.5131 14.7 7.70003L16.3 9.30003C16.4869 9.48326 16.7382 9.58589 17 9.58589C17.2617 9.58589 17.5131 9.48326 17.7 9.30003L20.806 6.19503C21.126 5.87303 21.669 5.97503 21.789 6.41303C22.0911 7.5119 22.074 8.6741 21.7398 9.76362C21.4055 10.8531 20.7678 11.8249 19.9014 12.5653C19.0349 13.3056 17.9756 13.7839 16.8472 13.9441C15.7189 14.1043 14.5683 13.9399 13.53 13.47L5.61998 21.38C5.22215 21.7777 4.68264 22.0011 4.12012 22.001C3.55761 22.0009 3.01817 21.7774 2.62048 21.3795C2.22279 20.9817 1.99942 20.4422 1.99951 19.8797C1.99961 19.3172 2.22315 18.7777 2.62098 18.38L10.531 10.47C10.0611 9.43174 9.89668 8.28111 10.0569 7.15278C10.2171 6.02445 10.6954 4.96508 11.4357 4.09864C12.1761 3.23221 13.1479 2.59454 14.2374 2.26026C15.3269 1.92597 16.4891 1.9089 17.588 2.21103C18.026 2.33103 18.128 2.87303 17.807 3.19503L14.7 6.30003Z"
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
          d="M14.7 6.30003C14.5168 6.48696 14.4141 6.73828 14.4141 7.00003C14.4141 7.26178 14.5168 7.5131 14.7 7.70003L16.3 9.30003C16.4869 9.48326 16.7382 9.58589 17 9.58589C17.2617 9.58589 17.5131 9.48326 17.7 9.30003L20.806 6.19503C21.126 5.87303 21.669 5.97503 21.789 6.41303C22.0911 7.5119 22.074 8.6741 21.7398 9.76362C21.4055 10.8531 20.7678 11.8249 19.9014 12.5653C19.0349 13.3056 17.9756 13.7839 16.8472 13.9441C15.7189 14.1043 14.5683 13.9399 13.53 13.47L5.61998 21.38C5.22215 21.7777 4.68264 22.0011 4.12012 22.001C3.55761 22.0009 3.01817 21.7774 2.62048 21.3795C2.22279 20.9817 1.99942 20.4422 1.99951 19.8797C1.99961 19.3172 2.22315 18.7777 2.62098 18.38L10.531 10.47C10.0611 9.43174 9.89668 8.28111 10.0569 7.15278C10.2171 6.02445 10.6954 4.96508 11.4357 4.09864C12.1761 3.23221 13.1479 2.59454 14.2374 2.26026C15.3269 1.92597 16.4891 1.9089 17.588 2.21103C18.026 2.33103 18.128 2.87303 17.807 3.19503L14.7 6.30003Z"
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
          d="M14.7 6.30003C14.5168 6.48696 14.4142 6.73828 14.4142 7.00003C14.4142 7.26178 14.5168 7.5131 14.7 7.70003L16.3 9.30003C16.4869 9.48326 16.7383 9.58589 17 9.58589C17.2618 9.58589 17.5131 9.48326 17.7 9.30003L20.806 6.19503C21.126 5.87303 21.669 5.97503 21.789 6.41303C22.0911 7.5119 22.0741 8.6741 21.7398 9.76362C21.4055 10.8531 20.7678 11.8249 19.9014 12.5653C19.035 13.3056 17.9756 13.7839 16.8473 13.9441C15.7189 14.1043 14.5683 13.9399 13.53 13.47L5.62001 21.38C5.22218 21.7777 4.68267 22.0011 4.12016 22.001C3.55764 22.0009 3.0182 21.7774 2.62051 21.3795C2.22282 20.9817 1.99945 20.4422 1.99954 19.8797C1.99964 19.3172 2.22318 18.7777 2.62101 18.38L10.531 10.47C10.0612 9.43174 9.89672 8.28111 10.0569 7.15278C10.2172 6.02445 10.6954 4.96508 11.4358 4.09864C12.1761 3.23221 13.1479 2.59454 14.2374 2.26026C15.3269 1.92597 16.4891 1.9089 17.588 2.21103C18.026 2.33103 18.128 2.87303 17.807 3.19503L14.7 6.30003Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Wrench doesn't support ${type}`);
  return null;
});

Wrench.displayName = "Wrench";

Wrench.metadata = {
  name: "Wrench",
  category: "stroke/tools",
  tags: ["wrench", "icon"],
  description: "Wrench icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wrench;
