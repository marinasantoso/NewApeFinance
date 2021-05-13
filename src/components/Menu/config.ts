
import { MenuEntry } from '@apefinance-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://apefinance.org/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://apefinance.org/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://apefinance.org/pools',
  },
  {
    label: 'Prediction',
    icon: 'TicketIcon',
    href: 'https://apefinance.org/prediction',
  },
  {
    label: 'Lottery',
    icon: 'ReferralIcon',
    href: 'https://apefinance.org/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'ShieldIcon',
    href: 'https://apefinance.org/collectibles',
  },
  // {
  //   label: 'Team Battle',
  //   icon: 'PriceGuardIcon',
  //   href: 'https://apefinance.org/competition',
  // },

  // {
  //   label: 'Teams & Profile',
  //   icon: 'ListingIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://apefinance.org/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://apefinance.org/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://apefinance.org/profile',
  //     }
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://apefinance.info',
      },
      {
        label: 'Tokens',
        href: 'https://bscscan.com/token/0x6f69B679dd51CDc50991DA0b2dc9712d57d4B095',
      },
      {
        label: 'Pairs',
        href: 'https://apefinance.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://apefinance.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'ChartIcon',
    href: 'https://apefinance.org/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.apefinance.org.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://github.com/apefinance',
      },
      {
        label: 'Github',
        href: 'https://docs.apefinance.org',
      },
      {
        label: 'Docs',
        href: 'https://docs.apefinance.finance/',
      },
      {
        label: 'Blog',
        href: 'https://apefinance.medium.com/',
      },
      {
        label: 'Merch',
        href: 'https://apefinance.creator-spring.com/',
      },
    ],
  },
]

export default config
