/**
 * Auto-generated logo component: Hospital Circle Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HospitalCircleFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HospitalCircleFilledLogo = React.forwardRef<SVGSVGElement, HospitalCircleFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72m2 5a1 1 0 0 0 -1 1v2.999h-2v-2.999a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v8a1 1 0 0 0 2 0v-3.001h2v3.001a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

HospitalCircleFilledLogo.displayName = "HospitalCircleFilledLogo";

export const HospitalCircleFilledLogoMetadata = {
  id: "hospital-circle-filled",
  baseId: "hospital-circle-filled",
  variant: "default",
  name: "Hospital Circle Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HospitalCircleFilledLogo;
