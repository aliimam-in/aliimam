/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Ghost2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ghost2Filled = React.forwardRef<SVGSVGElement, Ghost2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 1.999l.041 .002l.208 .003a8 8 0 0 1 7.747 7.747l.003 .248l.177 .006a3 3 0 0 1 2.819 2.819l.005 .176a3 3 0 0 1 -3 3l-.001 1.696l1.833 2.75a1 1 0 0 1 -.72 1.548l-.112 .006h-10c-3.445 .002 -6.327 -2.49 -6.901 -5.824l-.028 -.178l-.071 .001a3 3 0 0 1 -2.995 -2.824l-.005 -.175a3 3 0 0 1 3 -3l.004 -.25a8 8 0 0 1 7.996 -7.75zm0 10.001a2 2 0 0 0 -2 2a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1a2 2 0 0 0 -2 -2zm-1.99 -4l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm4 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" />
    </svg>
  )
);
Ghost2Filled.displayName = "Ghost2Filled";
export const Ghost2FilledMetadata = { 
  id: "ghost-2_filled", 
  baseId: "ghost-2", 
  variant: "filled", 
  name: "Ghost 2", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Ghost2Filled;
