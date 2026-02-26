/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CodeXmlProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CodeXml = React.forwardRef<SVGSVGElement, CodeXmlProps>(
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
      <path d="m18 16 4-4-4-4" />
  <path d="m6 8-4 4 4 4" />
  <path d="m14.5 4-5 16" />
    </svg>
  )
);
CodeXml.displayName = "CodeXml";
export const CodeXmlMetadata = { 
  id: "code-xml", 
  baseId: "code-xml", 
  variant: "default", 
  name: "Code Xml", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CodeXml;
