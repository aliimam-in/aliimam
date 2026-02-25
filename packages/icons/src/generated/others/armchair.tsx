/**
 * Auto-generated logo component: Armchair (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArmchairLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArmchairLogo = React.forwardRef<SVGSVGElement, ArmchairLogoProps>(
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
      <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
  <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
  <path d="M5 18v2" />
  <path d="M19 18v2" />
    </svg>
  )
);

ArmchairLogo.displayName = "ArmchairLogo";

export const ArmchairLogoMetadata = {
  id: "armchair",
  baseId: "armchair",
  variant: "default",
  name: "Armchair",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArmchairLogo;
