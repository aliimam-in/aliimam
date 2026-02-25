/**
 * Auto-generated logo component: Contract Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ContractOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ContractOutlineLogo = React.forwardRef<SVGSVGElement, ContractOutlineLogoProps>(
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
      <path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5" />
  <path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2" />
  <path d="M19 3h-11a3 3 0 0 0 -3 3v11" />
  <path d="M9 7h4" />
  <path d="M9 11h4" />
  <path d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3l6.42 -6.39" />
    </svg>
  )
);

ContractOutlineLogo.displayName = "ContractOutlineLogo";

export const ContractOutlineLogoMetadata = {
  id: "contract-outline",
  baseId: "contract-outline",
  variant: "default",
  name: "Contract Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ContractOutlineLogo;
