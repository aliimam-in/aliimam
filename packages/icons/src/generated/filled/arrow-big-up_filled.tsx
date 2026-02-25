/**
 * Auto-generated logo component: Arrow Big Up (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigUpFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigUpFilledLogo = React.forwardRef<SVGSVGElement, ArrowBigUpFilledLogoProps>(
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
      <path d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v7a2 2 0 0 0 2 2h4l.15 -.005a2 2 0 0 0 1.85 -1.995l-.001 -7h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z" />
    </svg>
  )
);

ArrowBigUpFilledLogo.displayName = "ArrowBigUpFilledLogo";

export const ArrowBigUpFilledLogoMetadata = {
  id: "arrow-big-up_filled",
  baseId: "arrow-big-up",
  variant: "filled",
  name: "Arrow Big Up",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigUpFilledLogo;
