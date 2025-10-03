import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BookmarkCheckProps extends IconProps {
  type?: "solid" | "stroke";
}

export const BookmarkCheck: IconComponent<BookmarkCheckProps> =
  React.forwardRef<SVGSVGElement, BookmarkCheckProps>(function BookmarkCheck(
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
            d="M17 1.5C17.9283 1.5 18.8182 1.86901 19.4746 2.52539C20.131 3.18177 20.5 4.07174 20.5 5V21C20.5 21.5347 20.2154 22.0295 19.7529 22.2979C19.2906 22.5661 18.72 22.5679 18.2559 22.3027L12 18.7275L5.74414 22.3027C5.27999 22.5679 4.70944 22.5661 4.24707 22.2979C3.7846 22.0295 3.5 21.5347 3.5 21V5C3.5 4.07174 3.86901 3.18177 4.52539 2.52539C5.18177 1.86901 6.07174 1.5 7 1.5H17ZM16.0605 6.93945C15.4748 6.35368 14.5252 6.35367 13.9395 6.93945L11 9.87891L10.0605 8.93945C9.47476 8.35368 8.52524 8.35367 7.93945 8.93945C7.35367 9.52524 7.35368 10.4748 7.93945 11.0605L9.93945 13.0605C10.5252 13.6463 11.4748 13.6463 12.0605 13.0605L16.0605 9.06055C16.6463 8.47476 16.6463 7.52524 16.0605 6.93945Z"
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
            d="M19 21L12 17L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 10L11 12L15 8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`BookmarkCheck doesn't support ${type}`);
    return null;
  });

BookmarkCheck.displayName = "BookmarkCheck";

BookmarkCheck.metadata = {
  name: "BookmarkCheck",
  category: "solid/accountsAccess",
  tags: ["bookmark", "check", "icon"],
  description: "BookmarkCheck icon from solid/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookmarkCheck;
