import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import LeftDarkGradient from './background/left-dark-gradient.svg'
import RightDarkGradient from './background/right-dark-gradient.svg'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      {/* <div className="fixed -bottom-11 -left-28 -z-10 h-full w-full opacity-60 sm:-top-1/2 sm:-left-96">
        <LeftDarkGradient />
      </div>
      <div className="fixed -top-96 right-64 -z-10 h-full w-full opacity-60 sm:-right-1/4">
        <RightDarkGradient />
      </div>
      <div className="fixed -bottom-11 -left-28 -z-10 h-full w-full opacity-60 sm:-bottom-[30%] sm:-left-[10%]">
        <RightDarkGradient />
      </div>
      <div className="fixed -top-64 right-64 -z-10 h-full w-full opacity-60 sm:-top-64 md:-right-[60%]">
        <RightDarkGradient />
      </div> */}

      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-8 sm:py-8">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="flex justify-center  text-2xl font-semibold text-primary-500 hover:text-primary-600 dark:text-primary-600 dark:hover:text-primary-500 sm:hidden">
                  {siteMetadata.headerTitle}
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="flex hidden items-center justify-center text-2xl font-semibold text-primary-500 hover:text-primary-600 dark:text-primary-600 dark:hover:text-primary-500 sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
