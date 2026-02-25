/**
 * Auto-generated logo component: Arrow Bear Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBearRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBearRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBearRightOutlineLogoProps>(
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
      <path d="M12 3h5v5" />
  <path d="M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
    </svg>
  )
);

ArrowBearRightOutlineLogo.displayName = "ArrowBearRightOutlineLogo";

export const ArrowBearRightOutlineLogoMetadata = {
  id: "arrow-bear-right-outline",
  baseId: "arrow-bear-right-outline",
  variant: "default",
  name: "Arrow Bear Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBearRightOutlineLogo;
