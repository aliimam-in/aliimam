/**
 * Auto-generated logo component: Ubuntu (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UbuntuLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const UbuntuLogo = React.forwardRef<SVGSVGElement, UbuntuLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="50" cy="50" r="45" fill="#f47421" /><circle cx="50" cy="50" r="21.8" fill="none" stroke="#fff" strokeWidth="8.6" /><g id="a"><circle cx="19.4" cy="50" r="8.4" fill="#f47421" /><path stroke="#f47421" strokeWidth="3.2" d="M67 50h10" /><circle cx="19.4" cy="50" r="6" fill="#fff" /></g><use href="#a" transform="rotate(120 50 50)" /><use href="#a" transform="rotate(240 50 50)" />
    </svg>
  )
);

UbuntuLogo.displayName = "UbuntuLogo";

export const UbuntuLogoMetadata = {
  id: "ubuntu",
  baseId: "ubuntu",
  variant: "default",
  name: "Ubuntu",
  category: "mix",
  tags: [],
  viewBox: "0 0 100 100",
} as const;

export default UbuntuLogo;
