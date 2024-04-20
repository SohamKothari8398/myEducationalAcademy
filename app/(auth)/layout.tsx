import Footer from "@/components/footer";
import { LandingPageNavbar } from "@/components/navbar";
import React, { lazy, Suspense } from 'react';
const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full flex items-center justify-center">
      {children}
      <div className="h-full w-full flex bg-blue-200 flex-col items-center justify-center overflow-hidden">
        <div className="flex items-center bg-sky-950 justify-center h-full w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPageNavbar />
          </Suspense>
        </div>
        {/* <div className="h-8 bg-black w-full items-center font-bold text-xs sm:text-base md:text-lg flex flex-row justify-evenly text-white">
        <div className=" cursor-pointer">AboutUs</div>
        <div className=" cursor-pointer">Courses</div>
        <div className=" cursor-pointer">Reviews</div>
        <div className=" cursor-pointer">Results</div>
        <div className=" cursor-pointer">Contactus</div>
      </div> */}
        <div data-previewlistener="someValue" suppressHydrationWarning={true} className="h-full w-full">{children}</div>
        <div className="flex items-center bg-sky-950 justify-center h-full w-full"><Footer /></div>
      </div>
    </div>
  );
}
export default AuthLayout;