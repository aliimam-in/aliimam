/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBigRightLineFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBigRightLineFilled = React.forwardRef<SVGSVGElement, ArrowBigRightLineFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-4.999a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l4.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" />
  <path d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" />
    </svg>
  )
);
ArrowBigRightLineFilled.displayName = "ArrowBigRightLineFilled";
export const ArrowBigRightLineFilledMetadata = { id: "arrow-big-right-line_filled", baseId: "arrow-big-right-line", variant: "filled", name: "Arrow Big Right Line", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowBigRightLineFilled;
