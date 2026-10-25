/**
 * Icon to indicate that a link is external and will open in a new tab.
 * The <title> element is the accessible name for the icon, so it
 * conveys the information both visually and for screen readers.
 */
export default function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 320">
      <title>Opens in a new tab.</title>
      <g id="a">
        <rect x="120" y="40" width="120" height="32" rx="8" ry="8"/>
        <rect x="208" y="40" width="32" height="120" rx="8" ry="8"/>
        <rect x="-80" y="182" width="208" height="32" rx="8" ry="8" transform="rotate(-45)"/>
      </g>
      <g id="b">
        <rect y="248" width="200" height="32" rx="8" ry="8"/>
        <rect x="168" y="180" width="32" height="100" rx="8" ry="8"/>
        <rect y="80" width="100" height="32" rx="8" ry="8"/>
        <rect y="80" width="32" height="200" rx="8" ry="8"/>
      </g>
    </svg>
  );
}
