'use client';

import { useState } from 'react';
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


const Page = () => {

  const [textAreaInput, setTextAreaInput] = useState();

  const [isTextNotEntered, setIsTextNotEntered] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { toast } = useToast();


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
                {!isTextNotEntered && textAreaInput && <QRCode value={textAreaInput} className='m-auto' />}
                <p className='text-lg font-bold mt-3 text-blue-500 text-center'>Take a photo or screensort of the above generated QRCode to use it later</p>
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
