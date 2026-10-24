/**
 * Icon to indicate that a link is external and will open in a new tab.
 * The <title> element is the accessible name for the icon, so it
 * conveys the information both visually and for screen readers.
 */
export default function ExternalLinkIcon({ className }: { className?: string; }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <title>Opens in a new tab.</title>
      <g id="a">
        <rect x="160" width="160" height="32" rx="8" ry="8"/>
        <rect x="288" width="32" height="160" rx="8" ry="8"/>
        <rect x="57" y="100" width="290" height="32" rx="8" ry="8" transform="translate(-23 178) rotate(-45)"/>
      </g>
      <g id="b">
        <rect y="288" width="260" height="32" rx="8" ry="8"/>
        <rect x="228" y="160" width="32" height="160" rx="8" ry="8"/>
        <rect y="58" width="160" height="32" rx="8" ry="8"/>
        <rect y="60" width="32" height="260" rx="8" ry="8"/>
      </g>
    </svg>
  );
}
