import { SignIn } from "@clerk/nextjs";
import Slider from "@/components/slider";
import Reviews from "@/components/reviews";
import VideoSlider from "@/components/videoSlider";

export default function Page() {

  // https://drive.google.com/uc?id=${imageID or driveImageHashID}
  const images = [
    "https://drive.google.com/uc?id=1yMK7snCwM2dcEv0J8iAjk__8I5jXO1aj",
    "https://drive.google.com/uc?id=1ebvRU9RMOseCuqLk4KJayXGW1L88Dbrf",
    "https://drive.google.com/uc?id=1Q05XgH-AbU6aqJRZxycZD7jtiCv-XGfV",
    "https://drive.google.com/uc?id=11s4xFkYI5o-tNYqvYq3pcJLhtJKggEIk",
    "https://drive.google.com/uc?id=1fMpg2uSMJEcyDb-ar7zXrUwTVaiftbj-",
    "https://drive.google.com/uc?id=1cxjOJFKIkye41jR5MWbv-5MnUQ7lq_2g",
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
  ];
  const images2 = [
    "https://drive.google.com/uc?id=195snmtKk0Wrxq4orVtfXH5Noj_7d4zbS",
    "https://drive.google.com/uc?id=1Pou8ad_pOLbPMe3i5_RIL6DfZLBdN3hd",
    "https://drive.google.com/uc?id=1cTejN1WGcOl5_XSJM9Os6cMz192Nsevq",
  ];
  const images3 = [
    "https://drive.google.com/uc?id=1hl0fUcD0QBbGB2cM6AfHNOZW1VDVWjf5",
    "https://drive.google.com/uc?id=1aSInkV4L0B_GzkMtKsG3kmHZhkqzPgxt",
  ];

  // https://drive.google.com/file/d/${VIDEO_ID or driveVideoHashID}/view?usp=sharing

  const videos = ["https://drive.google.com/file/d/1RexuimOcOinKOb2s5uAF4c8Tuoy-CqCN/preview",
    "https://drive.google.com/file/d/1XySqF_kiCTExvUQMTfj-cB4ccf2SoZto/preview",
    "https://drive.google.com/file/d/1fPb43waQoDiDiyuLmq8DkpcjIFnStu6Z/preview",
    "https://drive.google.com/file/d/1z2h6BcGxWqTfK6Aoer3f_dQk4vxcwu7q/preview",
    "https://drive.google.com/file/d/1OtawtN287Z4tr1hGOcEX6xAkZeh6a9RW/preview",
    "https://drive.google.com/file/d/1SV1b2YSawchek1NtEmqnlHDyrCeJibYf/preview"
  ];
  return (<div className=" flex flex-col bg-blue-200">
    <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:pl-20 items-center justify-center pb-2">
      <div className="flex items-center p-8 lg:p-0 justify-center mt-10 h-full w-auto"><Slider sliderImages={images} /></div>
      <div className="flex p-12 items-center justify-center h-full w-auto">< SignIn /></div>
    </div>
    <div className="flex text-center justify-center my-8 text-blue-950 text-lg md:text-2xl lg:text-4xl font-bold underline underline-offset-4 italic">Results</div>
    <div className="flex flex-col items-center justify-center lg:flex-row gap-8">
      <div className=" flex items-center w-full lg:w-3/4 overflow-hidden">
        <Slider sliderImages={images2} />
      </div>
      <div className=" flex items-center w-full lg:w-1/4 overflow-hidden">
        <Slider sliderImages={images3} />
      </div>
    </div>
    <div className=" flex items-center w-full overflow-hidden">
      <Reviews />
    </div>
    <div className="flex text-center justify-center text-blue-950 text-lg my-8 md:text-2xl lg:text-4xl font-bold underline underline-offset-4 italic">Review and Promotional Videos</div>
    <div className=" flex items-center w-full px-12 overflow-hidden shadow-xl shadow-black rounded-xl">
      <VideoSlider sliderVideos={videos} />
    </div>
  </div>)
    ;
}