import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RadioProps extends IconProps {
  type?: "stroke";
}

export const Radio: IconComponent<RadioProps> = React.forwardRef<
  SVGSVGElement,
  RadioProps
>(function Radio(
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
          d="M16.247 7.761C17.37 8.886 18.001 10.411 18.001 12 18.001 13.59 17.37 15.114 16.247 16.239M19.075 4.933C20.948 6.808 22 9.35 22 12 22 14.65 20.948 17.192 19.075 19.067M4.925 19.067C3.052 17.192 2 14.65 2 12 2 9.35 3.052 6.808 4.925 4.933M7.753 16.239C6.63 15.114 5.999 13.59 5.999 12 5.999 10.411 6.63 8.886 7.753 7.761M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14Z"
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
          d="M16.247 7.761C17.37 8.886 18.001 10.411 18.001 12 18.001 13.59 17.37 15.114 16.247 16.239M19.075 4.933C20.948 6.808 22 9.35 22 12 22 14.65 20.948 17.192 19.075 19.067M4.925 19.067C3.052 17.192 2 14.65 2 12 2 9.35 3.052 6.808 4.925 4.933M7.753 16.239C6.63 15.114 5.999 13.59 5.999 12 5.999 10.411 6.63 8.886 7.753 7.761M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14Z"
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
          d="M16.247 7.761C17.37 8.886 18.001 10.411 18.001 12 18.001 13.59 17.37 15.114 16.247 16.239M19.075 4.933C20.948 6.808 22 9.35 22 12 22 14.65 20.948 17.192 19.075 19.067M4.925 19.067C3.052 17.192 2 14.65 2 12 2 9.35 3.052 6.808 4.925 4.933M7.753 16.239C6.63 15.114 5.999 13.59 5.999 12 5.999 10.411 6.63 8.886 7.753 7.761M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Radio doesn't support ${type}`);
  return null;
});

Radio.displayName = "Radio";

Radio.metadata = {
  name: "Radio",
  category: "stroke/social",
  tags: ["radio", "icon"],
  description: "Radio icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Radio;
