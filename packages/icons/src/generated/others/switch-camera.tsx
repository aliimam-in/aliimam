/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SwitchCameraProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SwitchCamera = React.forwardRef<SVGSVGElement, SwitchCameraProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
  <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
  <circle cx="12" cy="12" r="3" />
  <path d="m18 22-3-3 3-3" />
  <path d="m6 2 3 3-3 3" />
    </svg>
  )
);
SwitchCamera.displayName = "SwitchCamera";
export const SwitchCameraMetadata = { id: "switch-camera", baseId: "switch-camera", variant: "default", name: "Switch Camera", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default SwitchCamera;
