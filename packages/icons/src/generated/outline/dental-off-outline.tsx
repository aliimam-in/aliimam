/**
 * Auto-generated logo component: Dental Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DentalOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DentalOffOutlineLogo = React.forwardRef<SVGSVGElement, DentalOffOutlineLogoProps>(
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
      <path d="M19.277 15.281c.463 -1.75 .723 -3.844 .723 -6.281c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5c-1.074 -.586 -2.583 -1.5 -4 -1.5m-2.843 1.153c-.707 .784 -1.157 2.017 -1.157 3.847c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c.305 -.402 .59 -.853 .852 -1.353" />
  <path d="M12 5.5l3 1.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DentalOffOutlineLogo.displayName = "DentalOffOutlineLogo";

export const DentalOffOutlineLogoMetadata = {
  id: "dental-off-outline",
  baseId: "dental-off-outline",
  variant: "default",
  name: "Dental Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DentalOffOutlineLogo;
