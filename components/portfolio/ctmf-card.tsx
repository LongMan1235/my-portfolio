import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CTMFCardProps {
  number: number
  strand: string
  title: string
  children: React.ReactNode
}

export function CTMFCard({ number, strand, title, children }: CTMFCardProps) {
  return (
    <Card className="bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 flex-wrap">
          <Badge
            variant="outline"
            className="bg-primary/10 text-primary border-primary/30 transition-colors duration-200"
          >
            CTMF {number}
          </Badge>
          <Badge variant="secondary" className="text-muted-foreground transition-colors duration-200">
            {strand}
          </Badge>
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground leading-relaxed space-y-4">
        {children}
      </CardContent>
    </Card>
  )
}
