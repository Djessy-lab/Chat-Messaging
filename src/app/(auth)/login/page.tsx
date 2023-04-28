'use client'

import Button from '@/components/ui/Button'
import { FC, useState } from 'react';
import { signIn } from "next-auth/react";
import { toast } from 'react-hot-toast';


const Page: FC = ({ }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function loginWithGoogle() {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      // display error message to user
      toast.error('Something went wrong with your login.')
    } finally {
      setIsLoading(false)
    }
  }

  return <>
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full flex flex-col items-center max-w-md space-y-8'>
        <div className='flex flex-col items-center gap-8'>
          <div>

          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="128.000000pt" height="128.000000pt" viewBox="0 0 1280.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
              Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M6095 12794 c-27 -2 -115 -8 -195 -14 -1158 -85 -2296 -503 -3249
                -1194 -1410 -1020 -2339 -2557 -2585 -4276 -49 -341 -60 -508 -60 -910 0 -402
                11 -569 60 -910 176 -1227 699 -2366 1518 -3305 132 -151 433 -452 594 -593
                968 -850 2160 -1386 3427 -1541 308 -38 447 -46 795 -46 348 0 487 8 795 46
                1993 244 3764 1427 4767 3184 456 799 722 1651 815 2610 24 253 24 857 0 1110
                -81 836 -282 1553 -638 2276 -496 1007 -1245 1859 -2194 2499 -271 183 -726
                428 -1045 563 -627 266 -1261 422 -1985 488 -112 10 -729 20 -820 13z m845
                -569 c748 -74 1424 -266 2069 -589 1755 -879 2947 -2559 3195 -4506 57 -444
                57 -1016 0 -1460 -190 -1489 -937 -2843 -2091 -3788 -864 -709 -1899 -1153
                -2993 -1286 -276 -34 -395 -41 -720 -41 -325 0 -444 7 -720 41 -2051 249
                -3828 1582 -4652 3489 -251 580 -400 1177 -460 1845 -28 312 -15 862 28 1200
                247 1945 1440 3627 3195 4506 714 357 1479 558 2309 608 141 8 692 -4 840 -19z"/>
              <path d="M10140 8845 c-36 -8 -157 -32 -270 -54 -547 -107 -1077 -210 -1490
              -291 -250 -49 -1263 -247 -2250 -440 -987 -193 -2001 -391 -2252 -440 -581
              -114 -1281 -251 -1693 -332 -308 -60 -321 -63 -355 -94 -32 -30 -35 -37 -35
              -89 0 -55 2 -59 46 -99 25 -22 404 -331 842 -684 l797 -644 0 -927 0 -928 23
              -34 c27 -40 88 -66 133 -55 20 5 173 151 524 501 l495 495 885 -716 c487 -394
              896 -720 910 -726 34 -13 97 -4 122 19 11 10 864 1223 1895 2696 1295 1849
              1876 2687 1879 2710 6 38 -20 92 -56 119 -36 26 -76 29 -150 13z m8 -158 c-10
              -7 -1348 -787 -2975 -1735 l-2958 -1723 -300 -589 c-233 -456 -301 -582 -303
              -559 -3 24 17 379 73 1338 8 134 16 245 17 246 2 1 626 294 1388 652 2443
              1149 4598 2162 4835 2274 127 60 232 109 235 109 3 -1 -3 -6 -12 -13z"/>
            </g>
          </svg>

          </div>

          <h2 className='mt-6 text-center text-3xl font-bold tracking-tigh text-gray-900'>Sign in to your account</h2>
        </div>

        <Button
          isLoading={isLoading}
          type='button'
          className='max-w-sm mx-auto w-full'
          onClick={loginWithGoogle}>
          {isLoading ? null : (
            <svg
              className='mr-2 h-4 w-4'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='github'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <path
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                fill='#4285F4'
              />
              <path
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                fill='#34A853'
              />
              <path
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                fill='#FBBC05'
              />
              <path
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                fill='#EA4335'
              />
              <path d='M1 1h22v22H1z' fill='none' />
            </svg>
          )}
          Google
        </Button>
      </div>
    </div>
  </>
}

export default Page;
