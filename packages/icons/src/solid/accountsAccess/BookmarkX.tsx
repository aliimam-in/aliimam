import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BookmarkXProps extends IconProps {
  type?: "solid" | "stroke";
}

export const BookmarkX: IconComponent<BookmarkXProps> = React.forwardRef<
  SVGSVGElement,
  BookmarkXProps
>(function BookmarkX(
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
          d="M17 1.5C17.9283 1.5 18.8182 1.86901 19.4746 2.52539C20.131 3.18177 20.5 4.07174 20.5 5V21C20.5 21.5347 20.2154 22.0295 19.7529 22.2979C19.2906 22.5661 18.72 22.5679 18.2559 22.3027L12 18.7275L5.74414 22.3027C5.27999 22.5679 4.70944 22.5661 4.24707 22.2979C3.7846 22.0295 3.5 21.5347 3.5 21V5C3.5 4.07174 3.86901 3.18177 4.52539 2.52539C5.18177 1.86901 6.07174 1.5 7 1.5H17ZM15.5605 6.43945C14.9748 5.85368 14.0252 5.85367 13.4395 6.43945L12 7.87891L10.5605 6.43945C9.97476 5.85368 9.02524 5.85367 8.43945 6.43945C7.85367 7.02524 7.85368 7.97476 8.43945 8.56055L9.87891 10L8.43945 11.4395C7.85367 12.0252 7.85368 12.9748 8.43945 13.5605C9.02525 14.1462 9.9748 14.1463 10.5605 13.5605L12 12.1211L13.4395 13.5605C14.0252 14.1462 14.9748 14.1463 15.5605 13.5605C16.1463 12.9748 16.1462 12.0252 15.5605 11.4395L14.1211 10L15.5605 8.56055C16.1463 7.9748 16.1462 7.02525 15.5605 6.43945Z"
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
          d="M19 21 12 17 5 21V5C5 4.47 5.211 3.961 5.586 3.586 5.961 3.211 6.47 3 7 3H17C17.53 3 18.039 3.211 18.414 3.586 18.789 3.961 19 4.47 19 5V21ZM14.5 7.5 9.5 12.5M9.5 7.5 14.5 12.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BookmarkX doesn't support ${type}`);
  return null;
});

BookmarkX.displayName = "BookmarkX";

BookmarkX.metadata = {
  name: "BookmarkX",
  category: "solid/accountsAccess",
  tags: ["bookmark", "icon"],
  description: "BookmarkX icon from solid/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookmarkX;
