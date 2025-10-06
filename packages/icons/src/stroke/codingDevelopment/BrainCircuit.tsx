import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BrainCircuit: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BrainCircuit(
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
        d="M12.0001 4.99999C12.0013 4.60002 11.9224 4.20385 11.7683 3.83479C11.6141 3.46572 11.3877 3.13122 11.1023 2.85093C10.817 2.57065 10.4785 2.35026 10.1067 2.20272C9.73497 2.05518 9.33745 1.98347 8.93757 1.9918C8.53769 2.00014 8.14351 2.08835 7.77821 2.25126C7.41292 2.41416 7.08389 2.64847 6.81048 2.94039C6.53706 3.23232 6.32478 3.57597 6.18613 3.95114C6.04747 4.32631 5.98523 4.72542 6.00307 5.12499C5.41528 5.27613 4.86958 5.55904 4.40731 5.9523C3.94503 6.34556 3.57831 6.83886 3.33492 7.39484C3.09152 7.95081 2.97783 8.55488 3.00246 9.1613C3.02709 9.76772 3.18939 10.3606 3.47707 10.895C2.97125 11.3059 2.5735 11.8342 2.31841 12.4339C2.06333 13.0336 1.95863 13.6866 2.01344 14.336C2.06824 14.9854 2.28089 15.6115 2.63288 16.16C2.98487 16.7085 3.46554 17.1626 4.03307 17.483C3.96299 18.0252 4.00481 18.5761 4.15596 19.1015C4.30711 19.627 4.56437 20.1158 4.91186 20.5379C5.25935 20.9601 5.68968 21.3065 6.17629 21.5557C6.6629 21.805 7.19545 21.9519 7.74105 21.9873C8.28665 22.0227 8.83372 21.9459 9.34846 21.7616C9.86321 21.5773 10.3347 21.2894 10.7338 20.9157C11.133 20.5421 11.4512 20.0906 11.669 19.5891C11.8868 19.0876 11.9995 18.5467 12.0001 18V4.99999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13C9.84 12.705 10.573 12.167 11.107 11.455 11.641 10.743 11.952 9.889 12 9M6.003 5.125C6.023 5.609 6.159 6.081 6.401 6.5M3.477 10.896C3.66 10.747 3.856 10.615 4.062 10.5M6 18C5.311 18 4.633 17.823 4.033 17.484M12 13H16M12 18H18C18.53 18 19.039 18.211 19.414 18.586 19.789 18.961 20 19.47 20 20V21M12 8H20M16 8V5C16 4.47 16.211 3.961 16.586 3.586 16.961 3.211 17.47 3 18 3M16 13.5C16.276 13.5 16.5 13.276 16.5 13 16.5 12.724 16.276 12.5 16 12.5 15.724 12.5 15.5 12.724 15.5 13 15.5 13.276 15.724 13.5 16 13.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 3.5C18.276 3.5 18.5 3.276 18.5 3 18.5 2.724 18.276 2.5 18 2.5 17.724 2.5 17.5 2.724 17.5 3 17.5 3.276 17.724 3.5 18 3.5ZM20 21.5C20.276 21.5 20.5 21.276 20.5 21 20.5 20.724 20.276 20.5 20 20.5 19.724 20.5 19.5 20.724 19.5 21 19.5 21.276 19.724 21.5 20 21.5ZM20 8.5C20.276 8.5 20.5 8.276 20.5 8 20.5 7.724 20.276 7.5 20 7.5 19.724 7.5 19.5 7.724 19.5 8 19.5 8.276 19.724 8.5 20 8.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BrainCircuit.displayName = "BrainCircuit";

BrainCircuit.metadata = {
  name: "BrainCircuit",
  category: "stroke/codingDevelopment",
  tags: ["brain", "circuit", "icon"],
  description: "BrainCircuit icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BrainCircuit;
