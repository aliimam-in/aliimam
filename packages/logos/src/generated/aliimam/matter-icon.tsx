/**
 * Auto-generated logo component: Matter Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MatterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MatterIcon = React.forwardRef<SVGSVGElement, MatterIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 251"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M76.0197455,64.2869435 C86.7885123,73.0232585 99.5898013,78.8974948 113.235451,81.364431 L113.235451,8.55613423 L128.063765,1.42108547e-14 L142.880485,8.55613423 L142.880485,81.364431 C156.528852,78.8950158 169.333304,73.0211579 180.107785,64.2869435 L207.028305,79.8572528 C163.246001,123.173374 92.7539991,123.173374 48.9716951,79.8572528 L76.0197455,64.2869435 Z M108.737104,250.214755 C124.350488,190.622833 89.0718235,129.570369 29.6450342,113.339794 L29.6450342,144.492007 C42.598944,149.448802 54.0917434,157.595849 63.0580137,168.17789 L0,204.582039 L0,221.705901 L14.8283139,230.215661 L77.8747339,193.811512 C82.5608843,206.864804 83.8729292,220.890524 81.6890539,234.586477 L108.737104,250.214755 Z M226.412934,113.339794 C167.018422,129.606299 131.778883,190.644738 147.390426,250.214755 L174.368914,234.632852 C172.190086,220.936735 173.502013,206.912275 178.183234,193.857887 L241.18328,230.215661 L256,221.659526 L256,204.582039 L192.941986,168.17789 C201.910643,157.598451 213.402721,149.451915 226.354966,144.492007 L226.412934,113.339794 Z" fill="#231F20"></path>
    </g>
    </svg>
  )
);

MatterIcon.displayName = "MatterIcon";

export const MatterIconMetadata = {
  id: "matter-icon",
  baseId: "matter-icon",
  variant: "default",
  name: "Matter Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 251",
} as const;

export default MatterIcon;
