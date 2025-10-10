import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BadgeSwissFrancProps extends IconProps {
  type?: "stroke";
}

export const BadgeSwissFranc: IconComponent<BadgeSwissFrancProps> =
  React.forwardRef<SVGSVGElement, BadgeSwissFrancProps>(
    function BadgeSwissFranc(
      {
        color = "currentColor",
        fill,
        size = 24,
        strokeWidth,
        strokeLinecap,
        strokeLinejoin,
        strokeDasharray,
        opacity,
        className,
        type = "stroke",
        ...props
      },
      forwardedRef,
    ) {
      if (type === "stroke") {
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            strokeDasharray={strokeDasharray}
            opacity={opacity}
            {...props}
            ref={forwardedRef}
          >
            <path
              d="M3.85019 8.62001C3.70423 7.96253 3.72665 7.27885 3.91535 6.63235C4.10405 5.98584 4.45294 5.39745 4.92966 4.92173C5.40638 4.446 5.9955 4.09835 6.6424 3.911C7.2893 3.72365 7.97303 3.70267 8.63019 3.85001C8.9919 3.28431 9.4902 2.81876 10.0791 2.49629C10.6681 2.17382 11.3287 2.00479 12.0002 2.00479C12.6716 2.00479 13.3323 2.17382 13.9212 2.49629C14.5102 2.81876 15.0085 3.28431 15.3702 3.85001C16.0284 3.70203 16.7133 3.72292 17.3612 3.91072C18.0091 4.09852 18.599 4.44715 19.076 4.92416C19.5531 5.40117 19.9017 5.99108 20.0895 6.63901C20.2773 7.28694 20.2982 7.97184 20.1502 8.63001C20.7159 8.99171 21.1814 9.49001 21.5039 10.079C21.8264 10.6679 21.9954 11.3286 21.9954 12C21.9954 12.6715 21.8264 13.3321 21.5039 13.9211C21.1814 14.51 20.7159 15.0083 20.1502 15.37C20.2975 16.0272 20.2765 16.7109 20.0892 17.3578C19.9018 18.0047 19.5542 18.5938 19.0785 19.0705C18.6027 19.5473 18.0144 19.8961 17.3679 20.0848C16.7213 20.2736 16.0377 20.296 15.3802 20.15C15.019 20.7179 14.5203 21.1854 13.9303 21.5093C13.3404 21.8332 12.6782 22.0031 12.0052 22.0031C11.3322 22.0031 10.67 21.8332 10.0801 21.5093C9.49011 21.1854 8.99143 20.7179 8.63019 20.15C7.97303 20.2973 7.2893 20.2764 6.6424 20.089C5.9955 19.9017 5.40638 19.554 4.92966 19.0783C4.45294 18.6026 4.10405 18.0142 3.91535 17.3677C3.72665 16.7212 3.70423 16.0375 3.85019 15.38C3.28015 15.0192 2.81061 14.5202 2.48524 13.9292C2.15988 13.3383 1.98926 12.6746 1.98926 12C1.98926 11.3254 2.15988 10.6617 2.48524 10.0708C2.81061 9.47983 3.28015 8.98076 3.85019 8.62001Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 17V8H15M11 12H14M9 16H13"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      if (type === "stroke") {
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            strokeDasharray={strokeDasharray}
            opacity={opacity}
            {...props}
            ref={forwardedRef}
          >
            <path
              d="M3.85 8.61998C3.70404 7.9625 3.72646 7.27882 3.91516 6.63231C4.10386 5.98581 4.45275 5.39742 4.92947 4.9217C5.40619 4.44597 5.99531 4.09832 6.64221 3.91097C7.28911 3.72362 7.97284 3.70264 8.63 3.84998C8.99171 3.28428 9.49001 2.81873 10.079 2.49626C10.6679 2.17379 11.3285 2.00476 12 2.00476C12.6715 2.00476 13.3321 2.17379 13.9211 2.49626C14.51 2.81873 15.0083 3.28428 15.37 3.84998C16.0282 3.702 16.7131 3.72288 17.361 3.91069C18.0089 4.09849 18.5988 4.44712 19.0758 4.92413C19.5529 5.40114 19.9015 5.99105 20.0893 6.63898C20.2771 7.28691 20.298 7.97181 20.15 8.62998C20.7157 8.99168 21.1812 9.48998 21.5037 10.0789C21.8262 10.6679 21.9952 11.3285 21.9952 12C21.9952 12.6714 21.8262 13.3321 21.5037 13.921C21.1812 14.51 20.7157 15.0083 20.15 15.37C20.2973 16.0271 20.2764 16.7109 20.089 17.3578C19.9017 18.0047 19.554 18.5938 19.0783 19.0705C18.6026 19.5472 18.0142 19.8961 17.3677 20.0848C16.7212 20.2735 16.0375 20.2959 15.38 20.15C15.0188 20.7178 14.5201 21.1854 13.9301 21.5093C13.3402 21.8332 12.678 22.003 12.005 22.003C11.332 22.003 10.6698 21.8332 10.0799 21.5093C9.48992 21.1854 8.99124 20.7178 8.63 20.15C7.97284 20.2973 7.28911 20.2763 6.64221 20.089C5.99531 19.9016 5.40619 19.554 4.92947 19.0783C4.45275 18.6025 4.10386 18.0141 3.91516 17.3676C3.72646 16.7211 3.70404 16.0374 3.85 15.38C3.27996 15.0192 2.81042 14.5201 2.48505 13.9292C2.15969 13.3382 1.98907 12.6746 1.98907 12C1.98907 11.3254 2.15969 10.6617 2.48505 10.0708C2.81042 9.4798 3.27996 8.98073 3.85 8.61998Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 17V8H15M11 12H14M9 16H13"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`BadgeSwissFranc doesn't support ${type}`);
      return null;
    },
  );

BadgeSwissFranc.displayName = "BadgeSwissFranc";

BadgeSwissFranc.metadata = {
  name: "BadgeSwissFranc",
  category: "stroke/shopping",
  tags: ["badge", "swiss", "franc", "icon"],
  description: "BadgeSwissFranc icon from stroke/shopping category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BadgeSwissFranc;
