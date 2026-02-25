/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignBoxTopLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignBoxTopLeftFilled = React.forwardRef<SVGSVGElement, AlignBoxTopLeftFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-9.333 3a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 1.993 -.117v-6l-.007 -.117a1 1 0 0 0 -.993 -.883zm3 0a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 1.993 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883zm-6 0a1 1 0 0 0 -1 1v2l.007 .117a1 1 0 0 0 1.993 -.117v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);
AlignBoxTopLeftFilled.displayName = "AlignBoxTopLeftFilled";
export const AlignBoxTopLeftFilledMetadata = { id: "align-box-top-left_filled", baseId: "align-box-top-left", variant: "filled", name: "Align Box Top Left", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default AlignBoxTopLeftFilled;
