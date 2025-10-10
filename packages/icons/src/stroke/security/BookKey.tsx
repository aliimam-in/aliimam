import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BookKeyProps extends IconProps {
  type?: "stroke";
}

export const BookKey: IconComponent<BookKeyProps> = React.forwardRef<
  SVGSVGElement,
  BookKeyProps
>(function BookKey(
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
          d="M19 3 20 4M20 2 15.5 6.5M20 7.898V21C20 21.265 19.895 21.52 19.707 21.707 19.52 21.895 19.265 22 19 22H6.5C5.837 22 5.201 21.737 4.732 21.268 4.263 20.799 4 20.163 4 19.5 4 18.837 4.263 18.201 4.732 17.732 5.201 17.263 5.837 17 6.5 17H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732 5.201 2.263 5.837 2 6.5 2H14.344M14 10C15.105 10 16 9.105 16 8 16 6.895 15.105 6 14 6 12.895 6 12 6.895 12 8 12 9.105 12.895 10 14 10Z"
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
          d="M19 3 20 4M20 2 15.5 6.5M20 7.898V21C20 21.265 19.895 21.52 19.707 21.707 19.52 21.895 19.265 22 19 22H6.5C5.837 22 5.201 21.737 4.732 21.268 4.263 20.799 4 20.163 4 19.5 4 18.837 4.263 18.201 4.732 17.732 5.201 17.263 5.837 17 6.5 17H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732 5.201 2.263 5.837 2 6.5 2H14.344M14 10C15.105 10 16 9.105 16 8 16 6.895 15.105 6 14 6 12.895 6 12 6.895 12 8 12 9.105 12.895 10 14 10Z"
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
          d="M19 3 20 4M20 2 15.5 6.5M20 7.898V21C20 21.265 19.895 21.52 19.707 21.707 19.52 21.895 19.265 22 19 22H6.5C5.837 22 5.201 21.737 4.732 21.268 4.263 20.799 4 20.163 4 19.5 4 18.837 4.263 18.201 4.732 17.732 5.201 17.263 5.837 17 6.5 17H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732 5.201 2.263 5.837 2 6.5 2H14.344M14 10C15.105 10 16 9.105 16 8 16 6.895 15.105 6 14 6 12.895 6 12 6.895 12 8 12 9.105 12.895 10 14 10Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BookKey doesn't support ${type}`);
  return null;
});

BookKey.displayName = "BookKey";

BookKey.metadata = {
  name: "BookKey",
  category: "stroke/security",
  tags: ["book", "key", "icon"],
  description: "BookKey icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookKey;
