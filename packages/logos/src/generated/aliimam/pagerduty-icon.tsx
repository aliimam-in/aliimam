/**
 * Auto-generated logo component: Pagerduty Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PagerdutyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const PagerdutyIcon = React.forwardRef<SVGSVGElement, PagerdutyIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 372"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M54.5538972,272.557214 L54.5538972,371.475954 L0,371.475954 L0,272.557214 L54.5538972,272.557214 Z M109.046548,0.000774792703 C155.791517,0.0522613599 176.052007,2.70434494 204.842454,18.2553897 C236.470978,35.2371476 256,68.9883914 256,111.018242 C256,150.076285 240.079602,183.827529 209.512438,203.993367 C181.492537,222.6733 149.651741,225.220564 107.197347,225.220564 L107.197347,225.220564 L0,225.220564 L0,0 Z M117.785558,47.7544491 L116.112769,47.761194 L54.5538972,48.185738 L54.5538972,178.096186 L119.721393,178.096186 C165.359867,178.096186 200.172471,159.840796 200.172471,111.655058 C200.172471,66.8656716 172.15257,47.3366501 116.112769,47.761194 Z" fill="#06AC38"></path>
    </g>
    </svg>
  )
);

PagerdutyIcon.displayName = "PagerdutyIcon";

export const PagerdutyIconMetadata = {
  id: "pagerduty-icon",
  baseId: "pagerduty-icon",
  variant: "default",
  name: "Pagerduty Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 372",
} as const;

export default PagerdutyIcon;
