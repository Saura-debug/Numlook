interface Props {
  message: string;
}

export default function LookupError({
  message,
}: Props) {
  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-4">
      <p className="text-red-600">
        {message}
      </p>
    </div>
  );
}