import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract06: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract06(
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
    ...props
  },
  forwardedRef,
) {
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
        d="M4.96683 0.00190662H12C12 6.62857 6.62752 12 0 12V4.96952C0 7.71237 2.22441 9.93523 4.96683 9.93523C7.70925 9.93523 9.93365 7.71237 9.93365 4.96952C9.93365 2.22666 7.70925 0.00381324 4.96683 0.00381324V0.00190662ZM4.96683 23.9981C7.70925 23.9981 9.93365 21.7752 9.93365 19.0324C9.93365 16.2895 7.70925 14.0667 4.96683 14.0667C2.22441 14.0667 0 16.2895 0 19.0324V12.0019C6.62752 12.0019 12 17.3733 12 24H4.96683V23.9981ZM12 0.00190662H19.0332C16.2907 0.00190662 14.0663 2.22477 14.0663 4.96762C14.0663 7.71048 16.2907 9.93333 19.0332 9.93333C21.7756 9.93333 23.9981 7.71048 24 4.96762V11.9981C17.3725 11.9981 12.0019 6.62667 12.0019 0L12 0.00190662ZM19.0332 14.0667C16.2907 14.0667 14.0663 16.2895 14.0663 19.0324C14.0663 21.7752 16.2907 23.9981 19.0332 23.9981H12C12 17.3714 17.3725 12 23.9981 12V19.0305C23.9981 16.2876 21.7737 14.0648 19.0313 14.0648L19.0332 14.0667Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract06.displayName = "Abstract06";

Abstract06.metadata = {
  name: "Abstract06",
  category: "shapes/abstract",
  tags: ["abstract", "06", "icon"],
  description: "Abstract06 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract06;
