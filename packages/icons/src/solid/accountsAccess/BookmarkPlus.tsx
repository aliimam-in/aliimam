import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BookmarkPlusProps extends IconProps {
  type?: "solid" | "stroke";
}

export const BookmarkPlus: IconComponent<BookmarkPlusProps> = React.forwardRef<
  SVGSVGElement,
  BookmarkPlusProps
>(function BookmarkPlus(
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
          d="M17 1.5C17.9283 1.5 18.8182 1.86901 19.4746 2.52539C20.131 3.18177 20.5 4.07174 20.5 5V21C20.5 21.5347 20.2154 22.0295 19.7529 22.2979C19.2906 22.5661 18.72 22.5679 18.2559 22.3027L12 18.7275L5.74414 22.3027C5.27999 22.5679 4.70944 22.5661 4.24707 22.2979C3.7846 22.0295 3.5 21.5347 3.5 21V5C3.5 4.07174 3.86901 3.18177 4.52539 2.52539C5.18177 1.86901 6.07174 1.5 7 1.5H17ZM12 5.5C11.1716 5.5 10.5 6.17157 10.5 7V8.5H9C8.17157 8.5 7.5 9.17157 7.5 10C7.5 10.8284 8.17157 11.5 9 11.5H10.5V13C10.5 13.8284 11.1716 14.5 12 14.5C12.8284 14.5 13.5 13.8284 13.5 13V11.5H15C15.8284 11.5 16.5 10.8284 16.5 10C16.5 9.17157 15.8284 8.5 15 8.5H13.5V7C13.5 6.17157 12.8284 5.5 12 5.5Z"
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
          d="M19 21 12 17 5 21V5C5 4.47 5.211 3.961 5.586 3.586 5.961 3.211 6.47 3 7 3H17C17.53 3 18.039 3.211 18.414 3.586 18.789 3.961 19 4.47 19 5V21ZM12 7V13M15 10H9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BookmarkPlus doesn't support ${type}`);
  return null;
});

BookmarkPlus.displayName = "BookmarkPlus";

BookmarkPlus.metadata = {
  name: "BookmarkPlus",
  category: "solid/accountsAccess",
  tags: ["bookmark", "plus", "icon"],
  description: "BookmarkPlus icon from solid/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookmarkPlus;
