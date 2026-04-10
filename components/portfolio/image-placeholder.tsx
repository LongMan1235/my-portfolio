import { ImageIcon } from "lucide-react"

interface ImagePlaceholderProps {
  caption: string
  figureNumber: string
  aspectRatio?: "video" | "square" | "wide"
}

export function ImagePlaceholder({
  caption,
  figureNumber,
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  }

  return (
    <figure className="my-6">
      <div
        className={`${aspectClasses[aspectRatio]} w-full rounded-lg border-2 border-dashed border-border bg-secondary/30 flex flex-col items-center justify-center gap-3 transition-colors hover:border-primary/50`}
      >
        <ImageIcon className="size-12 text-muted-foreground" />
        <span className="text-sm text-muted-foreground font-medium">
          Insert Image
        </span>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
        <span className="font-semibold text-primary">{figureNumber}:</span>{" "}
        {caption}
      </figcaption>
    </figure>
  )
}
