/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardTypographyFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardTypographyFilled = React.forwardRef<SVGSVGElement, ClipboardTypographyFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-2.997 5.83h-6a1 1 0 0 0 -1 1v1a1 1 0 0 0 2 0h1v4a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2v-4h1a1 1 0 0 0 2 0v-1a1 1 0 0 0 -1 -1m-1 -8a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z" />
    </svg>
  )
);
ClipboardTypographyFilled.displayName = "ClipboardTypographyFilled";
export const ClipboardTypographyFilledMetadata = { id: "clipboard-typography_filled", baseId: "clipboard-typography", variant: "filled", name: "Clipboard Typography", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ClipboardTypographyFilled;
