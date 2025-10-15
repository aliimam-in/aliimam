import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Eswatini: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Eswatini(
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
      <path
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#3c5ebb"
      />
      <path d="M31 22V10L1 10V22H31Z" fill="#b30403" />
      <path
        d="M31 8H1V10H31V8ZM31 22H1V24H31V22ZM6.849 14.225H25.012L25.849 14.52 27.107 14.077 25.849 13.633 25.01 13.929H6.849C6.76 13.929 6.688 13.995 6.688 14.077 6.688 14.159 6.76 14.225 6.849 14.225ZM5.644 15.113H23.807L24.644 15.408 25.902 14.964 24.644 14.521 23.805 14.817H5.644C5.555 14.817 5.483 14.883 5.483 14.965 5.483 15.047 5.555 15.113 5.644 15.113ZM28.358 15.779H3.642C3.522 15.779 3.424 15.878 3.424 16 3.424 16.123 3.522 16.222 3.642 16.222H28.358C28.479 16.222 28.576 16.123 28.576 16 28.576 15.878 28.478 15.779 28.358 15.779Z"
        fill="#ffdb01"
      />
      <path
        d="M23.26 16.0001C21.7804 17.4796 19.8076 20.4389 15.8618 20.4389C12.4094 20.4389 9.94359 17.4797 8.46359 16.0001C9.94319 14.5203 12.4091 11.5613 15.8618 11.5613C19.8073 11.5613 21.78 14.5205 23.26 16.0001Z"
        fill="#fff"
      />
      <path
        d="M15.3453 13.1052C15.7389 13.5479 15.4102 13.7264 15.8269 13.7555C16.2663 13.7878 16.0172 14.2233 16.3868 14.2385C16.6452 14.2498 16.361 15.282 16.6097 15.6227C16.8631 15.9778 17.0753 15.7268 17.0798 15.9833C17.0842 16.2487 16.3901 16.2219 16.378 17.0392C16.3576 17.5103 15.7923 17.5404 15.7653 17.8435C15.7317 18.1286 16.8791 18.2886 16.8638 18.5438C16.8481 18.7982 15.625 18.7584 15.5717 19.0486C15.5444 19.3093 17.252 19.5229 17.3893 20.2766C17.1345 20.3599 16.4095 20.4383 15.8616 20.4388C12.4097 20.4413 9.9434 17.4794 8.4639 15.9999C9.9435 14.5202 12.4094 11.561 15.8621 11.561C15.8621 11.561 14.8368 12.4976 15.3453 13.1052Z"
        fill="currentColor"
      />
    </svg>
  );
});

Eswatini.displayName = "Eswatini";

Eswatini.metadata = {
  name: "Eswatini",
  category: "symbols/flags",
  tags: ["eswatini", "icon"],
  description: "Eswatini icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Eswatini;
