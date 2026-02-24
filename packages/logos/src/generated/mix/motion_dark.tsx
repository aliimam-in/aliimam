/**
 * Auto-generated logo component: Motion (dark)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MotionDarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MotionDark = React.forwardRef<SVGSVGElement, MotionDarkProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 1103 386"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#FFF312" d="M416.473 0 198.54 385.66H0L170.17 84.522C196.549 37.842 262.377 0 317.203 0Zm486.875 96.415c0-53.249 44.444-96.415 99.27-96.415 54.826 0 99.27 43.166 99.27 96.415 0 53.248-44.444 96.415-99.27 96.415-54.826 0-99.27-43.167-99.27-96.415ZM453.699 0h198.54L434.306 385.66h-198.54Zm234.492 0h198.542L716.56 301.138c-26.378 46.68-92.207 84.522-147.032 84.522h-99.27Z" />
    </svg>
  )
);

MotionDark.displayName = "MotionDark";

export const MotionDarkMetadata = {
  id: "motion_dark",
  baseId: "motion",
  variant: "dark",
  name: "Motion",
  category: "mix",
  tags: [],
  viewBox: "0 0 1103 386",
} as const;

export default MotionDark;
