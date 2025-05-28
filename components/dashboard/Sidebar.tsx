'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles,
  BookOpen,
  Lock,
  TrendingDown,
  BarChart3,
  Zap,
  Users,
  MessageSquare
} from 'lucide-react'

const menuItems = [
  {
    section: 'YOUR',
    items: [
      { icon: TrendingUp, label: 'Portfolio' },
      { icon: Sparkles, label: 'Valura AI' }
    ]
  },
  {
    section: 'EXPLORE',
    items: [
      { icon: BookOpen, label: 'Guided' },
      { icon: Lock, label: 'Valura Exclusives' },
      { icon: TrendingDown, label: 'Deal Flow' },
      { icon: BarChart3, label: 'Public Markets' },
      { icon: Zap, label: 'Trade Stocks & ETFs' }
    ]
  },
  {
    section: 'LOUNGE',
    items: [{ icon: Users, label: 'Community' }]
  }
]

// Responsive widths
const expandedWidth = 'clamp(16rem, 16vw, 16rem)' // Reduced slightly for compactness
const collapsedWidth = '5rem' // Slightly smaller for collapsed state

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('Portfolio')

  return (
    <motion.div
      initial={{ width: expandedWidth }}
      animate={{ width: isCollapsed ? collapsedWidth : expandedWidth }}
      transition={{ type: 'spring', stiffness: 210, damping: 25 }}
      className="flex flex-col bg-white/90 backdrop-blur-md h-screen rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-xl overflow-hidden select-none"
      style={{ minWidth: collapsedWidth, maxWidth: expandedWidth }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-2 sm:px-3 py-2 border-b border-gray-200/30 flex-shrink-0">
        {!isCollapsed && (
          <div
            className="font-semibold text-base text-gray-800 select-none"
            style={{ fontSize: 'clamp(1rem, 1vw, 5rem)' }}
          >
            Valura
          </div>
        )}
        <button
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={() => setIsCollapsed((v) => !v)}
          className="bg-white shadow rounded-full p-1 sm:p-1.5 hover:bg-gray-100 transition-colors"
          tabIndex={0}
          type="button"
        >
          {isCollapsed ? (
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5 text-gray-600" />
          )}
        </button>
      </div>

      <nav className="flex-grow overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent" style={{ minHeight: 0 }}>
        {menuItems.map((section, sidx) => (
          <div key={sidx} className="mb-3">
            {!isCollapsed && (
              <h3
                className="mb-1 px-3 font-semibold text-gray-400 uppercase tracking-wider select-none"
                style={{ fontSize: 'clamp(0.8rem, 0.8vw, 0.7rem)' }}
              >
                {section.section}
              </h3>
            )}
            <div className="flex flex-col space-y-0.5">
              {section.items.map((item, iidx) => {
                const isActive = activeItem === item.label
                return (
                  <button
                    key={iidx}
                    onClick={() => setActiveItem(item.label)}
                    title={isCollapsed ? item.label : undefined}
                    className={`flex items-center gap-2 rounded-lg transition-colors duration-200 w-full
                      ${
                        isActive
                          ? 'bg-green-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }
                      px-2 sm:px-2.5 py-1`}
                    style={
                      isActive
                        ? {
                            backgroundColor: '#05A049',
                            boxShadow: '0 3px 5px rgb(5 160 73 / 0.25)'
                          }
                        : undefined
                    }
                    type="button"
                  >
                    <item.icon
                      className={isActive ? 'text-white' : 'text-gray-600'}
                      size={isCollapsed ? 14 : 18}
                    />
                    {!isCollapsed && (
                      <span
                        className="truncate select-none"
                        style={{ lineHeight: 1, fontSize: 'clamp(1rem, 1vw, 1rem)' }}
                      >
                        {item.label}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-auto px-3 pb-4 space-y-3">
          {!isCollapsed ? (
            <>
              <div
                className="p-2 bg-white rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow space-y-0.5 select-none text-xs"
                role="button"
                tabIndex={0}
              >
                <h4 className="font-semibold text-gray-900" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)' }}>
                  KYC Account Setup
                </h4>
                <p className="text-gray-600 leading-tight" style={{ fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)' }}>
                  Set up your investment accounts
                </p>
                <div className="flex justify-end">
                  <ChevronLeft className="w-4 h-4 text-gray-400 rotate-180" />
                </div>
              </div>
              <div
                className="p-2 bg-white rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow space-y-0.5 select-none text-xs"
                role="button"
                tabIndex={0}
              >
                <h4 className="font-semibold text-gray-900" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)' }}>
                  Message from your team
                </h4>
                <p className="text-gray-600 leading-tight" style={{ fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)' }}>
                  Schedule a welcome call
                </p>
                <div className="flex justify-end">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col items-center space-y-0.5">
                <Image
                  src="/valura-logo.png"
                  alt="Valura Logo"
                  width={32}
                  height={32}
                  priority
                  draggable={false}
                />
                <button
                  type="button"
                  className="text-center text-gray-800 hover:underline focus:outline-none focus:ring-0"
                  style={{ fontSize: 'clamp(0.625rem, 0.9vw, 0.75rem)' }}
                >
                  Send feedback
                </button>
                <button
                  type="button"
                  className="text-center text-gray-500 hover:underline focus:outline-none focus:ring-0"
                  style={{ fontSize: 'clamp(0.5625rem, 0.8vw, 0.6875rem)' }}
                >
                  Legal, Privacy & Terms
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center space-y-0.5">
              <Image src="/valura-logo.png" alt="Valura Logo" width={28} height={28} priority draggable={false} />
              <button
                className="focus-visible:outline-none text-[9px] text-gray-500"
                type="button"
                style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}
              >
                Legal & Privacy
              </button>
            </div>
          )}
        </div>
      </nav>
    </motion.div>
  )
}