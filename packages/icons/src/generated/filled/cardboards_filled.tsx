/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CardboardsFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CardboardsFilled = React.forwardRef<SVGSVGElement, CardboardsFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 5a3 3 0 0 1 3 3v8.5a3.5 3.5 0 0 1 -3.5 3.5h-1.062a4 4 0 0 1 -3.118 -1.504l-1.54 -1.92a1 1 0 0 0 -1.56 0l-1.538 1.917a4 4 0 0 1 -3.122 1.507h-1.06a3.5 3.5 0 0 1 -3.5 -3.5v-8.5a3 3 0 0 1 3 -3zm-11 5a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m8 0a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2" />
    </svg>
  )
);
CardboardsFilled.displayName = "CardboardsFilled";
export const CardboardsFilledMetadata = { id: "cardboards_filled", baseId: "cardboards", variant: "filled", name: "Cardboards", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CardboardsFilled;
