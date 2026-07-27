interface Props {
  label: string;
  value: React.ReactNode;
}

export default function InfoRow({
  label,
  value,
}: Props) {
  return (
    <div className="flex justify-between border-b py-2">
      <span className="font-medium">
        {label}
      </span>

      <span>{value ?? "-"}</span>
    </div>
  );
}