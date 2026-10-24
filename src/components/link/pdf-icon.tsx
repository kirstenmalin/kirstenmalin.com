/**
 * Icon to indicate that a link links to a pdf file.
 * The <title> element is the accessible name for the icon, so it
 * conveys the information both visually and for screen readers.
 */
export default function PdfIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253 325">
      <title>PDF</title>
      <text x="36" y="230" fontSize="96">PDF</text>
      <g id="b">
        <rect y="0" width="167" height="32" rx="8" ry="8"/>
        <rect y="0" width="32" height="320" rx="8" ry="8"/>
        <rect y="288" width="247" height="32" rx="8" ry="8"/>
        <rect x="215" y="80" width="32" height="240" rx="8" ry="8"/>
      </g>
      <g id="a">
        <rect x="110" y="-115" width="128" height="32" rx="8" ry="8" transform="rotate(45)"/>
        <rect x="135" width="32" height="112" rx="8" ry="8"/>
        <rect x="135" y="80" width="112" height="32" rx="8" ry="8"/>
      </g>
      {/* Alternate design with three "text" lines instead of acutal text */}
      {/* <g>
        <rect x="52" y="150" width="143" height="20" rx="8" ry="8" />
        <rect x="52" y="195" width="143" height="20" rx="8" ry="8" />
        <rect x="52" y="240" width="143" height="20" rx="8" ry="8" />
      </g> */}
    </svg>
  );
}
