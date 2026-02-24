/**
 * Auto-generated logo component: Tembo (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemboLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TemboLogo = React.forwardRef<SVGSVGElement, TemboLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 153 152"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#111" fillRule="evenodd" d="M68.165 68.028C71.979 21.556 33.794-3.367.163.367v32.13c21.897-4.98 41.114 13.83 35.807 35.531zm16.67 0C81.021 21.556 119.206-3.367 152.837.367v32.13c-21.897-4.98-41.113 13.83-35.807 35.531zM60.929 83.972c-3.815 46.472 34.37 71.395 68.002 67.661v-32.13c-21.898 4.98-41.114-13.829-35.807-35.531z" clipRule="evenodd" />
    </svg>
  )
);

TemboLogo.displayName = "TemboLogo";

export const TemboLogoMetadata = {
  id: "tembo",
  baseId: "tembo",
  variant: "default",
  name: "Tembo",
  category: "mix",
  tags: [],
  viewBox: "0 0 153 152",
} as const;

export default TemboLogo;
