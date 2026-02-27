/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OntologyOntFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OntologyOntFilled = React.forwardRef<SVGSVGElement, OntologyOntFilledProps>(
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
      <path d="M17.9 19.68C16.18 21.18 13.91 22.07 11.42 22C6.24998 21.86 2.21997 17.41 2.21997 12.24V5.21004C2.21997 4.76004 2.75998 4.54003 3.06998 4.86003L17.9 19.68Z" fill="currentColor"/>
<path d="M6.21997 4.29998C7.92997 2.80998 10.18 1.92998 12.65 1.99998C17.78 2.13998 21.77 6.54997 21.77 11.68V18.64C21.77 19.09 21.23 19.31 20.92 18.99L6.21997 4.29998Z" fill="currentColor"/>
    </svg>
  )
);
OntologyOntFilled.displayName = "OntologyOntFilled";
export const OntologyOntFilledMetadata = { 
  id: "ontology-ont_filled", 
  baseId: "ontology-ont", 
  variant: "filled", 
  name: "Ontology Ont", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default OntologyOntFilled;
