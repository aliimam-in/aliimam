import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BookLockProps extends IconProps {
  type?: "stroke";
}

export const BookLock: IconComponent<BookLockProps> = React.forwardRef<
  SVGSVGElement,
  BookLockProps
>(function BookLock(
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
          d="M18 6V4C18 3.47 17.789 2.961 17.414 2.586 17.039 2.211 16.53 2 16 2 15.47 2 14.961 2.211 14.586 2.586 14.211 2.961 14 3.47 14 4V6M20 15V21C20 21.265 19.895 21.52 19.707 21.707 19.52 21.895 19.265 22 19 22H6.5C5.837 22 5.201 21.737 4.732 21.268 4.263 20.799 4 20.163 4 19.5 4 18.837 4.263 18.201 4.732 17.732 5.201 17.263 5.837 17 6.5 17H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732 5.201 2.263 5.837 2 6.5 2H10M19 6H13C12.448 6 12 6.448 12 7V10C12 10.552 12.448 11 13 11H19C19.552 11 20 10.552 20 10V7C20 6.448 19.552 6 19 6Z"
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
          d="M18 6V4C18 3.47 17.789 2.961 17.414 2.586 17.039 2.211 16.53 2 16 2 15.47 2 14.961 2.211 14.586 2.586 14.211 2.961 14 3.47 14 4V6M20 15V21C20 21.265 19.895 21.52 19.707 21.707 19.52 21.895 19.265 22 19 22H6.5C5.837 22 5.201 21.737 4.732 21.268 4.263 20.799 4 20.163 4 19.5 4 18.837 4.263 18.201 4.732 17.732 5.201 17.263 5.837 17 6.5 17H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732 5.201 2.263 5.837 2 6.5 2H10M19 6H13C12.448 6 12 6.448 12 7V10C12 10.552 12.448 11 13 11H19C19.552 11 20 10.552 20 10V7C20 6.448 19.552 6 19 6Z"
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
          d="M18 6V4C18 3.47 17.789 2.961 17.414 2.586 17.039 2.211 16.53 2 16 2 15.47 2 14.961 2.211 14.586 2.586 14.211 2.961 14 3.47 14 4V6M20 15V21C20 21.265 19.895 21.52 19.707 21.707 19.52 21.895 19.265 22 19 22H6.5C5.837 22 5.201 21.737 4.732 21.268 4.263 20.799 4 20.163 4 19.5 4 18.837 4.263 18.201 4.732 17.732 5.201 17.263 5.837 17 6.5 17H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732 5.201 2.263 5.837 2 6.5 2H10M19 6H13C12.448 6 12 6.448 12 7V10C12 10.552 12.448 11 13 11H19C19.552 11 20 10.552 20 10V7C20 6.448 19.552 6 19 6Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BookLock doesn't support ${type}`);
  return null;
});

BookLock.displayName = "BookLock";

BookLock.metadata = {
  name: "BookLock",
  category: "stroke/security",
  tags: ["book", "lock", "icon"],
  description: "BookLock icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookLock;
