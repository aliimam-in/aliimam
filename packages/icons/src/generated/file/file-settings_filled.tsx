/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileSettingsFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileSettingsFilled = React.forwardRef<SVGSVGElement, FileSettingsFilledProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm0 8.5a1 1 0 0 0 -1 1v.67a3 3 0 0 0 -.909 .516l-.576 -.346a1 1 0 0 0 -1.03 1.714l.575 .346q -.043 .207 -.055 .424l-.005 .176q 0 .28 .05 .548l-.582 .336a1 1 0 0 0 1 1.732l.583 -.336c.277 .238 .598 .425 .95 .55l-.001 .67a1 1 0 0 0 2 0v-.671c.335 -.118 .641 -.294 .909 -.514l.576 .345a1 1 0 0 0 1.03 -1.714l-.575 -.346a3 3 0 0 0 .01 -1.148l.581 -.336a1 1 0 0 0 -1 -1.732l-.582 .335a3 3 0 0 0 -.948 -.548l-.001 -.671a1 1 0 0 0 -1 -1m0 3.5a1 1 0 1 1 0 2a1 1 0 0 1 0 -2" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);
FileSettingsFilled.displayName = "FileSettingsFilled";
export const FileSettingsFilledMetadata = { 
  id: "file-settings_filled", 
  baseId: "file-settings", 
  variant: "filled", 
  name: "File Settings", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileSettingsFilled;
