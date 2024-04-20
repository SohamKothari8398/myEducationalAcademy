import { SignUp } from "@clerk/nextjs";
import Slider from "@/components/slider";

export default function Page() {
  const images = [
    "https://drive.google.com/uc?id=1yMK7snCwM2dcEv0J8iAjk__8I5jXO1aj",
    "https://drive.google.com/uc?id=1ebvRU9RMOseCuqLk4KJayXGW1L88Dbrf",
    "https://drive.google.com/uc?id=1Q05XgH-AbU6aqJRZxycZD7jtiCv-XGfV",
    "https://drive.google.com/uc?id=195snmtKk0Wrxq4orVtfXH5Noj_7d4zbS",
    "https://drive.google.com/uc?id=11s4xFkYI5o-tNYqvYq3pcJLhtJKggEIk",
    "https://drive.google.com/uc?id=1fMpg2uSMJEcyDb-ar7zXrUwTVaiftbj-",
    "https://drive.google.com/uc?id=1cxjOJFKIkye41jR5MWbv-5MnUQ7lq_2g",
    "https://drive.google.com/uc?id=1Pou8ad_pOLbPMe3i5_RIL6DfZLBdN3hd",
    "https://drive.google.com/uc?id=10VPBQBJqqyWUFiqujPrIFvhjGuYke8Ej",
    "https://drive.google.com/uc?id=1jZt7j1QEEBCxc4ekUgIkjQFFcfJy36eG",
    "https://drive.google.com/uc?id=1A0wVi0q7TlCi_9UI5OMOwdxFtdbgZ1D6",
    "https://drive.google.com/uc?id=1Db7VVDzGbqkw6R425khje57eObQGJEhJ",
    "https://drive.google.com/uc?id=1Yc3AwGSZJ47Vh6TGQ_GhUpv01IUbgokT",
    "https://drive.google.com/uc?id=1WyN_SrnLb531-3LV-oFlvSFThPj1ybAY",
    "https://drive.google.com/uc?id=11XXi3YBPxHOkWhlhwLah0YerkZPLRziV",
    "https://drive.google.com/uc?id=1GLVyxJRVbANYcW4cULhmc954wOf17qvW",
    "https://drive.google.com/uc?id=1c5gJU2YFRyNOHqc-CV8vVk_xGClYtdbv",
    "https://drive.google.com/uc?id=1eTUIWIRecvZF5d9ybCOgoUbBs0b4s3Rg",
    "https://drive.google.com/uc?id=1cTejN1WGcOl5_XSJM9Os6cMz192Nsevq",
  ];
  return (<div className="h-full w-full flex bg-blue-200 lg:gap-8 lg:pl-20 items-center justify-center pb-2">
    {/* <div className="flex items-center p-8 lg:p-0 justify-center h-full w-auto"><Slider sliderImages={images} /></div> */}
    <div className="flex p-12 items-center justify-center h-full w-auto">< SignUp /></div>
  </div>)
    ;
}