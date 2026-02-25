/**
 * Auto-generated logo component: Helicopter (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HelicopterFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HelicopterFilledLogo = React.forwardRef<SVGSVGElement, HelicopterFilledLogoProps>(
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
      <path d="M20 5a1 1 0 0 1 0 2h-6v1c4.642 0 8 2.218 8 6a3 3 0 0 1 -3 3h-3v1h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0 -2h3v-1h-2c-1.652 0 -3 -1.348 -3 -3v-1.001l-6 .001a1 1 0 0 1 -.894 -.553l-1 -2a1 1 0 0 1 1.788 -.894l.724 1.447l5.382 -.001l.005 -.175a3 3 0 0 1 2.995 -2.824v-1h-7a1 1 0 1 1 0 -2zm-3.999 5.174l-.001 1.826h3.36c-.665 -.906 -1.825 -1.539 -3.359 -1.826" />
    </svg>
  )
);

HelicopterFilledLogo.displayName = "HelicopterFilledLogo";

export const HelicopterFilledLogoMetadata = {
  id: "helicopter_filled",
  baseId: "helicopter",
  variant: "filled",
  name: "Helicopter",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HelicopterFilledLogo;
