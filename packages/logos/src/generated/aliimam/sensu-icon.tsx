/**
 * Auto-generated logo component: Sensu Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SensuIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SensuIcon = React.forwardRef<SVGSVGElement, SensuIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M256,127.948408 L128.051592,0 L0,127.948408 L128.051592,256 L256,127.948408 Z M128.051592,34.0232702 L175.15174,81.1922074 C159.722263,77.0442026 143.852533,74.9117291 127.989682,74.9117291 C112.058041,74.8979712 96.1951901,77.0098079 80.8276233,81.1922074 L128.051592,34.0232702 Z M86.1037754,179.856939 C98.9456908,172.765441 113.381787,169.06054 128.051592,169.091197 C142.965148,169.091197 157.287115,172.840414 169.999409,179.856939 L128.051592,221.804756 L86.1037754,179.856939 Z M187.49257,162.363778 C169.380304,150.827784 148.695311,145.028832 127.989682,145.028832 C106.906413,145.017692 86.2590877,151.032171 68.479914,162.363778 L35.46097,129.344834 C62.165041,109.726078 94.3103587,99.0774688 128.099745,99.0774688 C161.889131,99.0774688 194.000054,109.657289 220.738519,129.344834 L187.49257,162.363778 Z" fill="#73CC58"></path>
    </g>
    </svg>
  )
);

SensuIcon.displayName = "SensuIcon";

export const SensuIconMetadata = {
  id: "sensu-icon",
  baseId: "sensu-icon",
  variant: "default",
  name: "Sensu Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default SensuIcon;
