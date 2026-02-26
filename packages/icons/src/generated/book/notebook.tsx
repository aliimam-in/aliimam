/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NotebookProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Notebook = React.forwardRef<SVGSVGElement, NotebookProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M2 6h4" />
  <path d="M2 10h4" />
  <path d="M2 14h4" />
  <path d="M2 18h4" />
  <rect width="16" height="20" x="4" y="2" rx="2" />
  <path d="M16 2v20" />
    </svg>
  )
);
Notebook.displayName = "Notebook";
export const NotebookMetadata = { 
  id: "notebook", 
  baseId: "notebook", 
  variant: "default", 
  name: "Notebook", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Notebook;
