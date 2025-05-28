"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"

const watchlistData = [
	{
		symbol: "GOOG",
		name: "Alphabet.A",
		price: "$1230.19",
		changePercent: "3.4%",
		positive: true,
		color: "bg-black",
		icon: "NIKE", // You can use your icon/SVG here or initials
	},
	{
		symbol: "SPOT",
		name: "Spotify Inc",
		price: "$2342.89",
		changePercent: "3.4%",
		positive: true,
		color: "bg-[#1DB954]", // Spotify Green
	},
	{
		symbol: "AMZN",
		name: "Amazon Inc",
		price: "$340.23",
		changePercent: "3.4%",
		positive: false,
		color: "bg-[#FF9900]", // Amazon Orange
	},
	{
		symbol: "SNAP",
		name: "Snapchat Inc",
		price: "$340.23",
		changePercent: "3.4%",
		positive: false,
		color: "bg-[#FFFC00]", // Snap Yellow
	},
]

function MiniChart({ positive }: { positive: boolean }) {
	return (
		<svg
			className="w-16 h-6"
			viewBox="0 0 64 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d={
					positive
						? "M0 18 L12 10 L24 15 L36 8 L48 13 L64 6"
						: "M0 6 L12 9 L24 10 L36 15 L48 10 L64 14"
				}
				stroke={positive ? "#05A049" : "#EF4444"}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	)
}

export function Watchlist() {
	return (
		<Card className="w-full bg-white rounded-[2rem] shadow-sm p-3 flex flex-col gap-2 h-[300px] overflow-hidden mt-[-16px] mb-4">
			<CardHeader className="p-0 flex items-center justify-between">
				<div>
					<h3 className="text-black font-semibold text-base">Watchlist</h3>
					<p className="text-black text-xs opacity-40">You have 4 Stocks</p>
				</div>
				<Button
					size="sm"
					className="bg-[#05A049] hover:bg-[#047A38] text-white rounded-full px-5 py-2 font-medium shadow-none"
				>
					Add Stock
				</Button>
			</CardHeader>
			<CardContent className="p-0 flex-1 overflow-y-auto">
				<div className="flex flex-col gap-3">
					{watchlistData.map((stock, i) => (
						<div
							key={i}
							className="flex items-center justify-between bg-white rounded-2xl px-3 py-2 shadow-sm hover:shadow-md transition-shadow gap-4"
						>
							<div className="flex items-center gap-3 min-w-0">
								<div
									className={`${stock.color} w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0`}
								>
									<span className="text-white font-bold text-lg">
										{stock.symbol.charAt(0)}
									</span>
								</div>
								<div className="min-w-0">
									<div className="text-black font-semibold text-sm truncate">
										{stock.name}
									</div>
									<div className="text-[#8A8A8F] text-xs font-medium truncate">
										{stock.symbol}
									</div>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex flex-col items-end min-w-[70px]">
									<div className="text-black font-semibold text-sm">
										{stock.price}
									</div>
									<div
										className={`flex items-center gap-1 text-xs font-medium ${
											stock.positive
												? "text-[#05A049]"
												: "text-[#EF4444]"
										}`}
									>
										{stock.positive ? (
											<ArrowUp className="w-3 h-3" />
										) : (
											<ArrowDown className="w-3 h-3" />
										)}
										{stock.changePercent}
									</div>
								</div>
								<MiniChart positive={stock.positive} />
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}