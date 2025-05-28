'use client'
import React, { useState } from 'react'
import Image from 'next/image'
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

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('Portfolio')

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

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-transparent">

      <div
        className={`flex flex-col bg-white/90 backdrop-blur-md h-full rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-xl overflow-hidden
        transition-all duration-300 ease-in-out
        ${
          isCollapsed
            ? 'w-14 sm:w-16 md:w-20' 
            : 'w-full max-w-[288px] sm:max-w-[320px] md:max-w-[360px]' 
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-start px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200/30 flex-shrink-0">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="bg-white shadow rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Menu - scrollable if needed */}
        <nav
          className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
          px-4 pt-3 pb-5 space-y-7 sm:space-y-8"
          style={{ minHeight: 0 }} 
        >
          {menuItems.map((section, sidx) => (
            <div key={sidx}>
              {!isCollapsed && (
                <h3 className="mb-3 text-[9px] sm:text-[10px] font-semibold text-gray-400 uppercase tracking-wider select-none">
                  {section.section}
                </h3>
              )}
              <div className="flex flex-col space-y-2">
                {section.items.map((item, iidx) => {
                  const isActive = activeItem === item.label
                  return (
                    <button
                      key={iidx}
                      onClick={() => setActiveItem(item.label)}
                      className={`flex items-center gap-3 rounded-xl transition-colors duration-200 w-full
                      ${
                        isActive
                          ? 'bg-green-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }
                      px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base`}
                      title={isCollapsed ? item.label : undefined}
                      style={
                        isActive
                          ? {
                              backgroundColor: '#05A049',
                              boxShadow: '0 4px 6px rgb(5 160 73 / 0.25)',
                            }
                          : undefined
                      }
                    >
                      <item.icon
                        className={isActive ? 'text-white' : 'text-gray-600'}
                        size={18}
                      />
                      {!isCollapsed && <span className="truncate select-none">{item.label}</span>}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}

          {/* KYC & Message Cards */}
          {!isCollapsed && (
            <>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow space-y-1 select-none">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">KYC Account Setup</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-tight">
                  Set up your investment accounts to proceed
                </p>
                <div className="flex justify-end">
                  <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow space-y-1 select-none">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Message from your team</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-tight">
                  Schedule a welcome call or join one of our info sessions
                </p>
                <div className="flex justify-end">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </>
          )}
        </nav>

        {/* Footer */}
        <div className="flex-shrink-0 px-4 py-4 border-t border-gray-200/30 bg-white/60 flex flex-col items-center select-none">
          <div className="w-10 h-10 sm:w-12 sm:h-12 relative mb-2">
            <Image
              src="/valura-logo.png"
              alt="Valura Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {!isCollapsed && (
            <div className="text-center text-gray-500 text-xs sm:text-sm space-y-1">
              <button className="hover:text-gray-700 transition-colors">Send feedback</button>
              <div className="text-[10px] sm:text-xs text-gray-400">Legal &amp; Privacy</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar