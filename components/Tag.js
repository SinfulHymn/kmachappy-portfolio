import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <div className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:text-primary-600  dark:hover:text-primary-500">
        {text.split(' ').join('-')}
      </div>
    </Link>
  )
}

export default Tag
