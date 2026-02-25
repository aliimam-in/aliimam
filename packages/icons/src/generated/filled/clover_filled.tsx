/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloverFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloverFilled = React.forwardRef<SVGSVGElement, CloverFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12.712 13.297l3.398 3.442a3.104 3.104 0 0 1 0 4.351a3.04 3.04 0 0 1 -4.036 .27l-.075 -.062l-.073 .062a3.04 3.04 0 0 1 -1.664 .634l-.203 .007a3.04 3.04 0 0 1 -2.17 -.91a3.104 3.104 0 0 1 .002 -4.354l3.397 -3.44a1 1 0 0 1 1.424 0m8.378 -5.407a3.04 3.04 0 0 1 .27 4.037l-.062 .073l.062 .075a3.04 3.04 0 0 1 .634 1.664l.007 .203a3.04 3.04 0 0 1 -.91 2.17a3.104 3.104 0 0 1 -4.354 -.002l-3.44 -3.397a1 1 0 0 1 0 -1.424l3.443 -3.399a3.104 3.104 0 0 1 4.351 0m-13.827 .002l3.44 3.397a1 1 0 0 1 0 1.424l-3.444 3.397a3.104 3.104 0 0 1 -4.351 0a3.04 3.04 0 0 1 -.27 -4.036l.062 -.075l-.062 -.073a3.04 3.04 0 0 1 -.634 -1.664l-.007 -.203c0 -.816 .328 -1.598 .91 -2.17a3.104 3.104 0 0 1 4.354 .002m6.678 -5.891a3.04 3.04 0 0 1 2.17 .91a3.104 3.104 0 0 1 -.002 4.354l-3.397 3.44a1 1 0 0 1 -1.424 0l-3.397 -3.444a3.104 3.104 0 0 1 0 -4.351a3.04 3.04 0 0 1 4.036 -.27l.073 .062l.075 -.062a3.04 3.04 0 0 1 1.664 -.634z" />
    </svg>
  )
);
CloverFilled.displayName = "CloverFilled";
export const CloverFilledMetadata = { id: "clover_filled", baseId: "clover", variant: "filled", name: "Clover", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CloverFilled;
