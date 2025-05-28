"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function NewsWidget() {
  return (
    <Card className="w-full rounded-[2rem] shadow-md overflow-hidden p-0 bg-white border border-gray-200 min-h-[420px] max-h-[480px] flex flex-col justify-between">
      {/* News Section */}
      <div className="flex flex-col flex-1">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wbaB77xMXV7KZYBMGnfL4l3Z153Hoi.png"
          alt="News"
          className="w-full object-cover aspect-[3/1] bg-gray-100 max-h-32"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg?height=100&width=300';
          }}
        />
        <div className="px-4 py-3 space-y-2 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-[#E63946] hover:bg-[#D62839] text-white text-[11px] px-2 py-0.5 rounded font-semibold shadow-none tracking-wide">
              CNN News
            </Badge>
            <span className="text-[11px] text-gray-400 font-medium">25 min ago</span>
          </div>
          <h3 className="font-semibold text-base leading-tight text-gray-900 mb-1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer
          </h3>
          <p className="text-xs text-gray-600 leading-snug flex-1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam...
          </p>
          <div className="flex items-center justify-end pt-1">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full hover:bg-gray-100 border border-gray-200 p-0">
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full hover:bg-gray-100 border border-gray-200 p-0">
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}