import { cn } from "@/lib/utils/cn";
export default function ServiceCard({
  title = "Service Title",
  description = "Short description about the service goes here.",
  icon: Icon = null,
  className,
  id,
}) {
  return (
    <article
      className={cn(
        "relative rounded-3xl border border-gray-200 bg-white p-6 pt-10 shadow-sm ring-1 ring-gray-100",
        "transition hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {/* Floating icon badge */}
      <div className={`absolute -top-7 left-1/2 -translate-x-1/2 ${id}`}>
        <div className="inline-flex size-14 items-center justify-center rounded-full bg-[#e23d35] text-white shadow-lg ring-4 ring-[#e23d35]/25">
          {Icon ? <Icon className="size-7" aria-hidden="true" /> : null}
        </div>
      </div>

      <h3 className="text-2xl font-extrabold leading-snug text-[#0b3a74]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        {description}
      </p>
    </article>
  );
}
