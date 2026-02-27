/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OntologyOntRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OntologyOntRounded = React.forwardRef<SVGSVGElement, OntologyOntRoundedProps>(
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
      <path d="M17.9 19.7C16.2 21.2 13.9 22.1 11.4 22C6.19995 21.9 2.19995 17.4 2.19995 12.2V5.19997C2.19995 4.79997 2.69995 4.49997 3.09995 4.79997L17.9 19.7Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.19995 4.29998C7.89995 2.79998 10.2 1.89998 12.6 1.99998C17.7 2.09998 21.7 6.49998 21.7 11.7V18.7C21.7 19.1 21.2 19.4 20.8 19.1L6.19995 4.29998Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
OntologyOntRounded.displayName = "OntologyOntRounded";
export const OntologyOntRoundedMetadata = { 
  id: "ontology-ont_rounded", 
  baseId: "ontology-ont", 
  variant: "rounded", 
  name: "Ontology Ont", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default OntologyOntRounded;
