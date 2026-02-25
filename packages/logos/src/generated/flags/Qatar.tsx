/**
 * Auto-generated logo component: Qatar (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface QatarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Qatar = React.forwardRef<SVGSVGElement, QatarProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M27 4H9V28H27C29.209 28 31 26.209 31 24V8C31 5.791 29.209 4 27 4Z" fill="#801D36" />
<path d="M10 23.2L16 20.8L10 18.4L16 16L10 13.6L16 11.2L10 8.8L16 6.4L10 4H5C2.791 4 1 5.791 1 8V24C1 26.209 2.791 28 5 28H10L16 25.6L10 23.2Z" fill="white" />
    </svg>
  )
);

Qatar.displayName = "Qatar";

export const QatarMetadata = {
  id: "Qatar",
  baseId: "Qatar",
  variant: "default",
  name: "Qatar",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Qatar;
