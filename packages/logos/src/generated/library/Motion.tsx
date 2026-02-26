/**
 * Auto-generated logo component: Motion (default)
 * Category: library
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MotionProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Motion = React.forwardRef<SVGSVGElement, MotionProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2066_922)">
<path d="M9.06197 8L4.32 15.993H0L3.7027 9.75175C4.27668 8.78429 5.70902 8 6.90197 8H9.06197ZM19.6558 9.99824C19.6558 8.89463 20.6229 8 21.8158 8C23.0088 8 23.9758 8.89463 23.9758 9.99824C23.9758 11.1018 23.0088 11.9965 21.8158 11.9965C20.6229 11.9965 19.6558 11.1018 19.6558 9.99824ZM9.87196 8H14.192L9.44999 15.993H5.12999L9.87196 8ZM14.9742 8H19.2943L15.5915 14.2412C15.0176 15.2087 13.5852 15.993 12.3923 15.993H10.2323L14.9742 8Z" />
</g>
<defs>
<clipPath id="clip0_2066_922">
<rect width="24" height="8"  transform="translate(0 8)"/>
</clipPath>
</defs>
    </svg>
  )
);

Motion.displayName = "Motion";

export const MotionMetadata = {
  id: "Motion",
  baseId: "Motion",
  variant: "default",
  name: "Motion",
  category: "library",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Motion;
