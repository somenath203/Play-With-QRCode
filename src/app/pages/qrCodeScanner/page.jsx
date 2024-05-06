'use client';
import QrScanner from 'qr-scanner';
import { useState, useRef, useEffect } from 'react';

import Navbar from '@/app/components/Navbar';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';


const Page = () => {

  const [qrResult, setQrResult] = useState('');

  const videoRef = useRef(null);

  const [isDisplayWarningMessage, setIsDisplayWarningMessage] = useState(true);

  const [isScanningWindowOpen, setIsScanningWindowOpen] = useState(false);

  const [isShowStartScanBtn, setIsShowStartScanBtn] = useState(true);


  const startScan = () => {

    if(videoRef.current && isScanningWindowOpen) {

       setIsDisplayWarningMessage(false);

        const qrScanner = new QrScanner(videoRef.current, (result) => {
            setQrResult(result);
            setIsScanningWindowOpen(false);
            qrScanner.stop();
            setIsShowStartScanBtn(false);
        });

        qrScanner.start();
    }

  };

  useEffect(() => {
    startScan();
  }, [isScanningWindowOpen]);


  const scanAgain = () => {
    setQrResult('');
    setIsShowStartScanBtn(true);
    setIsScanningWindowOpen(false);
    setIsDisplayWarningMessage(true);
  }

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center flex-col gap-8">
        <p className="mt-20 lg:mt-36 text-sm px-3 lg:px-0 lg:text-lg tracking-wide text-blue-600 font-semibold text-center">
          Click the button below to scan QR Codes
        </p>

        {!isScanningWindowOpen && isShowStartScanBtn && <Button className="bg-blue-500 hover:bg-blue-400 py-10 text-xl w-72" onClick={() => setIsScanningWindowOpen(true)}>
          Scan QR Code
        </Button>}

        {isDisplayWarningMessage && <Alert className='w-5/6 lg:w-2/4 border border-orange-400 text-orange-400'>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
          This QR code scanner can only display text and URLs. If the scanned data contains other types of information other than text or URL for example image, then, no result will be returned by the scanner.
          </AlertDescription>
        </Alert>}

        {isScanningWindowOpen && <div className='w-full'>
            <video ref={videoRef} className='m-auto w-3/4 lg:w-1/4'></video>
        </div>}

        
        {qrResult && (
          <div className="mt-4 border border-blue-500 rounded-lg px-20 py-6 shadow-lg text-center">
            <p className="text-lg text-blue-600">QR Code Result:</p>
            <p className="text-sm">{qrResult}</p>
          </div>
        )}

        {!isScanningWindowOpen && !isShowStartScanBtn && <Button className="bg-blue-500 hover:bg-blue-400 py-10 text-xl w-72" onClick={scanAgain}>
          Scan Again
        </Button>}

      </div>
    </>
  );
};

export default Page;
