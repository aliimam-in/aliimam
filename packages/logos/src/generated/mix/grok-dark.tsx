/**
 * Auto-generated logo component: Grok Dark (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GrokDarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const GrokDarkLogo = React.forwardRef<SVGSVGElement, GrokDarkLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M395.479 633.828L735.91 381.105C752.599 368.715 776.454 373.548 784.406 392.792C826.26 494.285 807.561 616.253 724.288 699.996C641.016 783.739 525.151 802.104 419.247 760.277L303.556 814.143C469.49 928.202 670.987 899.995 796.901 773.282C896.776 672.843 927.708 535.937 898.785 412.476L899.047 412.739C857.105 231.37 909.358 158.874 1016.4 10.6326C1018.93 7.11771 1021.47 3.60279 1024 0L883.144 141.651V141.212L395.392 633.916" fill="white" />
<path d="M325.226 695.251C206.128 580.84 226.662 403.776 328.285 301.668C403.431 226.097 526.549 195.254 634.026 240.596L749.454 186.994C728.657 171.88 702.007 155.623 671.424 144.2C533.19 86.9942 367.693 115.465 255.323 228.382C147.234 337.081 113.244 504.215 171.613 646.833C215.216 753.423 143.739 828.818 71.7385 904.916C46.2237 931.893 20.6216 958.87 0 987.429L325.139 695.339" fill="white" />
    </svg>
  )
);

GrokDarkLogo.displayName = "GrokDarkLogo";

export const GrokDarkLogoMetadata = {
  id: "grok-dark",
  baseId: "grok-dark",
  variant: "default",
  name: "Grok Dark",
  category: "mix",
  tags: [],
  viewBox: "0 0 1024 1024",
} as const;

export default GrokDarkLogo;
