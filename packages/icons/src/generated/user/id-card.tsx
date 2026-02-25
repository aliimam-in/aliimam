/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface IdCardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const IdCard = React.forwardRef<SVGSVGElement, IdCardProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 10h2" />
  <path d="M16 14h2" />
  <path d="M6.17 15a3 3 0 0 1 5.66 0" />
  <circle cx="9" cy="11" r="2" />
  <rect x="2" y="5" width="20" height="14" rx="2" />
    </svg>
  )
);
IdCard.displayName = "IdCard";
export const IdCardMetadata = { id: "id-card", baseId: "id-card", variant: "default", name: "Id Card", category: "user", tags: [], viewBox: "0 0 24 24" } as const;
export default IdCard;
