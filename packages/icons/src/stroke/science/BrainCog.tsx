import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BrainCogProps extends IconProps {
  type?: "stroke";
}

export const BrainCog: IconComponent<BrainCogProps> = React.forwardRef<
  SVGSVGElement,
  BrainCogProps
>(function BrainCog(
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
          d="M10.852 14.772 10.469 15.695M10.852 9.228 10.469 8.305M13.148 14.772 13.53 15.696M13.531 8.305 13.148 9.228M14.772 10.852 15.695 10.469M14.772 13.148 15.695 13.531M17.598 6.5C17.828 6.102 17.964 5.655 17.994 5.196 18.024 4.737 17.948 4.277 17.772 3.852 17.596 3.427 17.324 3.048 16.978 2.744 16.632 2.441 16.221 2.221 15.777 2.102 15.332 1.983 14.866 1.968 14.415 2.058 13.963 2.147 13.539 2.34 13.174 2.62 12.809 2.9 12.513 3.26 12.309 3.673 12.106 4.086 12 4.54 12 5 12.001 4.334 11.78 3.686 11.371 3.16 10.963 2.633 10.392 2.257 9.746 2.092 9.101 1.926 8.419 1.98 7.808 2.244 7.196 2.509 6.691 2.97 6.37 3.554 6.106 4.034 5.979 4.578 6.002 5.125 5.414 5.276 4.868 5.559 4.406 5.953 3.944 6.346 3.577 6.839 3.334 7.396 3.091 7.952 2.977 8.556 3.002 9.162 3.027 9.769 3.189 10.362 3.477 10.896"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.998 5.125C18.5859 5.27622 19.1316 5.55923 19.5939 5.95261C20.0562 6.34599 20.4228 6.83942 20.6661 7.39551C20.9094 7.9516 21.023 8.55577 20.9982 9.16225C20.9734 9.76874 20.8109 10.3616 20.523 10.896"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5049 10.2939C20.3641 10.6429 21.0753 11.2795 21.517 12.095C21.9586 12.9104 22.1032 13.854 21.926 14.7642C21.7488 15.6745 21.2609 16.4949 20.5456 17.0851C19.8304 17.6754 18.9322 17.9987 18.0049 17.9999"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.03203 17.4829C3.91165 18.4006 4.11325 19.3317 4.60248 20.1174C5.09171 20.9031 5.83829 21.4949 6.71496 21.7918C7.59163 22.0887 8.54414 22.0724 9.41013 21.7456C10.2761 21.4189 11.002 20.8019 11.464 19.9999C11.644 19.6889 12.356 19.6889 12.536 19.9999C12.9981 20.8018 13.7238 21.4186 14.5897 21.7453C15.4556 22.072 16.4079 22.0884 17.2845 21.7916C18.161 21.4949 18.9076 20.9034 19.3969 20.1179C19.8863 19.3324 20.0881 18.4015 19.968 17.4839"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 10.291C3.639 10.639 2.925 11.275 2.482 12.091 2.039 12.908 1.894 13.852 2.071 14.764 2.249 15.676 2.738 16.497 3.454 17.088 4.171 17.678 5.071 18.001 6 18M6.002 5.125C6.022 5.609 6.16 6.081 6.402 6.5M9.228 10.852 8.305 10.469M9.228 13.148 8.305 13.531M12 15C13.657 15 15 13.657 15 12 15 10.343 13.657 9 12 9 10.343 9 9 10.343 9 12 9 13.657 10.343 15 12 15Z"
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
          d="M10.852 14.772 10.469 15.695M10.852 9.228 10.469 8.305M13.148 14.772 13.53 15.696M13.531 8.305 13.148 9.228M14.772 10.852 15.695 10.469M14.772 13.148 15.695 13.531M17.598 6.5C17.828 6.102 17.964 5.655 17.994 5.196 18.024 4.737 17.948 4.277 17.772 3.852 17.596 3.427 17.324 3.048 16.978 2.744 16.632 2.441 16.221 2.221 15.777 2.102 15.332 1.983 14.866 1.968 14.415 2.058 13.963 2.147 13.539 2.34 13.174 2.62 12.809 2.9 12.513 3.26 12.309 3.673 12.106 4.086 12 4.54 12 5 12.001 4.334 11.78 3.686 11.371 3.16 10.963 2.633 10.392 2.257 9.746 2.092 9.101 1.926 8.419 1.98 7.808 2.244 7.196 2.509 6.691 2.97 6.37 3.554 6.106 4.034 5.979 4.578 6.002 5.125 5.414 5.276 4.868 5.559 4.406 5.953 3.944 6.346 3.577 6.839 3.334 7.396 3.091 7.952 2.977 8.556 3.002 9.162 3.027 9.769 3.189 10.362 3.477 10.896"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.998 5.125C18.5859 5.27622 19.1316 5.55923 19.5939 5.95261C20.0562 6.34599 20.4228 6.83942 20.6661 7.39551C20.9094 7.9516 21.023 8.55577 20.9982 9.16225C20.9734 9.76874 20.8109 10.3616 20.523 10.896"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5049 10.2939C20.3641 10.6429 21.0753 11.2795 21.517 12.095C21.9586 12.9104 22.1032 13.854 21.926 14.7642C21.7488 15.6745 21.2609 16.4949 20.5456 17.0851C19.8304 17.6754 18.9322 17.9987 18.0049 17.9999"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.03203 17.483C3.91165 18.4008 4.11325 19.3318 4.60248 20.1175C5.09171 20.9033 5.83829 21.495 6.71496 21.7919C7.59163 22.0888 8.54414 22.0725 9.41013 21.7458C10.2761 21.419 11.002 20.802 11.464 20C11.644 19.689 12.356 19.689 12.536 20C12.9981 20.8019 13.7238 21.4187 14.5897 21.7454C15.4556 22.0721 16.4079 22.0885 17.2845 21.7918C18.161 21.495 18.9076 20.9035 19.3969 20.118C19.8863 19.3325 20.0881 18.4017 19.968 17.484"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 10.291C3.639 10.639 2.926 11.275 2.483 12.091 2.039 12.908 1.894 13.852 2.071 14.764 2.249 15.676 2.738 16.497 3.455 17.088 4.171 17.678 5.071 18.001 6 18M6.002 5.125C6.022 5.609 6.16 6.081 6.402 6.5M9.228 10.852 8.305 10.469M9.228 13.148 8.305 13.531M12 15C13.657 15 15 13.657 15 12 15 10.343 13.657 9 12 9 10.343 9 9 10.343 9 12 9 13.657 10.343 15 12 15Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BrainCog doesn't support ${type}`);
  return null;
});

BrainCog.displayName = "BrainCog";

BrainCog.metadata = {
  name: "BrainCog",
  category: "stroke/science",
  tags: ["brain", "cog", "icon"],
  description: "BrainCog icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BrainCog;
