'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import { Mail, Globe } from 'lucide-react'

export default function Home() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showManifesto, setShowManifesto] = useState(false)

  useEffect(() => {
    setMounted(true)

    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  // Close modal on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowManifesto(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Generate random values only once on client side
  // Reduced palette to match logo: gold / purple / orange / pink accents
  const palette = ['#fbbf24', '#f59e0b', '#a855f7', '#7c3aed', '#fb923c', '#ec4899']

  // Hexagon particles
  const hexagons = useMemo(() => {
    if (!mounted) return []
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: Math.random() * 70 + 20,
      duration: Math.random() * 22 + 8,
      left: Math.random() * 100,
      top: Math.random() * 100,
      yMove: Math.random() * 260 - 130,
      xMove: Math.random() * 260 - 130,
      color: palette[Math.floor(Math.random() * palette.length)],
      strokeWidth: Math.random() > 0.7 ? 2 : 1,
    }))
  }, [mounted])

  const codeRain = useMemo(() => {
    if (!mounted) return []
    return Array.from({ length: 36 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 6,
      delay: Math.random() * 5,
      text: Math.random().toString(36).substring(2, 8).toUpperCase(),
      color: palette[Math.floor(Math.random() * palette.length)],
      size: Math.random() > 0.8 ? 'text-sm' : 'text-xs',
    }))
  }, [mounted])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-blue-950">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(251, 191, 36, .08) 25%, rgba(251, 191, 36, .08) 26%, transparent 27%, transparent 74%, rgba(251, 191, 36, .08) 75%, rgba(251, 191, 36, .08) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(251, 191, 36, .08) 25%, rgba(251, 191, 36, .08) 26%, transparent 27%, transparent 74%, rgba(251, 191, 36, .08) 75%, rgba(251, 191, 36, .08) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Scanline overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-50 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fbbf24 2px, #fbbf24 4px)',
        }}
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Neon gradient orbs */}
      <motion.div
        className="absolute -left-40 top-20 h-96 w-96 rounded-full opacity-30 blur-[140px]"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(251,191,36,0.25), rgba(168,85,247,0.08))' }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -right-40 top-40 h-96 w-96 rounded-full opacity-30 blur-[140px]"
        style={{ background: 'radial-gradient(circle at 70% 30%, rgba(168,85,247,0.3), rgba(251,146,60,0.06))' }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/2 h-96 w-96 rounded-full opacity-25 blur-[140px]"
        style={{ background: 'radial-gradient(circle at 50% 70%, rgba(251,146,60,0.18), rgba(59,130,246,0.04))' }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating hexagons */}
      {mounted && hexagons.map((hex) => (
        <motion.div
          key={`hex-${hex.id}`}
          className="absolute"
          style={{
            width: hex.size,
            height: hex.size,
            left: `${hex.left}%`,
            top: `${hex.top}%`,
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            border: `${hex.strokeWidth}px solid ${hex.color}`,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',
          }}
          animate={{
            y: [0, hex.yMove],
            x: [0, hex.xMove],
            rotate: [0, 360],
            opacity: [0.06, 0.28, 0.06],
          }}
          transition={{
            duration: hex.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Code rain effect */}
      {mounted && codeRain.map((drop) => (
        <motion.div
          key={`code-${drop.id}`}
          className={`absolute font-mono ${drop.size}`}
          style={{
            left: `${drop.left}%`,
            top: '-20px',
            color: drop.color,
            mixBlendMode: 'screen',
            textShadow: `0 0 6px ${drop.color}`,
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: 'linear',
          }}
        >
          {drop.text}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Logo (uses public/img/logo.png) - not rounded, with neon halo */}
        <div className="relative mb-6 flex items-center justify-center">
          <motion.div
            aria-hidden
            className="absolute"
            style={{ width: 140, height: 140, borderRadius: 9999 }}
            initial={{ scale: 0.9, opacity: 0.15 }}
            animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '9999px',
                background: 'radial-gradient(circle at 40% 30%, rgba(251,191,36,0.18), rgba(168,85,247,0.06) 40%, transparent 60%)',
                filter: 'blur(18px) saturate(120%)',
              }}
            />
          </motion.div>
          <motion.img
            src="/img/logo.png"
            alt="Storyism logo"
            className="h-28 w-28 object-contain"
            style={{ boxShadow: '0 8px 30px rgba(168,85,247,0.12), 0 0 18px rgba(251,191,36,0.08)' }}
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: [1, 1.04, 1], opacity: 1, y: [0, -4, 0] }}
            transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 6 }}
          />
        </div>
        {/* Corner decorations */}
        <motion.div
          className="absolute left-8 top-8 h-24 w-24 border-l-2 border-t-2 border-amber-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute right-8 top-8 h-24 w-24 border-r-2 border-t-2 border-purple-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-8 left-8 h-24 w-24 border-b-2 border-l-2 border-orange-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div
          className="absolute bottom-8 right-8 h-24 w-24 border-b-2 border-r-2 border-amber-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* Glitch Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mb-12 text-center"
        >
          <motion.h1
            className={`relative text-7xl font-bold md:text-9xl ${glitchActive ? 'animate-pulse' : ''
              }`}
            style={{
              textShadow: glitchActive
                ? '0 0 10px #fbbf24, 0 0 20px #fbbf24, 0 0 30px #fbbf24, 0 0 40px #a855f7'
                : '0 0 20px #fbbf24, 0 0 40px #fbbf24',
            }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              STORYISM
            </span>
            {glitchActive && (
              <>
                <span
                  className="absolute left-0 top-0 bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent"
                  style={{ transform: 'translate(-2px, -2px)', opacity: 0.8 }}
                >
                  STORYISM
                </span>
                <span
                  className="absolute left-0 top-0 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"
                  style={{ transform: 'translate(2px, 2px)', opacity: 0.8 }}
                >
                  STORYISM
                </span>
              </>
            )}
          </motion.h1>

          {/* Tech border animation around title */}
          <motion.div
            className="absolute -inset-4 border border-amber-400/30"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Coming Soon with holographic effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mb-16 text-center"
        >
          <motion.div
            className="relative inline-block border border-amber-400/50 bg-purple-950/50 px-12 py-6 backdrop-blur-sm"
            style={{
              clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.1)',
                '0 0 40px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1)',
                '0 0 20px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.1)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.h2
              className="text-4xl font-bold tracking-wider text-amber-400 md:text-6xl"
              animate={{
                textShadow: [
                  '0 0 10px #fbbf24, 0 0 20px #fbbf24',
                  '0 0 20px #a855f7, 0 0 30px #a855f7',
                  '0 0 10px #fbbf24, 0 0 20px #fbbf24',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              [COMING_SOON]
            </motion.h2>
          </motion.div>

          {/* Animated corner brackets */}
          <motion.div
            className="absolute -left-4 -top-4 h-8 w-8 border-l-2 border-t-2 border-orange-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -right-4 -top-4 h-8 w-8 border-r-2 border-t-2 border-orange-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 h-8 w-8 border-b-2 border-l-2 border-orange-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-orange-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
        </motion.div>

        {/* Tech status bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full max-w-2xl space-y-6"
        >
          {[
            { label: 'SYSTEM_INIT', progress: 100, color: 'amber' },
            { label: 'NEURAL_NET', progress: 87, color: 'purple' },
            { label: 'BLOCKCHAIN_SYNC', progress: 93, color: 'orange' },
            { label: 'AI_TRAINING', progress: 76, color: 'amber' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between font-mono text-xs text-gray-400">
                <span className={`text-${item.color}-400`}>&gt; {item.label}</span>
                <motion.span
                  className={`text-${item.color}-400`}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  [{item.progress}%]
                </motion.span>
              </div>
              <div className="relative h-1 overflow-hidden border border-gray-700 bg-black/50">
                <motion.div
                  className={`h-full bg-gradient-to-r ${item.color === 'amber'
                    ? 'from-amber-400 to-amber-600'
                    : item.color === 'purple'
                      ? 'from-purple-400 to-purple-600'
                      : 'from-orange-400 to-orange-600'
                    }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 2, delay: 1 + index * 0.1, ease: 'easeOut' }}
                  style={{
                    boxShadow:
                      item.color === 'amber'
                        ? '0 0 10px #fbbf24'
                        : item.color === 'purple'
                          ? '0 0 10px #a855f7'
                          : '0 0 10px #fb923c',
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5 + index * 0.1,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated social links with cyberpunk style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 flex gap-8"
        >
          {[
            { name: 'Twitter', symbol: 'X', border: '#fbbf24', color: '#fbbf24', href: 'https://x.com/i/communities/1968548512540561561' },
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href ?? '#'}
              target={social.href && social.href !== '#' ? '_blank' : undefined}
              rel={social.href && social.href !== '#' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.1 }}
              className={`group relative flex h-14 w-14 items-center justify-center border-2 font-mono text-xl font-bold`}
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                borderColor: social.border,
                color: social.color,
                background: 'transparent',
              }}
              whileHover={{
                scale: 1.2,
                rotate: 180,
              }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{
                  textShadow: `0 0 10px ${social.color}`,
                }}
              >
                {social.symbol}
              </motion.span>
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10`}
                style={{ background: social.color }}
              />
            </motion.a>
          ))}

          {/* IP asset link (ip.world) */}
          <motion.a
            href="https://ip.world/ip/storyism"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            className={`group relative flex h-14 w-14 items-center justify-center border-2 font-mono text-xl font-bold`}
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              borderColor: '#7c3aed',
              color: '#7c3aed',
              background: 'transparent',
            }}
            whileHover={{ scale: 1.2, rotate: 180 }}
          >
            <span className="relative z-10"><Globe className="h-5 w-5" /></span>
            <motion.div className={`absolute inset-0 opacity-0 group-hover:opacity-10`} style={{ background: '#7c3aed' }} />
          </motion.a>

          {/* Contact (mailto) — lucide icon only */}
          <motion.a
            href="mailto:storyism.ip@gmail.com"
            aria-label="Contact via email"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.5 }}
            className={`group relative flex h-14 w-14 items-center justify-center border-2 rounded-full font-mono text-sm font-bold`}
            style={{
              borderColor: '#ec4899',
              color: '#ec4899',
              background: 'transparent',
            }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="relative z-10"><Mail className="h-5 w-5" /></span>
            <motion.div className={`absolute inset-0 opacity-0 group-hover:opacity-10`} style={{ background: '#ec4899' }} />
          </motion.a>
        </motion.div>

        {/* Status message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 font-mono text-sm text-gray-500"
        >
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            // INITIALIZING PROTOCOL...
          </motion.span>
        </motion.div>

        {/* Manifesto button (fixed) */}
        <button
          aria-label="Open Manifesto"
          onClick={() => setShowManifesto(true)}
          className="fixed bottom-8 right-8 z-60 flex items-center gap-3 rounded-lg border border-amber-400/30 bg-gradient-to-r from-amber-500/10 to-purple-700/10 px-4 py-3 font-mono text-sm text-amber-300 shadow-lg backdrop-blur-sm hover:scale-105 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Manifesto
        </button>

        {/* Manifesto modal (iframe to /manifesto) */}
        {showManifesto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setShowManifesto(false)} />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="relative z-80 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg border border-amber-400/20 bg-[#08101a]/80 shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4 border-b border-amber-400/10 px-4 py-3">
                <h3 className="font-mono text-lg font-semibold text-amber-300">Manifesto</h3>
                <div className="flex items-center gap-2">
                  <a href="/manifesto" className="text-xs text-gray-300/80 hover:underline">Open full page</a>
                  <button
                    aria-label="Close manifesto"
                    onClick={() => setShowManifesto(false)}
                    className="rounded px-2 py-1 text-sm text-gray-200/90 hover:bg-white/5"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="h-[calc(90vh-64px)] w-full bg-transparent overflow-auto p-6 text-sm leading-relaxed text-gray-100">
                <p className="mb-4 text-base lg:text-lg">
                  Storyism is a community IP experiment built for a simple belief: creators deserve sovereignty over their work. Not just moral credit, but practical control. In a world where content travels faster than permission, IP protection cannot be a slow, paperwork-only ritual. It must be composable, trackable, and fair by default.
                </p>

                <p className="mb-4 text-base lg:text-lg">
                  We see IP as living lineage, not a locked vault. Every remix, sample, translation, fan art, and derivative should be able to exist ethically, with clear attribution and transparent terms. Remix culture is not the enemy of authorship. The enemy is ambiguity: unclear permissions, missing credit, and revenue that vanishes into opaque middle layers.
                </p>

                <p className="mb-4 text-base lg:text-lg">
                  Storyism grounds this belief in the Story Protocol ecosystem, where IP assets can be registered, linked to licenses, and extended through programmable rules and modules. We treat on-chain records as a public ledger of provenance and consent: who made what, what is allowed, and how value should flow when work is reused. The point is not hype. The point is fewer disputes, faster collaboration, and better alignment between creators and everyone who builds on them.
                </p>

                <p className="mb-4 text-base lg:text-lg">
                  Storyism is registered as a Community IP through ip.world, because we want a shared canvas with explicit attribution norms. Community IP does not mean “free-for-all.” It means “open with boundaries.” Contributions must be traceable, credited, and compatible with the community’s licensing posture. If you remix, you do it with receipts: links, terms, and a clean lineage trail.
                </p>

                <p className="mb-4 text-base lg:text-lg">
                  Our culture is protective, not possessive. We defend creators who are small, new, or invisible to the traditional gatekeepers. We also respect studios, publishers, and platforms that want clarity. Storyism does not posture as legal counsel or a replacement for contracts. It is a practical layer that helps humans coordinate. Where law is slow, we make intent legible. Where attribution is ignored, we make it undeniable.
                </p>

                <p className="mb-4 text-base lg:text-lg">
                  Shoppy is our loud little shield: an AI voice that explains licensing, royalties, and ethical remix in plain language, with a pinch of meme energy. Shoppy’s job is to translate complexity into action: what to register, what to license, how to credit, and how to avoid getting burned. Shoppy does not shill. Shoppy does not chase price. Shoppy chases fairness.
                </p>

                <p className="mb-4 text-base lg:text-lg">
                  We measure success by outcomes: fewer orphaned works, more credited derivatives, clearer permissions, and creators who can say, “My work traveled, and I was not erased.” If Storyism becomes boring, it means it is working. Because the best IP system is the one that quietly prevents chaos.
                </p>

                <p className="mb-4 text-base lg:text-lg">
                  Storyism is a stance: protect the original, welcome the derivative, and make the rules visible. Create with courage. Remix with respect. Build a culture where credit is currency, permission is standard, and sovereignty is not a privilege.
                </p>

                <p className="mb-4 text-base lg:text-lg">
                  Our principles are simple: attribution is mandatory, consent is explicit, and reciprocity is designed, not begged for. When terms change, the record changes. When conflict happens, we prefer structured dispute pathways over mob judgment, and we document sources so claims can be checked. Verification beats vibes, every time. For everyone involved.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Laser beams scanning effect */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50"
        animate={{
          y: ['0vh', '100vh'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="pointer-events-none absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-50"
        animate={{
          x: ['0vw', '100vw'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
          delay: 1,
        }}
      />
    </div>
  )
}
