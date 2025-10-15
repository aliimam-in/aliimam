import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Croatia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Croatia(
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
      viewBox="0 0 32 32"
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
      <path d="M1 11H31V21H1V11Z" fill="#fff" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
        fill="#ea3323"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
        fill="#100e91"
      />
      <path
        d="M16.001 22.0001C18.525 22.0001 20.591 19.9351 20.591 17.4101V11.9561H11.412V17.4101C11.412 19.9341 13.477 22.0001 16.002 22.0001H16.001Z"
        fill="#ea3323"
      />
      <path
        d="M16.001 21.9259C18.477 21.9259 20.503 19.8999 20.503 17.4239V12.0439H11.499V17.4239C11.499 19.8999 13.525 21.9259 16.001 21.9259Z"
        fill="#fff"
      />
      <path
        d="M13.399 12.214H11.666V14.118H13.399V12.214ZM13.399 16.021H15.132V14.117H13.399V16.021ZM11.667 17.414C11.667 17.587 11.678 17.757 11.698 17.925H13.4V16.021H11.667V17.414ZM16.865 16.021H15.132V17.925H16.865V16.021Z"
        fill="#ea3323"
      />
      <path d="M16.865 19.8281H18.598V17.9241H16.865V19.8281Z" fill="red" />
      <path
        d="M18.598 20.87C18.982 20.58 19.317 20.228 19.587 19.829H18.598V20.87ZM13.4 19.828H15.133V17.924H13.4V19.828ZM12.409 19.828C12.68 20.228 13.015 20.58 13.4 20.871V19.828H12.409Z"
        fill="#ea3323"
      />
      <path
        d="M16.3 21.732C16.492 21.719 16.68 21.693 16.865 21.655V19.828H15.132V21.655C15.316 21.693 15.504 21.718 15.695 21.732 15.897 21.744 16.099 21.744 16.3 21.732ZM20.298 17.925C20.318 17.757 20.329 17.586 20.329 17.412V16.021H18.598V17.925H20.298ZM16.865 16.021H18.598V14.117H16.865V16.021ZM16.865 12.214H15.132V14.118H16.865V12.214ZM20.329 14.117V12.213H18.598V14.117H20.329Z"
        fill="#ea3323"
      />
      <path
        d="M20.426 11.9001L21.5 9.46511L20.682 8.14311L19.326 8.64511L18.374 7.55711L17.119 8.27611L16 7.36011L14.881 8.27611L13.626 7.55711L12.674 8.64511L11.318 8.14311L10.499 9.46511L11.572 11.9011C12.924 11.2891 14.423 10.9481 15.999 10.9481C17.575 10.9481 19.073 11.2891 20.425 11.9001H20.426Z"
        fill="#fff"
      />
      <path
        d="M12.705 8.75308L12.703 8.75508L11.358 8.25708L10.605 9.47208L10.893 10.1271L11.623 11.7851C12.168 11.5441 12.737 11.3461 13.324 11.1971L12.705 8.75308Z"
        fill="#0093dd"
      />
      <path
        d="M14.893 8.38703L14.891 8.38903L13.647 7.67603L12.705 8.75303L13.325 11.197C13.901 11.05 14.494 10.95 15.102 10.9L14.894 8.38703H14.893Z"
        fill="#100e91"
      />
      <path
        d="M17.112 8.38793L17.109 8.38993L16 7.48193L14.893 8.38893L15.101 10.9019C15.397 10.8779 15.697 10.8639 16 10.8639C16.303 10.8639 16.605 10.8769 16.903 10.9019L17.112 8.38893V8.38793Z"
        fill="#0093dd"
      />
      <path
        d="M19.3 8.75402H19.297L18.353 7.67603L17.112 8.38703L16.903 10.9C17.511 10.95 18.104 11.051 18.68 11.197L19.301 8.75303L19.3 8.75402Z"
        fill="#100e91"
      />
      <path
        d="M20.375 11.7851L21.395 9.47306L20.642 8.25806L19.3 8.75506L18.679 11.1991C19.264 11.3481 19.831 11.5461 20.374 11.7861L20.375 11.7851Z"
        fill="#0093dd"
      />
    </svg>
  );
});

Croatia.displayName = "Croatia";

Croatia.metadata = {
  name: "Croatia",
  category: "symbols/flags",
  tags: ["croatia", "icon"],
  description: "Croatia icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Croatia;
