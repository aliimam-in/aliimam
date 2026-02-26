/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ImportProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Import = React.forwardRef<SVGSVGElement, ImportProps>(
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
      <path d="M12 3v12" />
  <path d="m8 11 4 4 4-4" />
  <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  )
);
Import.displayName = "Import";
export const ImportMetadata = { 
  id: "import", 
  baseId: "import", 
  variant: "default", 
  name: "Import", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Import;
