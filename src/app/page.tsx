'use client'
import Image from "next/image";
import { useState } from "react";
import { QrReader } from "react-qr-reader"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center text-8xl">
        PWA with nextjs
      </div>
      <div>
        <QrReader
          // constraints={{facingMode: "environment"}}
          onResult={(result:any, error:any) => {
            if (result) {
              console.log('test')
            }
            if (error) {
              // console.info(error);
            }
          }}
          // @ts-ignore
          style={{ width: "10rem", innerHeight: '10rem'}}
          className={"relative m-auto left-0 right-0 top-0"}
        />
        {/* <div className={'border-dashed border-red-500 border-4 absolute left-1/2 transform -translate-x-1/2 bg-transparent top-[20%] min-[370px]:top-[25%] min-[390px]:top-[18%] min-[540px]:top-[30%]'} style={{width: '80%', height: '30%' }}></div> */}
      </div>
    </main>
  );
}
