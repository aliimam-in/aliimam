/**
 * Auto-generated logo component: Mermaid Logo Dark (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MermaidLogoDarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MermaidLogoDarkLogo = React.forwardRef<SVGSVGElement, MermaidLogoDarkLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 491 491"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M407.48 111.18c-71.893-3.077-137.907 41.158-162.4 108.82-24.493-67.662-90.507-111.897-162.4-108.82-2.395 57.049 24.897 111.452 72.06 143.64 24.168 16.599 38.61 44.131 38.53 73.45v50.86H296.9v-50.86c-.084-29.317 14.355-56.85 38.52-73.45 47.176-32.176 74.472-86.587 72.06-143.64Z" style={{fill:"#ffff",fillRule:"nonzero"}} />
    </svg>
  )
);

MermaidLogoDarkLogo.displayName = "MermaidLogoDarkLogo";

export const MermaidLogoDarkLogoMetadata = {
  id: "mermaid-logo-dark",
  baseId: "mermaid-logo-dark",
  variant: "default",
  name: "Mermaid Logo Dark",
  category: "mix",
  tags: [],
  viewBox: "0 0 491 491",
} as const;

export default MermaidLogoDarkLogo;
