/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TemplateFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TemplateFilled = React.forwardRef<SVGSVGElement, TemplateFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" />
  <path d="M9 11a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2z" />
  <path d="M20 11a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z" />
  <path d="M20 15a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z" />
  <path d="M20 19a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z" />
    </svg>
  )
);
TemplateFilled.displayName = "TemplateFilled";
export const TemplateFilledMetadata = { id: "template_filled", baseId: "template", variant: "filled", name: "Template", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default TemplateFilled;
