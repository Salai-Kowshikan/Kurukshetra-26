interface CyberCornersProps {
  size?: string;
  borderWidth?: string;
  color?: string;
  className?: string;
}

/**
 * Decorative cyber corner borders overlay.
 * Used across Patronage, About, Sponsors cards.
 */
export default function CyberCorners({
  size = "w-10 h-10",
  borderWidth = "border-2",
  color = "border-white/90",
  className = "",
}: CyberCornersProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div
        className={`absolute top-0 left-0 rounded-tl-xl ${size} border-l-${borderWidth.replace("border-", "")} border-t-${borderWidth.replace("border-", "")} ${color}`}
        style={{ borderLeftWidth: 2, borderTopWidth: 2 }}
      />
      <div
        className={`absolute top-0 right-0 rounded-tr-xl ${size} ${color}`}
        style={{ borderRightWidth: 2, borderTopWidth: 2 }}
      />
      <div
        className={`absolute bottom-0 left-0 rounded-bl-xl ${size} ${color}`}
        style={{ borderLeftWidth: 2, borderBottomWidth: 2 }}
      />
      <div
        className={`absolute bottom-0 right-0 rounded-br-xl ${size} ${color}`}
        style={{ borderRightWidth: 2, borderBottomWidth: 2 }}
      />
    </div>
  );
}
