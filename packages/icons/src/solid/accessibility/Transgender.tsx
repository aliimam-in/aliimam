import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TransgenderProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Transgender: IconComponent<TransgenderProps> = React.forwardRef<
  SVGSVGElement,
  TransgenderProps
>(function Transgender(
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
  if (type === "solid") {
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
        <g clipPath="url(#undefined-clip0_70_3488)">
          <path
            d="M5.35742 0.5C6.18566 0.500228 6.85742 1.17171 6.85742 2C6.85742 2.74572 6.31259 3.36243 5.59961 3.47852L6.5 4.37891L6.93945 3.93945C7.52524 3.35367 8.47476 3.35367 9.06055 3.93945C9.64633 4.52524 9.64633 5.47476 9.06055 6.06055L8.62109 6.5L10.2305 8.10938C10.2988 8.17766 10.3588 8.25111 10.4111 8.32812C10.8982 8.11709 11.4354 8 12 8C12.5643 8 13.1011 8.11731 13.5879 8.32812C13.6403 8.25095 13.7011 8.17779 13.7695 8.10938L18.3789 3.5H18C17.1716 3.5 16.5 2.82843 16.5 2C16.5 1.17157 17.1716 0.5 18 0.5H22C22.0495 0.500003 22.0991 0.501957 22.1484 0.506836L22.1533 0.507812C22.2278 0.515372 22.3003 0.529807 22.3711 0.547852C22.4012 0.555524 22.4312 0.563671 22.4609 0.573242C22.5409 0.599038 22.618 0.630732 22.6914 0.668945C22.6984 0.672574 22.705 0.676919 22.7119 0.680664C22.7461 0.69917 22.7799 0.718234 22.8125 0.739258C22.8258 0.747864 22.8385 0.75753 22.8516 0.766602C22.9213 0.814808 22.9864 0.868714 23.0469 0.927734C23.0511 0.931901 23.0563 0.935226 23.0605 0.939453C23.0653 0.944182 23.0696 0.949325 23.0742 0.954102C23.0995 0.980051 23.1231 1.00744 23.1465 1.03516C23.1561 1.04651 23.1656 1.05777 23.1748 1.06934C23.1922 1.09123 23.2085 1.11386 23.2246 1.13672C23.2375 1.15494 23.2507 1.17276 23.2627 1.19141C23.2785 1.21607 23.2922 1.24196 23.3066 1.26758C23.3149 1.28237 23.3243 1.29652 23.332 1.31152C23.3467 1.33982 23.3592 1.36913 23.3721 1.39844C23.3785 1.41315 23.3856 1.42751 23.3916 1.44238C23.4608 1.61488 23.5 1.80276 23.5 2V6C23.5 6.82843 22.8284 7.5 22 7.5C21.1716 7.5 20.5 6.82843 20.5 6V5.62109L15.8906 10.2305C15.8222 10.2989 15.7481 10.3587 15.6709 10.4111C15.882 10.8983 16 11.4353 16 12C16 13.6888 14.9526 15.1311 13.4727 15.7178C13.4901 15.8092 13.5 15.9035 13.5 16V18.5H14C14.8284 18.5 15.5 19.1716 15.5 20C15.5 20.8284 14.8284 21.5 14 21.5H13.5V22C13.5 22.8284 12.8284 23.5 12 23.5C11.1716 23.5 10.5 22.8284 10.5 22V21.5H10C9.17157 21.5 8.5 20.8284 8.5 20C8.5 19.1716 9.17157 18.5 10 18.5H10.5V16C10.5 15.9035 10.509 15.8092 10.5264 15.7178C9.04687 15.1308 8 13.6885 8 12C8 11.4354 8.11709 10.8982 8.32812 10.4111C8.2511 10.3588 8.17766 10.2988 8.10938 10.2305L6.5 8.62109L6.06055 9.06055C5.47476 9.64633 4.52524 9.64633 3.93945 9.06055C3.35367 8.47476 3.35367 7.52524 3.93945 6.93945L4.37891 6.5L3.47754 5.59863C3.36098 6.31106 2.74532 6.85547 2 6.85547C1.17173 6.85547 0.500253 6.18368 0.5 5.35547V2C0.5 1.87046 0.516979 1.7449 0.547852 1.625C0.553061 1.60475 0.558385 1.58451 0.564453 1.56445C0.576248 1.52553 0.590665 1.48771 0.605469 1.4502C0.608259 1.44311 0.610379 1.43576 0.613281 1.42871C0.646059 1.34923 0.685118 1.27309 0.730469 1.20117C0.736768 1.19118 0.742465 1.18077 0.749023 1.1709C0.860008 1.00378 1.00378 0.860008 1.1709 0.749023C1.18077 0.742465 1.19118 0.736768 1.20117 0.730469C1.22866 0.713134 1.2565 0.696224 1.28516 0.680664L1.30273 0.671875C1.31164 0.667196 1.3211 0.663667 1.33008 0.65918C1.36245 0.642976 1.39506 0.62716 1.42871 0.613281C1.431 0.612337 1.43325 0.611284 1.43555 0.610352L1.55371 0.567383C1.55725 0.566281 1.5609 0.565529 1.56445 0.564453C1.58451 0.558385 1.60475 0.553061 1.625 0.547852C1.65273 0.540711 1.68065 0.533891 1.70898 0.52832C1.71061 0.528 1.71224 0.527659 1.71387 0.527344L1.84668 0.507812C1.848 0.507678 1.84926 0.506967 1.85059 0.506836C1.90023 0.501896 1.95015 0.5 2 0.5H5.35742Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_70_3488">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
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
          d="M12 16V22M14 20H10M18 2H22V6M2 2 9.17 9.17M2 5.355V2H5.357M22 2 14.83 9.17M8 5 5 8M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16Z"
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
          d="M12 16V22M14 20H10M18 2H22V6M2 2 9.17 9.17M2 5.355V2H5.357M22 2 14.83 9.17M8 5 5 8M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Transgender doesn't support ${type}`);
  return null;
});

Transgender.displayName = "Transgender";

Transgender.metadata = {
  name: "Transgender",
  category: "solid/accessibility",
  tags: ["transgender", "icon"],
  description: "Transgender icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Transgender;
