import { Grid2X2, Grid3X3 } from "lucide-react";
import { LayoutModel } from "../deals/store";
import clsx from "clsx";

export default function LayoutSelector({
  layout,
  onChange,
}: {
  layout: LayoutModel;
  onChange: (layout: LayoutModel) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onChange(LayoutModel.Comfortable)}
        className={clsx(
          "rounded-md p-1 cursor-pointer",
          layout === LayoutModel.Comfortable && "bg-[var(--accent)] text-white",
        )}
        aria-label="Comfortable grid view"
      >
        <Grid2X2 className="size-6" strokeWidth={1.6} />
      </button>
      <button
        onClick={() => onChange(LayoutModel.Dense)}
        className={clsx(
          "rounded-md p-1 cursor-pointer",
          layout === LayoutModel.Dense && "bg-[var(--accent)] text-white",
        )}
        aria-label="Dense grid view"
      >
        <Grid3X3 className="size-6" strokeWidth={1.6} />
      </button>
    </div>
  );
}
