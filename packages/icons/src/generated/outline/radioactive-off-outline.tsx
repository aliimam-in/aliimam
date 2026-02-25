/**
 * Auto-generated logo component: Radioactive Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadioactiveOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadioactiveOffOutlineLogo = React.forwardRef<SVGSVGElement, RadioactiveOffOutlineLogoProps>(
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
      <path d="M14.118 14.127c-.182 .181 -.39 .341 -.618 .473l3 5.19a9 9 0 0 0 1.856 -1.423m1.68 -2.32a8.993 8.993 0 0 0 .964 -4.047h-5" />
  <path d="M13.5 9.4l3 -5.19a9 9 0 0 0 -8.536 -.25" />
  <path d="M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RadioactiveOffOutlineLogo.displayName = "RadioactiveOffOutlineLogo";

export const RadioactiveOffOutlineLogoMetadata = {
  id: "radioactive-off-outline",
  baseId: "radioactive-off-outline",
  variant: "default",
  name: "Radioactive Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadioactiveOffOutlineLogo;
