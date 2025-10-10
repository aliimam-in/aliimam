import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ThumbsUpProps extends IconProps {
  type?: "stroke";
}

export const ThumbsUp: IconComponent<ThumbsUpProps> = React.forwardRef<
  SVGSVGElement,
  ThumbsUpProps
>(function ThumbsUp(
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
          d="M7 10V22M15 5.88 14 10H19.83C20.141 10 20.447 10.072 20.724 10.211 21.002 10.35 21.244 10.552 21.43 10.8 21.616 11.048 21.742 11.337 21.798 11.642 21.853 11.948 21.837 12.262 21.75 12.56L19.42 20.56C19.299 20.975 19.046 21.34 18.7 21.6 18.354 21.86 17.933 22 17.5 22H4C3.47 22 2.961 21.789 2.586 21.414 2.211 21.039 2 20.53 2 20V12C2 11.47 2.211 10.961 2.586 10.586 2.961 10.211 3.47 10 4 10H6.76C7.132 10 7.497 9.896 7.813 9.7 8.129 9.504 8.384 9.223 8.55 8.89L12 2C12.472 2.006 12.936 2.118 13.358 2.329 13.78 2.539 14.149 2.842 14.437 3.215 14.726 3.588 14.926 4.022 15.024 4.483 15.121 4.945 15.113 5.422 15 5.88Z"
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
          d="M7 10V22M15 5.88 14 10H19.83C20.141 10 20.447 10.072 20.724 10.211 21.002 10.35 21.244 10.552 21.43 10.8 21.616 11.048 21.742 11.337 21.798 11.642 21.853 11.948 21.837 12.262 21.75 12.56L19.42 20.56C19.299 20.975 19.046 21.34 18.7 21.6 18.354 21.86 17.933 22 17.5 22H4C3.47 22 2.961 21.789 2.586 21.414 2.211 21.039 2 20.53 2 20V12C2 11.47 2.211 10.961 2.586 10.586 2.961 10.211 3.47 10 4 10H6.76C7.132 10 7.497 9.896 7.813 9.7 8.129 9.504 8.384 9.223 8.55 8.89L12 2C12.472 2.006 12.936 2.118 13.358 2.329 13.78 2.539 14.149 2.842 14.437 3.215 14.726 3.588 14.926 4.022 15.024 4.483 15.121 4.945 15.113 5.422 15 5.88Z"
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
          d="M7 10V22M15 5.88 14 10H19.83C20.141 10 20.447 10.072 20.724 10.211 21.002 10.35 21.244 10.552 21.43 10.8 21.616 11.048 21.742 11.337 21.798 11.642 21.853 11.948 21.837 12.262 21.75 12.56L19.42 20.56C19.299 20.975 19.046 21.34 18.7 21.6 18.354 21.86 17.933 22 17.5 22H4C3.47 22 2.961 21.789 2.586 21.414 2.211 21.039 2 20.53 2 20V12C2 11.47 2.211 10.961 2.586 10.586 2.961 10.211 3.47 10 4 10H6.76C7.132 10 7.497 9.896 7.813 9.7 8.129 9.504 8.384 9.223 8.55 8.89L12 2C12.472 2.006 12.936 2.118 13.358 2.329 13.78 2.539 14.149 2.842 14.437 3.215 14.726 3.588 14.926 4.022 15.024 4.483 15.121 4.945 15.113 5.422 15 5.88Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ThumbsUp doesn't support ${type}`);
  return null;
});

ThumbsUp.displayName = "ThumbsUp";

ThumbsUp.metadata = {
  name: "ThumbsUp",
  category: "stroke/social",
  tags: ["thumbs", "up", "icon"],
  description: "ThumbsUp icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ThumbsUp;
