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
    <div className="flex flex-col lg:flex-row min-h-screen bg-transparent pl-2 sm:pl-5 md:pl-7 pt-1 sm:pt-2 md:pt-3 pb-2 sm:pb-5 md:pb-7">
      <div
        className={`flex flex-col bg-white/90 backdrop-blur-md rounded-[2.5rem] border border-gray-200/50 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isCollapsed
            ? 'w-12 sm:w-14 md:w-16' 
            : 'w-full max-w-[210px] sm:max-w-[220px] md:max-w-[230px]'
        }`}
        style={{}}
      >
        {/* Header - toggle button slightly right, above 'YOUR' text */}
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} pt-2 pb-1`}>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className={`bg-white shadow rounded-full p-1 hover:bg-gray-100 transition-colors mb-2 ${!isCollapsed ? 'ml-4' : ''}`}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
        {/* Menu - not scrollable, compact spacing */}
        <nav
          className="flex-grow px-3 pt-2 pb-2 space-y-2 sm:space-y-3 text-[13px] sm:text-[14px]"
          style={{ minHeight: 0 }} 
        >
          {menuItems.map((section, sidx) => (
            <div key={sidx}>
              {!isCollapsed && (
                <h3 className="mb-1 text-[8px] sm:text-[9px] font-semibold text-gray-400 uppercase tracking-wider select-none">
                  {section.section}
                </h3>
              )}
              <div className="flex flex-col space-y-1">
                {section.items.map((item, iidx) => {
                  const isActive = activeItem === item.label
                  return (
                    <button
                      key={iidx}
                      onClick={() => setActiveItem(item.label)}
                      className={`flex items-center gap-2 rounded-xl transition-colors duration-200 w-full ${isActive ? 'bg-green-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'} px-2 py-1.5 sm:px-3 sm:py-1.5 text-[13px] sm:text-[14px]`}
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
                        size={15}
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
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col justify-between p-3 bg-white rounded-2xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow select-none w-full min-h-[72px]">
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs">KYC Account Setup</h4>
                  <p className="text-gray-600 text-[11px] leading-tight truncate">
                    Set up your investment accounts to proceed
                  </p>
                </div>
                <div className="flex justify-end items-end mt-1">
                  <ChevronLeft className="w-4 h-4 text-gray-400 rotate-180" />
                </div>
              </div>
              <div className="flex flex-col justify-between p-3 bg-white rounded-2xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow select-none w-full min-h-[72px]">
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs">Message from your team</h4>
                  <p className="text-gray-600 text-[11px] leading-tight truncate">
                    Schedule a welcome call or join one of our info sessions
                  </p>
                </div>
                <div className="flex justify-end items-end mt-1">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="flex-shrink-0 px-3 py-3 border-t border-gray-200/30 bg-white/60 flex flex-col items-center select-none">
          <div className="w-9 h-9 sm:w-10 sm:h-10 relative mb-1.5">
            <Image
              src="/valura-logo.png"
              alt="Valura Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {!isCollapsed && (
            <div className="text-center text-gray-500 text-[11px] sm:text-xs space-y-0.5">
              <button className="hover:text-gray-700 transition-colors">Send feedback</button>
              <div className="text-[9px] sm:text-[10px] text-gray-400">Legal & Privacy</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar