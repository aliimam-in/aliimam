/**
 * Auto-generated logo component: Solana (default)
 * Category: crypto
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SolanaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Solana = React.forwardRef<SVGSVGElement, SolanaProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2062_2934)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#181E33"/>
</g>
<defs>
<clipPath id="clip0_2062_2934">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Solana.displayName = "Solana";

export const SolanaMetadata = {
  id: "Solana",
  baseId: "Solana",
  variant: "default",
  name: "Solana",
  category: "crypto",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Solana;
