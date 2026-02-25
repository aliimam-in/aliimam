/**
 * Auto-generated logo component: Tidal Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TidalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TidalIcon = React.forwardRef<SVGSVGElement, TidalIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 171"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M128.003612,85.338752 L170.668473,128.009031 L128.003612,170.675698 L85.3351396,128.009031 L128.003612,85.338752 Z M42.6666667,0.00180622583 L85.3351396,42.6702791 L42.6666667,85.3405582 L0,42.6702791 L42.6666667,0.00180622583 Z M213.333333,0.00180622583 L256,42.6702791 L213.333333,85.3405582 L170.666667,42.6702791 L128.003612,85.338752 L85.3351396,42.6684729 L128.003612,-2.84217094e-14 L170.666667,42.6648604 L213.333333,0.00180622583 Z" fill="#0A0B09"></path>
    </g>
    </svg>
  )
);

TidalIcon.displayName = "TidalIcon";

export const TidalIconMetadata = {
  id: "tidal-icon",
  baseId: "tidal-icon",
  variant: "default",
  name: "Tidal Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 171",
} as const;

export default TidalIcon;
