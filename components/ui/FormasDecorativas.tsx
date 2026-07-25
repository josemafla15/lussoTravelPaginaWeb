type Props = {
  variante: "espiral" | "circulo" | "estrella";
  color?: string;
  className?: string;
};

export default function FormaDecorativa({
  variante,
  color = "var(--color-lusso-cream)",
  className = "",
}: Props) {
  if (variante === "espiral") {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 170 60
             C 170 20, 130 10, 100 20
             C 60 35, 40 75, 55 110
             C 68 140, 100 155, 125 145
             C 145 137, 150 115, 135 105"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variante === "circulo") {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="70" stroke={color} strokeWidth="14" />
      </svg>
    );
  }

  // estrella
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 10 L115 80 L190 60 L130 105 L160 175 L100 135 L40 175 L70 105 L10 60 L85 80 Z" />
    </svg>
  );
}