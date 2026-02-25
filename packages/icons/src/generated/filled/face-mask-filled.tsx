/**
 * Auto-generated logo component: Face Mask Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FaceMaskFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FaceMaskFilledLogo = React.forwardRef<SVGSVGElement, FaceMaskFilledLogoProps>(
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
      <path d="M12.825 4.196l5 1.43a3 3 0 0 1 2.175 2.884v.065c1.7 .33 3 1.72 3 3.425s-1.3 3.095 -3 3.425v.066a3 3 0 0 1 -2.175 2.885l-5 1.428a3 3 0 0 1 -1.65 0l-5 -1.429a3 3 0 0 1 -2.17 -2.702l-.005 -.247c-1.7 -.33 -3 -1.72 -3 -3.426c0 -1.705 1.3 -3.096 3 -3.426v-.064a3 3 0 0 1 2.175 -2.884l5 -1.428a3 3 0 0 1 1.65 0m2.175 8.802h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m-11 -2.349c-.6 .248 -1 .77 -1 1.349c0 .578 .4 1.101 1 1.349zm16.001 0v2.697c.599 -.248 .999 -.77 .999 -1.348s-.4 -1.1 -.999 -1.348m-5.001 -1.652h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 0 -2" />
    </svg>
  )
);

FaceMaskFilledLogo.displayName = "FaceMaskFilledLogo";

export const FaceMaskFilledLogoMetadata = {
  id: "face-mask-filled",
  baseId: "face-mask-filled",
  variant: "default",
  name: "Face Mask Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FaceMaskFilledLogo;
