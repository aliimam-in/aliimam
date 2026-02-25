/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileDeltaFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileDeltaFilled = React.forwardRef<SVGSVGElement, FileDeltaFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm.894 8.553a1 1 0 0 0 -1.788 0l-3 6a1 1 0 0 0 .894 1.447h6a1 1 0 0 0 .894 -1.447zm-.894 2.683l1.381 2.764h-2.763zm2.999 -10.237l4.001 4.001h-4z" />
    </svg>
  )
);
FileDeltaFilled.displayName = "FileDeltaFilled";
export const FileDeltaFilledMetadata = { id: "file-delta_filled", baseId: "file-delta", variant: "filled", name: "File Delta", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default FileDeltaFilled;
