"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon?: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  onItemClick?: (name: string) => void
  activeTab?: string
}

export function TubelightNavBar({ items, className, onItemClick, activeTab: controlledActiveTab }: NavBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(items[0]?.name || "")
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab

  const handleClick = (item: NavItem) => {
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(item.name)
    }
    if (onItemClick) {
      onItemClick(item.name)
    }
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-colors",
                "text-white/60 hover:text-white",
                isActive && "text-white",
              )}
            >
              <span className="whitespace-nowrap">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/30 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/30 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

