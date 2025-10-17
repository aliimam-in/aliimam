import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower11: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower11(
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
      <g clipPath="url(#undefined-clip0_2068_577)">
        <path
          d="M9.36733 3.9C8.80319 2.1 9.56862 0 12 0C14.4313 0 15.1968 2.1 14.6327 3.9C14.2353 5.16772 13.1851 8.07232 12.5987 9.67931C12.4906 9.97539 12.7088 10.2869 13.0089 10.4437C13.3086 10.6004 13.7085 10.6072 13.9401 10.3754C15.1981 9.11651 17.4778 6.84744 18.5032 5.90468C19.9588 4.56641 22.3688 4.11106 23.5845 5.99998C24.8002 7.88889 23.1556 9.5336 21.1359 9.9953C19.7133 10.3205 16.3838 10.9569 14.5394 11.3048C14.1996 11.3689 14.0065 11.6886 14.0065 12C14.0065 12.3114 14.1996 12.6311 14.5393 12.6952C16.3838 13.0431 19.7133 13.6795 21.1359 14.0047C23.1556 14.4664 24.8002 16.1111 23.5845 18C22.3689 19.8889 19.9588 19.4336 18.5032 18.0953C17.4778 17.1525 15.1981 14.8835 13.9401 13.6246C13.7085 13.3928 13.3086 13.3995 13.0089 13.5563C12.7088 13.7131 12.4907 14.0246 12.5987 14.3207C13.1851 15.9277 14.2353 18.8323 14.6327 20.1C15.1968 21.9 14.4314 24 12 24C9.56866 24 8.80317 21.9 9.36734 20.1C9.76468 18.8323 10.8149 15.9277 11.4013 14.3207C11.5093 14.0246 11.2912 13.7131 10.9911 13.5563C10.6914 13.3996 10.2915 13.3928 10.0599 13.6246C8.80192 14.8835 6.52219 17.1526 5.49678 18.0953C4.04117 19.4336 1.63116 19.8889 0.415484 18C-0.800194 16.1111 0.844356 14.4664 2.86412 14.0047C4.2867 13.6795 7.61616 13.0431 9.46064 12.6952C9.80037 12.6311 9.99349 12.3114 9.99349 12C9.99349 11.6886 9.80037 11.3689 9.46064 11.3048C7.61616 10.9569 4.28668 10.3205 2.86411 9.99531C0.844358 9.53359 -0.800223 7.88893 0.415456 6.00002C1.63113 4.1111 4.04117 4.5664 5.49677 5.9047C6.52217 6.84746 8.8019 9.11652 10.0599 10.3754C10.2915 10.6072 10.6914 10.6005 10.9911 10.4437C11.2912 10.2869 11.5093 9.97539 11.4013 9.6793C10.8149 8.07232 9.76465 5.16772 9.36733 3.9Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_577">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Flower11.displayName = "Flower11";

Flower11.metadata = {
  name: "Flower11",
  category: "shapes/flower",
  tags: ["flower", "11", "icon"],
  description: "Flower11 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower11;
