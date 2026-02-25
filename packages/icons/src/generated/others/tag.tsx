/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TagProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tag = React.forwardRef<SVGSVGElement, TagProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
);
Tag.displayName = "Tag";
export const TagMetadata = { id: "tag", baseId: "tag", variant: "default", name: "Tag", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Tag;
