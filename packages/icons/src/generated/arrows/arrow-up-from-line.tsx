/**
 * Auto-generated logo component: Arrow Up From Line (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpFromLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpFromLineLogo = React.forwardRef<SVGSVGElement, ArrowUpFromLineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m18 9-6-6-6 6" />
  <path d="M12 3v14" />
  <path d="M5 21h14" />
    </svg>
  )
);

ArrowUpFromLineLogo.displayName = "ArrowUpFromLineLogo";

export const ArrowUpFromLineLogoMetadata = {
  id: "arrow-up-from-line",
  baseId: "arrow-up-from-line",
  variant: "default",
  name: "Arrow Up From Line",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpFromLineLogo;
