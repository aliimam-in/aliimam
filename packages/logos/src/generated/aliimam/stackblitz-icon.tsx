/**
 * Auto-generated logo component: Stackblitz Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StackblitzIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const StackblitzIcon = React.forwardRef<SVGSVGElement, StackblitzIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 368"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#49A2F8" points="109.586274 217.013141 0 217.013141 200.340162 2.84217094e-14 146.413726 150.233087 256 150.233087 55.6451483 367.246227 109.571584 217.013141"></polygon>
    </g>
    </svg>
  )
);

StackblitzIcon.displayName = "StackblitzIcon";

export const StackblitzIconMetadata = {
  id: "stackblitz-icon",
  baseId: "stackblitz-icon",
  variant: "default",
  name: "Stackblitz Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 368",
} as const;

export default StackblitzIcon;
