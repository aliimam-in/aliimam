/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZodiacSagittariusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZodiacSagittarius = React.forwardRef<SVGSVGElement, ZodiacSagittariusProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M15 3h6v6" />
  <path d="M21 3 3 21" />
  <path d="m9 9 6 6" />
    </svg>
  )
);
ZodiacSagittarius.displayName = "ZodiacSagittarius";
export const ZodiacSagittariusMetadata = { id: "zodiac-sagittarius", baseId: "zodiac-sagittarius", variant: "default", name: "Zodiac Sagittarius", category: "zodiac", tags: [], viewBox: "0 0 24 24" } as const;
export default ZodiacSagittarius;
