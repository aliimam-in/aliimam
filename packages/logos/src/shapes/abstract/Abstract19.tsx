import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract19: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract19(
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
        d="M23.3732 11.376H15.5777C14.8157 11.376 14.4347 10.4539 14.9738 9.91474L20.4852 4.40295C20.7309 4.15908 20.7309 3.76089 20.4852 3.51702C20.2413 3.27125 19.8432 3.27125 19.5993 3.51702L14.0879 9.02882C13.5488 9.568 12.6268 9.18694 12.6268 8.42295V0.626812C12.6268 0.280063 12.3467 0 12 0C11.6533 0 11.3732 0.280063 11.3732 0.626812V8.42295C11.3732 9.18504 10.4531 9.56609 9.91396 9.02691L4.4026 3.51513C4.15685 3.26935 3.76059 3.26935 3.51483 3.51513C3.27099 3.75899 3.27099 4.15718 3.51483 4.40104L9.0262 9.91283C9.56533 10.452 9.18431 11.3741 8.42228 11.3741H0.626774C0.280052 11.3741 0 11.6542 0 12.001C0 12.3477 0.280052 12.6278 0.626774 12.6278H8.42228C9.18431 12.6278 9.56533 13.548 9.0262 14.0872L3.51483 19.599C3.27099 19.8428 3.27099 20.241 3.51483 20.4868C3.76059 20.7306 4.15685 20.7306 4.4026 20.4868L9.91396 14.9731C10.4531 14.4339 11.3732 14.815 11.3732 15.577V23.3732C11.3732 23.7199 11.6552 24 12 24C12.3448 24 12.6268 23.718 12.6268 23.3732V15.577C12.6268 14.815 13.5488 14.4339 14.0879 14.9712L19.5993 20.4849C19.8432 20.7288 20.2413 20.7288 20.4852 20.4849C20.7309 20.2391 20.7309 19.8428 20.4852 19.597L14.9738 14.0853C14.4347 13.5461 14.8157 12.6259 15.5777 12.6259H23.3732C23.7199 12.6259 24 12.3439 24 11.999C24 11.6542 23.718 11.3722 23.3732 11.3722V11.376Z"
        fill="currentColor"
      />
    </svg>
  );
});

Abstract19.displayName = "Abstract19";

Abstract19.metadata = {
  name: "Abstract19",
  category: "shapes/abstract",
  tags: ["abstract", "19", "icon"],
  description: "Abstract19 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract19;
