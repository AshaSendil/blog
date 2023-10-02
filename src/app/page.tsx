import {Footer} from '@/components/footer/footer'
import Header from '@/components/header/header'
import Image from 'next/image'
import Blog from './blog/page'
import TestinominalContent from './testinominal/_component/testinominalcontent'

export default function Home() {
  return (
    <div className='overflow-y-visible	'>
    <Header/>
    <Blog/>
    <TestinominalContent/>
    <Footer/>
    </div>
  )
}
