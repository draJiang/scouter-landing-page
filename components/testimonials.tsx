import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Winning the affection of language learners</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Quickly adding to Anki and understanding words and sentences in context are users' favorite features</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl grid grid-cols-1 gap-4 lg:grid-cols-2 mx-auto" data-aos="zoom-y-out">
            <div className="flex flex-col gap-4 relative items-start bg-white">

              {/* Testimonial */}
              <div className="text-center max-w-md px-12 py-8 mx-4 md:mx-0 border-2 border-gray-200 rounded">
                {/* <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                </div> */}
                <blockquote className="text-xl font-medium mb-4">
                  “ Your extension is truly remarkable, delivering an exceptional experience. Your innovative idea demonstrates ingenuity, and this extension proves to be incredibly valuable. I express my sincere appreciation for your diligent development efforts.“
                </blockquote>
                <div className="text-gray-600">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <cite className="block font-bold text-lg not-italic mb-1">Dev Guy</cite>
                {/* <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div> */}
              </div>

              {/* Testimonial */}
              <div className="text-center max-w-md px-12 py-8 mx-4 md:mx-0 border-2 border-gray-200 rounded">
                {/* <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                </div> */}
                <blockquote className="text-xl font-medium mb-4">
                  “ 使用起來很棒，學習英文的好工具，查字典、翻譯或任何英文相關問題都可以詢問，也可以把不熟的單字加進Anki方便複習，感謝作者努力，推薦好的工具給大家使用，各位一定要來下載試試看 “
                </blockquote>
                <div className="text-gray-600">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <cite className="block font-bold text-lg not-italic mb-1">Jack</cite>
                {/* <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div> */}
              </div>

            </div>

            <div className="flex flex-col gap-4 relative items-start bg-white">

              {/* Testimonial */}
              <div className="text-center max-w-md px-12 py-8 mx-4 md:mx-0 border-2 border-gray-200 rounded">
                {/* <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                </div> */}
                <blockquote className="text-xl font-medium mb-4">
                  “ 非常棒的英语学习插件!
                  相信每一个英语困难的朋友,在学习的过程中,都会产生这样的想法: 要是有一天能有人帮忙把需要记忆的每个单词配上一个漂亮的图片, 简单合适的句子该多好啊
                  而作者开发的这个插件做到了!!! “
                </blockquote>
                <div className="text-gray-600">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <cite className="block font-bold text-lg not-italic mb-1">176 Summer</cite>
                {/* <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div> */}
              </div>

              {/* Testimonial */}
              <div className="text-center max-w-md px-12 py-8 mx-4 md:mx-0 border-2 border-gray-200 rounded">
                {/* <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                </div> */}
                <blockquote className="text-xl font-medium mb-4">
                  “ 非常棒，在场景中学习的利器“
                </blockquote>
                <div className="text-gray-600">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <cite className="block font-bold text-lg not-italic mb-1">Yancy Min</cite>
              </div>

            </div>

          </div>


        </div>
      </div>
    </section>
  )
}