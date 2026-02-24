/**
 * Auto-generated logo component: Perplexity (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PerplexityLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const PerplexityLogo = React.forwardRef<SVGSVGElement, PerplexityLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="none" stroke="#20808d" strokeLinecap="round" strokeLinejoin="round" d="M24 4.5v39M13.73 16.573v-9.99L24 16.573m0 14.5L13.73 41.417V27.01L24 16.573m0 0l10.27-9.99v9.99" />
<path fill="none" stroke="#20808d" strokeLinecap="round" strokeLinejoin="round" d="M13.73 31.396H9.44V16.573h29.12v14.823h-4.29" />
<path fill="none" stroke="#20808d" strokeLinecap="round" strokeLinejoin="round" d="M24 16.573L34.27 27.01v14.407L24 31.073" />
    </svg>
  )
);

PerplexityLogo.displayName = "PerplexityLogo";

export const PerplexityLogoMetadata = {
  id: "perplexity",
  baseId: "perplexity",
  variant: "default",
  name: "Perplexity",
  category: "mix",
  tags: [],
  viewBox: "0 0 48 48",
} as const;

export default PerplexityLogo;
