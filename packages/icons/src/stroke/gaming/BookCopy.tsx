import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BookCopyProps extends IconProps {
  type?: "stroke";
}

export const BookCopy: IconComponent<BookCopyProps> = React.forwardRef<
  SVGSVGElement,
  BookCopyProps
>(function BookCopy(
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
          d="M5 7C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.803 18H5C4.47 18 3.961 18.211 3.586 18.586 3.211 18.961 3 19.47 3 20 3 20.53 3.211 21.039 3.586 21.414 3.961 21.789 4.47 22 5 22H14.5C14.633 22 14.76 21.947 14.854 21.854 14.947 21.76 15 21.633 15 21.5V21M9 15V4C9 3.47 9.211 2.961 9.586 2.586 9.961 2.211 10.47 2 11 2H20.5C20.633 2 20.76 2.053 20.854 2.146 20.947 2.24 21 2.367 21 2.5V16.5C21 16.633 20.947 16.76 20.854 16.854 20.76 16.947 20.633 17 20.5 17H11C10.47 17 9.961 16.789 9.586 16.414 9.211 16.039 9 15.53 9 15ZM9 15C9 14.47 9.211 13.961 9.586 13.586 9.961 13.211 10.47 13 11 13H21"
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
          d="M5 7C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.803 18H5C4.47 18 3.961 18.211 3.586 18.586 3.211 18.961 3 19.47 3 20 3 20.53 3.211 21.039 3.586 21.414 3.961 21.789 4.47 22 5 22H14.5C14.633 22 14.76 21.947 14.854 21.854 14.947 21.76 15 21.633 15 21.5V21M9 15V4C9 3.47 9.211 2.961 9.586 2.586 9.961 2.211 10.47 2 11 2H20.5C20.633 2 20.76 2.053 20.854 2.146 20.947 2.24 21 2.367 21 2.5V16.5C21 16.633 20.947 16.76 20.854 16.854 20.76 16.947 20.633 17 20.5 17H11C10.47 17 9.961 16.789 9.586 16.414 9.211 16.039 9 15.53 9 15ZM9 15C9 14.47 9.211 13.961 9.586 13.586 9.961 13.211 10.47 13 11 13H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BookCopy doesn't support ${type}`);
  return null;
});

BookCopy.displayName = "BookCopy";

BookCopy.metadata = {
  name: "BookCopy",
  category: "stroke/gaming",
  tags: ["book", "copy", "icon"],
  description: "BookCopy icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookCopy;
