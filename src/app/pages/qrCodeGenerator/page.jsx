'use client';

import { useState, useRef } from 'react';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import QRCode from 'react-qr-code';

import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Navbar from '@/app/components/Navbar';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useToast } from "@/components/ui/use-toast"
import ClipLoader from "react-spinners/ClipLoader";


const Page = () => {

  const [textAreaInput, setTextAreaInput] = useState();

  const [isTextNotEntered, setIsTextNotEntered] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { toast } = useToast();

  const ref = useRef(null);

  const onSubmitForm = (e) => {

    e.preventDefault();

    if (!textAreaInput) {
      setIsTextNotEntered(true);
      return;
    }

    setIsTextNotEntered(false);
    setIsModalOpen(true);

    toast({
      title: "Success",
      description: "QR Code Generated Successfully",
      style: {
        backgroundColor: "#48BB78", 
        color: "white",
      },
    });

  };

  const shareQrCode = () => {

    const svgData = ref.current.outerHTML;

    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });

    const url = URL.createObjectURL(blob);

    navigator.clipboard.writeText(url);

    toast({
      title: "Success",
      description: "QR Code Copied Successfully",
      style: {
        backgroundColor: "#48BB78", 
        color: "white",
      },
    });
    
  }


  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center flex-col gap-8">


        <p className="mt-20 lg:mt-36 text-sm px-3 lg:px-0 lg:text-lg tracking-wide text-blue-600 font-semibold text-center">
          Generate QR Code based on Text or any URL
        </p>

        <form
          className="flex items-center justify-center flex-col gap-4 w-5/6 lg:w-3/5"
          onSubmit={onSubmitForm}
        >
          <Textarea
            placeholder="enter your text or URL here."
            className="resize-none w-full h-32"
            onChange={(e) => setTextAreaInput(e.target.value)}
          />

          <Button className="w-full bg-blue-500 hover:bg-blue-400 py-5">
            Submit
          </Button>

          {isTextNotEntered && !textAreaInput && (
            <>
              <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Failed to generate QRCode as empty form is submitted.
                </AlertDescription>
              </Alert>
            </>
          )}
        </form>


        <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className='text-lg text-blue-500 m-auto mb-4'>
                <span>Generated QR Code</span>
              </AlertDialogTitle>
              <AlertDialogDescription>
                {!isTextNotEntered && textAreaInput && <QRCode ref={ref} value={textAreaInput} className='m-auto' />}
                {ref.current ? <Button className='block m-auto mt-6 mb-3 bg-white text-blue-800 border-2 border-blue-600 hover:border-blue-700 transition-all duration-150 hover:bg-slate-50' onClick={shareQrCode}>Copy QRCode</Button> : <p className='mt-3 text-center flex justify-center items-center gap-2 text-blue-700 text-base'> <span> <ClipLoader color={'#3188D5'} /> </span> <span>Creating Copy-QRCode Link</span> </p>}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction className='bg-blue-600 hover:bg-blue-800 mt-4'>Close</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>
      
    </>
  );
};

export default Page;
