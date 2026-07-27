interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: Props) {
  return (
    <div className="flex justify-end gap-3">

      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </button>

      <span>

        {page} / {totalPages}

      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>

    </div>
  );
}