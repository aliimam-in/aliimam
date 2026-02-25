/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NotebookTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NotebookText = React.forwardRef<SVGSVGElement, NotebookTextProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M2 6h4" />
  <path d="M2 10h4" />
  <path d="M2 14h4" />
  <path d="M2 18h4" />
  <rect width="16" height="20" x="4" y="2" rx="2" />
  <path d="M9.5 8h5" />
  <path d="M9.5 12H16" />
  <path d="M9.5 16H14" />
    </svg>
  )
);
NotebookText.displayName = "NotebookText";
export const NotebookTextMetadata = { id: "notebook-text", baseId: "notebook-text", variant: "default", name: "Notebook Text", category: "book", tags: [], viewBox: "0 0 24 24" } as const;
export default NotebookText;
