/**
 * Auto-generated logo component: Unocss (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UnocssLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const UnocssLogo = React.forwardRef<SVGSVGElement, UnocssLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#858585" d="M137.176 195.927c0-32.813 26.6-59.412 59.412-59.412S256 163.114 256 195.927c0 32.812-26.6 59.412-59.412 59.412s-59.412-26.6-59.412-59.412Z" /><path fill="#CCC" d="M137.176 59.412C137.176 26.6 163.776 0 196.588 0S256 26.6 256 59.412v53.471c0 3.28-2.66 5.941-5.941 5.941H143.117a5.942 5.942 0 0 1-5.941-5.94V59.411Z" /><path fill="#4D4D4D" d="M118.824 195.927c0 32.812-26.6 59.412-59.412 59.412S0 228.74 0 195.927v-53.47a5.94 5.94 0 0 1 5.941-5.942h106.942a5.94 5.94 0 0 1 5.941 5.941v53.471Z" />
    </svg>
  )
);

UnocssLogo.displayName = "UnocssLogo";

export const UnocssLogoMetadata = {
  id: "unocss",
  baseId: "unocss",
  variant: "default",
  name: "Unocss",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default UnocssLogo;
