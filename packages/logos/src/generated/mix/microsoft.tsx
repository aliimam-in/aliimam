/**
 * Auto-generated logo component: Microsoft (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicrosoftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MicrosoftLogo = React.forwardRef<SVGSVGElement, MicrosoftLogoProps>(
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
      <path fill="#F1511B" d="M121.666 121.666H0V0h121.666z" /><path fill="#80CC28" d="M256 121.666H134.335V0H256z" /><path fill="#00ADEF" d="M121.663 256.002H0V134.336h121.663z" /><path fill="#FBBC09" d="M256 256.002H134.335V134.336H256z" />
    </svg>
  )
);

MicrosoftLogo.displayName = "MicrosoftLogo";

export const MicrosoftLogoMetadata = {
  id: "microsoft",
  baseId: "microsoft",
  variant: "default",
  name: "Microsoft",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default MicrosoftLogo;
