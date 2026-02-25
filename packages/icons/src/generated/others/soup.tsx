/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SoupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Soup = React.forwardRef<SVGSVGElement, SoupProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
  <path d="M7 21h10" />
  <path d="M19.5 12 22 6" />
  <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" />
  <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" />
  <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" />
    </svg>
  )
);
Soup.displayName = "Soup";
export const SoupMetadata = { id: "soup", baseId: "soup", variant: "default", name: "Soup", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Soup;
