import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract15: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract15(
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
        d="M12.0949 18.8122C10.2102 18.8122 8.70325 18.1942 7.57022 16.9601C6.43906 15.726 5.87348 14.0761 5.87348 12.0161C5.87348 9.95605 6.43906 8.2797 7.57022 7.05504C8.70325 5.83037 10.2121 5.21805 12.0949 5.21805C13.7451 5.21805 15.0995 5.6754 16.1581 6.58634C17.2167 7.49917 17.8307 8.73895 18 10.3095H14.826C14.5916 8.69738 13.6819 7.89228 12.0949 7.89228C11.1219 7.89228 10.3684 8.24568 9.84 8.95629C9.30977 9.66501 9.04744 10.6856 9.04744 12.0161C9.04744 13.3466 9.31163 14.335 9.84 15.0437C10.3684 15.7524 11.1219 16.1077 12.0949 16.1077C12.8763 16.1077 13.5181 15.8942 14.0149 15.4633C14.5116 15.0343 14.813 14.4106 14.9191 13.5941H18.0298C17.8828 15.1836 17.2726 16.4517 16.2046 17.3966C15.1367 18.3416 13.7637 18.8141 12.093 18.8141L12.0949 18.8122ZM12 21.1651C14.6028 21.1651 16.7628 20.2844 18.4744 18.5249C20.1675 16.7635 21.0139 14.5939 21.0139 12.0179C21.0139 9.442 20.1675 7.26104 18.4744 5.47696C16.7609 3.73635 14.6028 2.86699 12 2.86699C9.39721 2.86699 7.28001 3.73635 5.58698 5.47696C3.89396 7.25915 3.04744 9.44011 3.04744 12.0179C3.04744 14.5958 3.89396 16.7654 5.58698 18.5249C7.25954 20.2863 9.39721 21.1651 12 21.1651ZM20.5712 20.5207C18.2846 22.8415 15.4288 24 12 24C8.57116 24 5.71348 22.8396 3.42882 20.5207C1.14231 18.1999 0 15.3669 0 12.0161C0 8.66524 1.14231 5.79636 3.42882 3.47932C5.71348 1.15851 8.57116 0 12 0C15.4288 0 18.2846 1.1604 20.5712 3.47932C22.8558 5.79825 24 8.64634 24 12.0161C24 15.3858 22.8558 18.2433 20.5712 20.5207Z"
        fill="currentColor"
      />
    </svg>
  );
});

Abstract15.displayName = "Abstract15";

Abstract15.metadata = {
  name: "Abstract15",
  category: "shapes/abstract",
  tags: ["abstract", "15", "icon"],
  description: "Abstract15 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract15;
