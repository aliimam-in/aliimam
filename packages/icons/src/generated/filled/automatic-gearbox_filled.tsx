/**
 * Auto-generated logo component: Automatic Gearbox (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AutomaticGearboxFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AutomaticGearboxFilledLogo = React.forwardRef<SVGSVGElement, AutomaticGearboxFilledLogoProps>(
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
      <path d="M18 16a3 3 0 0 1 0 6h-1a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1zm0 4l.117 -.007a1 1 0 0 0 -.117 -1.993zm.5 -13a2.5 2.5 0 1 1 0 5h-.5v1a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1zm-.5 3h.5a.5 .5 0 1 0 0 -1h-.5zm-5 0a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3a2 2 0 0 1 -2 -2v-6h-2a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-2.17a3 3 0 0 1 -2 -2.83l.005 -.176a3 3 0 1 1 3.996 3.005l-.001 2.171z" />
    </svg>
  )
);

AutomaticGearboxFilledLogo.displayName = "AutomaticGearboxFilledLogo";

export const AutomaticGearboxFilledLogoMetadata = {
  id: "automatic-gearbox_filled",
  baseId: "automatic-gearbox",
  variant: "filled",
  name: "Automatic Gearbox",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AutomaticGearboxFilledLogo;
