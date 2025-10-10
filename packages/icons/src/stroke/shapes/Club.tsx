import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ClubProps extends IconProps {
  type?: "stroke";
}

export const Club: IconComponent<ClubProps> = React.forwardRef<
  SVGSVGElement,
  ClubProps
>(function Club(
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
          d="M17.28 9.05C17.519 8.23 17.564 7.366 17.411 6.526 17.258 5.686 16.912 4.893 16.4 4.21 15.888 3.527 15.223 2.973 14.46 2.591 13.696 2.209 12.854 2.01 12 2.01 11.146 2.01 10.304 2.209 9.54 2.591 8.776 2.973 8.112 3.527 7.6 4.21 7.088 4.893 6.741 5.686 6.589 6.526 6.436 7.366 6.481 8.23 6.72 9.05 5.818 9.18 4.962 9.531 4.23 10.074 3.497 10.616 2.911 11.332 2.524 12.157 2.137 12.981 1.96 13.89 2.011 14.8 2.062 15.709 2.337 16.592 2.814 17.369 3.29 18.146 3.952 18.792 4.74 19.25 5.528 19.708 6.418 19.963 7.328 19.991 8.239 20.02 9.143 19.822 9.958 19.415 10.774 19.008 11.475 18.405 12 17.66 12.523 18.407 13.224 19.013 14.039 19.422 14.855 19.83 15.759 20.03 16.671 20.003 17.583 19.975 18.473 19.721 19.263 19.264 20.052 18.807 20.715 18.16 21.192 17.383 21.669 16.606 21.946 15.722 21.997 14.811 22.047 13.9 21.871 12.991 21.483 12.165 21.095 11.34 20.507 10.624 19.774 10.082 19.04 9.54 18.183 9.189 17.28 9.06V9.05ZM12 17.66V22"
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
          d="M17.28 9.05C17.519 8.23 17.564 7.366 17.411 6.526 17.259 5.686 16.912 4.893 16.4 4.21 15.888 3.527 15.223 2.973 14.46 2.591 13.696 2.209 12.854 2.01 12 2.01 11.146 2.01 10.304 2.209 9.54 2.591 8.777 2.973 8.112 3.527 7.6 4.21 7.088 4.893 6.741 5.686 6.589 6.526 6.436 7.366 6.481 8.23 6.72 9.05 5.818 9.18 4.962 9.531 4.23 10.074 3.497 10.616 2.911 11.332 2.524 12.157 2.137 12.981 1.96 13.89 2.011 14.8 2.062 15.709 2.338 16.592 2.814 17.369 3.29 18.146 3.952 18.792 4.74 19.25 5.528 19.708 6.418 19.963 7.329 19.991 8.239 20.02 9.143 19.822 9.959 19.415 10.774 19.008 11.475 18.405 12 17.66 12.523 18.407 13.224 19.013 14.04 19.422 14.855 19.83 15.759 20.03 16.671 20.003 17.583 19.975 18.473 19.721 19.263 19.264 20.052 18.807 20.715 18.16 21.192 17.383 21.67 16.606 21.946 15.722 21.997 14.811 22.047 13.9 21.871 12.991 21.483 12.165 21.095 11.34 20.507 10.624 19.774 10.082 19.04 9.54 18.183 9.189 17.28 9.06V9.05ZM12 17.66V22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Club doesn't support ${type}`);
  return null;
});

Club.displayName = "Club";

Club.metadata = {
  name: "Club",
  category: "stroke/shapes",
  tags: ["club", "icon"],
  description: "Club icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Club;
