import { withNanocrawl } from 'nanocrawl-sdk'

export const proxy = withNanocrawl({
  sellerWallet: process.env.NANOCRAWL_SELLER_WALLET!,
  redisUrl: process.env.REDIS_URL,
  pricing: {'/job': 0.01, '/jobs/': 0.001 },
  freeRoutes: ['/'],
  volumeTiers: [
    { after: 10, discount: 0.20 },
    { after: 30, discount: 0.40 },
    { after: 60, discount: 0.60 },
  ],
})

export const config = {
  matcher: ['/((?!_next|favicon).*)'],
}
