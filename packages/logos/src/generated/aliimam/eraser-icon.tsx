/**
 * Auto-generated logo component: Eraser Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EraserIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const EraserIcon = React.forwardRef<SVGSVGElement, EraserIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 98"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M121.500561,97.0410617 L7.54124896,97.0410617 C1.6971714,97.0410617 -1.92450819,88.9476849 1.07983839,82.6171185 L38.1608502,4.64770554 C39.5602341,1.76292544 41.9883324,0 44.6633306,0 L121.500561,0 L121.500561,97.0410617 Z" fill="#EB043B"></path>
        <path d="M134.540672,0 L248.459338,0 C254.302708,0 257.924192,8.09344068 254.920491,14.4239431 L217.838629,92.39342 C216.481638,95.2379889 214.012638,97.0010123 211.377902,97.0010123 L134.540672,97.0010123 L134.540672,0 Z" fill="#0085FF"></path>
    </g>
    </svg>
  )
);

EraserIcon.displayName = "EraserIcon";

export const EraserIconMetadata = {
  id: "eraser-icon",
  baseId: "eraser-icon",
  variant: "default",
  name: "Eraser Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 98",
} as const;

export default EraserIcon;
