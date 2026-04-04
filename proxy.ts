import { withNanocrawl } from 'nanocrawl-sdk'

export const proxy = withNanocrawl({
  sellerWallet: process.env.NANOCRAWL_SELLER_WALLET! || '0xfC2a63e79f57655aeD2CA6A4e15dDc6A3644B566',
  pricing: {
    '/': 0.001,
  },
})

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
}
