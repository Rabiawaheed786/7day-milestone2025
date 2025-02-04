import React from 'react'
import Image from "next/image"
import { FaRegHeart } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from '@/components/ui/button';

function Page() {
  return (
    <>
    
     <section className='flex flex-col md:flex-row justify-between mt-[20px] md:mt-[50px] mb-[30px] md:mb-[50px] px-[10px] md:px-[300] gap-[35px] md:gap-0'>

        {/* first div */}
        <div>

            <h2 className='text-[20px] md:text-[22px] leading-[33px] font-medium'>Bag</h2>


            {/* card div 1*/}
            <div className='w-full md:w-[933px] flex gap-[10px] md:gap-[30px] mt-[25px] pb-[15px] md:pb-[37px] border-b-[1px]'>

                {/* picture div */}
                <div>
                    <Image src={"/products/product3.png"} alt="chair" width={150} height={150} className='w-[110px] md:w-[150px] h-[110px] md:h-[150px] transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
                </div>

                {/* text div */}
                <div>
                    <div className='w-full md:w-687 flex items-center gap-[11px] md:gap-[487px]'>
                        <p className='text-[12px] md:text-[16px] leading-[20px] text-[#272343]'>Library Stool Chair</p>

                        <h2 className='text-[12px] md:text-[15px] leading-[28px] font-medium'>MRP: $99</h2>
                    </div>

                    <p className='text-[12px] md:text-[15px] leading-[28px] text-[#757575] md:mt-[28px]'>Ashen Slate/Cobalt Bliss</p>

                    <div className='flex items-center mt-[-5px] md:mt-[0px] gap-[10px] md:gap-[32px] text-[13px] md:text-[15px] md:leading-[28px] text-[#757575]'>
                        <p>Size: <span className='text-black'>L</span></p>
                        <p>Quantity: <span className='text-black'>1</span></p>
                    </div>

                    {/* icons div */}
                    <div className='flex items-center gap-[5px] md:gap-[16px] mt-[10px] md:mt-[20px]'>
                       <FaRegHeart className='text-[17px] md:text-[24px]'/>
                       <IoTrashOutline className='text-[17px] md:text-[24px]'/>
                    </div>
                </div>

            </div>


            {/* second card div */}
             <div className='w-full md:w-[933px] flex gap-[10px] md:gap-[30px] mt-[25px] pb-[15px] md:pb-[37px] border-b-[1px]'>

                {/* picture div */}
                <div>
                    <Image src={"/products/cat1.png"} alt="chair" width={150} height={150} className='w-[110px] md:w-[150px] h-[110px] md:h-[150px] transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
                </div>

                {/* text div */}
                <div>
                    <div className='w-full md:w-687 flex items-center gap-[11px] md:gap-[487px]'>
                        <p className='text-[12px] md:text-[16px] leading-[20px] text-[#272343]'>Library Stool Chair</p>

                        <h2 className='text-[12px] md:text-[15px] leading-[28px] font-medium'>MRP: $99</h2>
                    </div>

                    <p className='text-[12px] md:text-[15px] leading-[28px] text-[#757575] md:mt-[28px]'>Ashen Slate/Cobalt Bliss</p>

                    <div className='flex items-center mt-[-5px] md:mt-[0px] gap-[10px] md:gap-[32px] text-[13px] md:text-[15px] md:leading-[28px] text-[#757575]'>
                        <p>Size: <span className='text-black'>L</span></p>
                        <p>Quantity: <span className='text-black'>1</span></p>
                    </div>

                    {/* icons div */}
                    <div className='flex items-center gap-[5px] md:gap-[16px] mt-[10px] md:mt-[20px]'>
                       <FaRegHeart className='text-[17px] md:text-[24px]'/>
                       <IoTrashOutline className='text-[17px] md:text-[24px]'/>
                    </div>
                </div>

            </div>

        </div>


        {/* second div 2 */}
        <div className='w-full md:w-[350px] h-[295px] text-[#111111]'>
            <h1 className='text-[20px] md:text-[21px] leading-[33px]'>Summary</h1>

            <div className='flex items-center justify-between mt-[25px]'>
                <p className='text-[15px] leading-[28px]'>Subtotal</p>
                <h2 className='text-[14px] leading-[24px] font-medium'>$198.00</h2>
            </div>

            <div className='flex items-center justify-between mt-[8px]'>
                <p className='text-[14px] md:text-[15px] leading-[28px]'>Estimated Delivery & Handling</p>
                <h2 className='text-[15px] leading-[28px] font-medium'>Free</h2>
            </div>

            <div className='w-full h-[62px] flex items-center justify-between border-t-[1px] border-b-[1px] mt-[20px]'>
               <p className='text-[15px] leading-[28px]'>Total</p>
               <h2 className='text-[14px] leading-[24px] font-medium'>$198.00</h2>
            </div>

            {/* button */}

            <Button className='w-full md:w-[334px] h-[50px] md:h-[60px] text-[15px] leading-[24px] font-medium text-white mt-[25px] md:mt-[32px] py-[18px] px-[100px] rounded-[30px] bg-[#029FAE]'>Member Checkout</Button>
        </div>


     </section>
    
    </>
  )
}

export default Page
