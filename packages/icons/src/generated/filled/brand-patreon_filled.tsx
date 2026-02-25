/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BrandPatreonFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BrandPatreonFilled = React.forwardRef<SVGSVGElement, BrandPatreonFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M7.462 3.1c2.615 -1.268 6.226 -1.446 9.063 -.503c2.568 .853 4.471 3.175 4.475 5.81c.004 3.061 -1.942 5.492 -4.896 6.243c-1.693 .43 -2.338 .75 -2.942 1.582c-.238 .328 -.45 .745 -.796 1.533l-.22 .5c-1.146 2.601 -2.156 3.762 -4.236 3.735c-2.232 -.03 -3.603 -1.742 -4.313 -4.48c-.458 -1.768 -.617 -3.808 -.594 -5.876c.044 -3.993 1.42 -7.072 4.46 -8.545z" />
    </svg>
  )
);
BrandPatreonFilled.displayName = "BrandPatreonFilled";
export const BrandPatreonFilledMetadata = { id: "brand-patreon_filled", baseId: "brand-patreon", variant: "filled", name: "Brand Patreon", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default BrandPatreonFilled;
