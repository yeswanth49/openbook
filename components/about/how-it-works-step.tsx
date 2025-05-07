import { Card, CardContent } from "@/components/ui/card"

interface HowItWorksStepProps {
  number: string
  title: string
  description: string
  image: string
}

export default function HowItWorksStep({ number, title, description, image }: HowItWorksStepProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
