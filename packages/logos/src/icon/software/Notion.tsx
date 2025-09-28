import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Notion: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Notion(
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
          d="M1.44577 1.03325L14.7425 0.0544419C16.3757 -0.0852596 16.7954 0.00894936 17.8223 0.753039L22.0668 3.73352C22.7669 4.24602 23 4.38581 23 4.9439V21.2896C23 22.314 22.6267 22.9199 21.3203 23.0126L5.87938 23.9443C4.89891 23.9906 4.43199 23.8509 3.91854 23.1986L0.792961 19.1475C0.232336 18.4018 0 17.8436 0 17.1913V2.66202C0 1.82453 0.373301 1.12593 1.44577 1.03325Z"
          fill="#fff"
        />
        <path
          d="M14.7425 0.0544419L1.44577 1.03325C0.373301 1.12593 0 1.82453 0 2.66202V17.1914C0 17.8437 0.232246 18.4018 0.792961 19.1475L3.91854 23.1986C4.43199 23.8509 4.89891 23.9906 5.87938 23.9443L21.3203 23.0126C22.6259 22.9199 23 22.314 23 21.2896V4.9439C23 4.41456 22.7901 4.26205 22.1725 3.81017L22.0661 3.73352L17.8223 0.753039C16.7954 0.00894936 16.3758 -0.0852596 14.7425 0.0544419ZM6.2286 4.67641C4.96782 4.76104 4.68185 4.7802 3.96579 4.19973L2.14511 2.75623C1.96003 2.56943 2.05293 2.33623 2.51913 2.28993L15.3016 1.35904C16.3749 1.26564 16.934 1.63844 17.3538 1.96423L19.546 3.54752C19.6398 3.59453 19.8729 3.87322 19.5925 3.87322L6.39202 4.66522L6.2286 4.67641ZM4.75875 21.1499V7.27361C4.75875 6.66761 4.94536 6.3882 5.50446 6.3411L20.6659 5.45641C21.1801 5.41011 21.4125 5.73581 21.4125 6.3411V20.1247C21.4125 20.7307 21.3187 21.2432 20.4793 21.2896L5.97066 22.1279C5.13125 22.1742 4.75875 21.8956 4.75875 21.1499ZM19.0807 8.0176C19.1736 8.4368 19.0807 8.85599 18.6602 8.9039L17.9609 9.04199V19.2871C17.3538 19.6128 16.7947 19.7989 16.3276 19.7989C15.5812 19.7989 15.3945 19.5657 14.8354 18.8679L10.2625 11.6967V18.6348L11.709 18.9613C11.709 18.9613 11.709 19.7997 10.542 19.7997L7.32433 19.9857C7.23063 19.7989 7.32433 19.3334 7.65047 19.2408L8.49059 19.0084V9.83489L7.32442 9.74068C7.23063 9.32158 7.46368 8.71629 8.11738 8.66919L11.5697 8.43769L16.3277 15.7015V9.27528L15.115 9.13629C15.0212 8.62289 15.3945 8.25008 15.8607 8.20459L19.0807 8.01769L19.0807 8.0176Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Notion.displayName = "Notion";

Notion.metadata = {
  name: "Notion",
  category: "icon/software",
  tags: ["notion", "icon"],
  description: "Notion icon from icon/software category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Notion;
