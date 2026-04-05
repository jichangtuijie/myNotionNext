import DashboardButton from '@/components/ui/dashboard/DashboardButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import throttle from 'lodash.throttle'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { DarkModeButton } from './DarkModeButton'
import { Logo } from './Logo'
import { MenuList } from './MenuList'

/**
 * 顶部导航栏
 */
export const Header = props => {
  const router = useRouter()
  const { isDarkMode } = useGlobal()
  const [buttonTextColor, setColor] = useState(
    router.route === '/' ? 'text-white' : ''
  )

  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  useEffect(() => {
    if (isDarkMode || router.route === '/') {
      setColor('text-white')
    } else {
      setColor('')
    }
    window.addEventListener('scroll', navBarScollListener)
    return () => {
      window.removeEventListener('scroll', navBarScollListener)
    }
  }, [isDarkMode])

  const throttleMs = 200
  const navBarScollListener = useCallback(
    throttle(() => {
      const ud_header = document.querySelector('.ud-header')
      const scrollY = window.scrollY
      if (scrollY > 0) {
        ud_header?.classList?.add('sticky')
      } else {
        ud_header?.classList?.remove('sticky')
      }
    }, throttleMs)
  )

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <div className='ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between'>
            {/* Logo — 固定宽度，不参与 flex 竞争 */}
            <div className='flex-shrink-0'>
              <Logo {...props} />
            </div>

            {/* 中间菜单 — 占满剩余空间，禁止溢出 */}
            <div className='flex-1 mx-4 overflow-hidden'>
              <MenuList {...props} />
            </div>

            {/* 右侧功能按钮 — 固定宽度 */}
            <div className='flex-shrink-0 flex items-center gap-4'>
              <DarkModeButton />
              {enableClerk && (
                <>
                  <SignedOut>
                    <div className='hidden sm:flex gap-4'>
                      <SmartLink
                        href={siteConfig('STARTER_NAV_BUTTON_1_URL', '')}
                        className={`loginBtn ${buttonTextColor} text-base font-medium hover:opacity-70`}>
                        {siteConfig('STARTER_NAV_BUTTON_1_TEXT')}
                      </SmartLink>
                      <SmartLink
                        href={siteConfig('STARTER_NAV_BUTTON_2_URL', '')}
                        className={`signUpBtn ${buttonTextColor} px-4 py-2 rounded-md bg-white bg-opacity-20 text-base font-medium duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark`}>
                        {siteConfig('STARTER_NAV_BUTTON_2_TEXT')}
                      </SmartLink>
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                    <DashboardButton className={'hidden md:block'} />
                  </SignedIn>
                </>
              )}
              {!enableClerk && (
                <div className='hidden sm:flex gap-4'>
                  <SmartLink
                    href={siteConfig('STARTER_NAV_BUTTON_1_URL', '')}
                    className={`loginBtn ${buttonTextColor} text-base font-medium hover:opacity-70`}>
                    {siteConfig('STARTER_NAV_BUTTON_1_TEXT')}
                  </SmartLink>
                  <SmartLink
                    href={siteConfig('STARTER_NAV_BUTTON_2_URL', '')}
                    className={`signUpBtn ${buttonTextColor} px-4 py-2 rounded-md bg-white bg-opacity-20 text-base font-medium duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark`}>
                    {siteConfig('STARTER_NAV_BUTTON_2_TEXT')}
                  </SmartLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Navbar Section End --> */}
    </>
  )
}
