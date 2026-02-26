/**
 * Auto-generated logo component: PlanetScale (default)
 * Category: database
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlanetScaleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const PlanetScale = React.forwardRef<SVGSVGElement, PlanetScaleProps>(
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
      <g clipPath="url(#clip0_2062_3086)">
<path d="M23.9999 12C23.9999 15.1826 22.7356 18.2348 20.4852 20.4853C18.2347 22.7357 15.1825 24 11.9999 24L23.9999 12ZM11.9999 0C16.8749 0 21.0655 2.90625 22.9499 7.07812L7.07803 22.95C6.39365 22.6406 5.74678 22.275 5.1374 21.8531L14.9999 12H11.9999L3.51553 20.4844C1.83766 18.8062 0.695065 16.6681 0.232192 14.3406C-0.230681 12.0131 0.00695619 9.60053 0.915058 7.40804C1.82316 5.21555 3.36095 3.34154 5.33401 2.02294C7.30706 0.70434 9.62679 0.000358442 11.9999 0Z" />
</g>
<defs>
<clipPath id="clip0_2062_3086">
<rect width="24" height="24" />
</clipPath>
</defs>
    </svg>
  )
);

PlanetScale.displayName = "PlanetScale";

export const PlanetScaleMetadata = {
  id: "PlanetScale",
  baseId: "PlanetScale",
  variant: "default",
  name: "PlanetScale",
  category: "database",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlanetScale;
