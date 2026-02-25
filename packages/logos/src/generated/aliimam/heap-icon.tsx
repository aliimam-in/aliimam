/**
 * Auto-generated logo component: Heap Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeapIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HeapIcon = React.forwardRef<SVGSVGElement, HeapIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 415"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <rect fill="#000000" x="-7.44077544e-15" y="89.6132271" width="47.9991526" height="235.195644"></rect>
        <rect fill="#000000" x="104.025152" y="1.48815509e-14" width="47.9991526" height="179.196377"></rect>
        <rect fill="#31D891" x="104.025152" y="235.228683" width="47.9991526" height="179.196377"></rect>
        <rect fill="#31D891" x="208.000847" y="89.6132271" width="47.9991526" height="235.195644"></rect>
    </g>
    </svg>
  )
);

HeapIcon.displayName = "HeapIcon";

export const HeapIconMetadata = {
  id: "heap-icon",
  baseId: "heap-icon",
  variant: "default",
  name: "Heap Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 415",
} as const;

export default HeapIcon;
