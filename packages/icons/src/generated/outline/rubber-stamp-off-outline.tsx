/**
 * Auto-generated logo component: Rubber Stamp Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RubberStampOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RubberStampOffOutlineLogo = React.forwardRef<SVGSVGElement, RubberStampOffOutlineLogoProps>(
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
      <path d="M8.273 8.273c.805 2.341 2.857 5.527 -1.484 5.527c-2.368 0 -3.789 0 -3.789 4.05h14.85" />
  <path d="M5 21h14" />
  <path d="M3 3l18 18" />
  <path d="M8.712 4.722a3.99 3.99 0 0 1 3.288 -1.722a4 4 0 0 1 4 4c0 .992 -.806 2.464 -1.223 3.785m6.198 6.196c-.182 -2.883 -1.332 -3.153 -3.172 -3.178" />
    </svg>
  )
);

RubberStampOffOutlineLogo.displayName = "RubberStampOffOutlineLogo";

export const RubberStampOffOutlineLogoMetadata = {
  id: "rubber-stamp-off-outline",
  baseId: "rubber-stamp-off-outline",
  variant: "default",
  name: "Rubber Stamp Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RubberStampOffOutlineLogo;
