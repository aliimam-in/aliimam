import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FolderSync: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FolderSync(
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
        d="M9 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21072 3.46957 3 4 3H7.9C8.23449 2.99673 8.56445 3.07739 8.8597 3.23462C9.15495 3.39186 9.40604 3.62063 9.59 3.9L10.4 5.1C10.5821 5.37653 10.83 5.60353 11.1215 5.76061C11.413 5.91769 11.7389 5.99995 12.07 6H20C20.5304 6 21.0391 6.21072 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V8.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10V14H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14 13.535 12.395C14.109 11.843 14.807 11.437 15.569 11.209 16.332 10.981 17.139 10.939 17.921 11.086 18.704 11.232 19.44 11.564 20.068 12.053 20.697 12.541 21.2 13.173 21.535 13.895M22 22V18H18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 18L20.465 19.605C19.8909 20.1567 19.1934 20.5633 18.4305 20.7911C17.6676 21.0188 16.8614 21.0611 16.0788 20.9144C15.2963 20.7676 14.5601 20.4362 13.9315 19.9475C13.303 19.4589 12.8002 18.8272 12.465 18.105"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FolderSync.displayName = "FolderSync";

FolderSync.metadata = {
  name: "FolderSync",
  category: "stroke/arrows",
  tags: ["folder", "sync", "icon"],
  description: "FolderSync icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderSync;
