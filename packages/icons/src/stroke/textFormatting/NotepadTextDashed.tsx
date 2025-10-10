import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const NotepadTextDashed: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function NotepadTextDashed(
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
        d="M8 2V6M12 2V6M16 2V6M16 4H18C18.53 4 19.039 4.211 19.414 4.586 19.789 4.961 20 5.47 20 6V8M20 12V14M20 18V20C20 20.53 19.789 21.039 19.414 21.414 19.039 21.789 18.53 22 18 22H17M13 22H11M7 22H6C5.47 22 4.961 21.789 4.586 21.414 4.211 21.039 4 20.53 4 20V18M4 14V12M4 8V6C4 5.47 4.211 4.961 4.586 4.586 4.961 4.211 5.47 4 6 4H8M8 10H14M8 14H16M8 18H13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

NotepadTextDashed.displayName = "NotepadTextDashed";

NotepadTextDashed.metadata = {
  name: "NotepadTextDashed",
  category: "stroke/textFormatting",
  tags: ["notepad", "text", "dashed", "icon"],
  description: "NotepadTextDashed icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NotepadTextDashed;
