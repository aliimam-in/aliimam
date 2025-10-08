import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MemoryStickProps extends IconProps {
  type?: "stroke";
}

export const MemoryStick: IconComponent<MemoryStickProps> = React.forwardRef<
  SVGSVGElement,
  MemoryStickProps
>(function MemoryStick(
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
          d="M6 19V16M10 19V16M14 19V16M18 19V16M8 11V9M16 11V9M12 11V9M2 15H22M2 7C2 6.47 2.211 5.961 2.586 5.586 2.961 5.211 3.47 5 4 5H20C20.53 5 21.039 5.211 21.414 5.586 21.789 5.961 22 6.47 22 7V8.1C21.586 8.222 21.222 8.475 20.964 8.821 20.705 9.166 20.565 9.587 20.565 10.019 20.565 10.45 20.705 10.871 20.964 11.216 21.222 11.562 21.586 11.815 22 11.937V17C22 17.53 21.789 18.039 21.414 18.414 21.039 18.789 20.53 19 20 19H4C3.47 19 2.961 18.789 2.586 18.414 2.211 18.039 2 17.53 2 17V11.9C2.414 11.778 2.778 11.525 3.036 11.179 3.295 10.834 3.435 10.413 3.435 9.982 3.435 9.55 3.295 9.129 3.036 8.784 2.778 8.438 2.414 8.185 2 8.063V7Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
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
          d="M6 19V16M10 19V16M14 19V16M18 19V16M8 11V9M16 11V9M12 11V9M2 15H22M2 7C2 6.47 2.211 5.961 2.586 5.586 2.961 5.211 3.47 5 4 5H20C20.53 5 21.039 5.211 21.414 5.586 21.789 5.961 22 6.47 22 7V8.1C21.586 8.222 21.222 8.475 20.964 8.821 20.705 9.166 20.565 9.587 20.565 10.019 20.565 10.45 20.705 10.871 20.964 11.216 21.222 11.562 21.586 11.815 22 11.937V17C22 17.53 21.789 18.039 21.414 18.414 21.039 18.789 20.53 19 20 19H4C3.47 19 2.961 18.789 2.586 18.414 2.211 18.039 2 17.53 2 17V11.9C2.414 11.778 2.778 11.525 3.036 11.179 3.295 10.834 3.435 10.413 3.435 9.982 3.435 9.55 3.295 9.129 3.036 8.784 2.778 8.438 2.414 8.185 2 8.063V7Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`MemoryStick doesn't support ${type}`);
  return null;
});

MemoryStick.displayName = "MemoryStick";

MemoryStick.metadata = {
  name: "MemoryStick",
  category: "stroke/gaming",
  tags: ["memory", "stick", "icon"],
  description: "MemoryStick icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MemoryStick;
