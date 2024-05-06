import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/app/components/Navbar';


const Page = () => {
  const cardOptions = [
    {
      id: 1,
      nameOfTheCard: 'QR Code Generator',
      iconOfTheCard: (
        <i className="ri-add-line text-6xl text-blue-600"></i>
      ),
      navigateTo: '/pages/qrCodeGenerator'
    },
    {
      id: 2,
      nameOfTheCard: 'QR Code Scanner',
      iconOfTheCard: (
        <i className="ri-qr-scan-2-line text-6xl text-blue-600"></i>
      ),
      navigateTo: '/pages/qrCodeScanner'
    },
  ];
  return (
    <>
      <Navbar />

      <div className="flex items-center flex-col gap-8 w-full">

        <p className="mt-10 lg:mt-28 text-lg tracking-wide text-blue-600 font-semibold">Choose an Option</p>

        <div className="flex items-center flex-col lg:flex-row gap-5 w-96 lg:w-9/12">
          {cardOptions.map((card) => (
            <Link className="m-auto w-2/4 mb-5" key={card.id} href={card.navigateTo}>
              <Card className='hover:cursor-pointer hover:bg-slate-50 transition-all duration-150 h-60 flex items-center justify-center flex-col'>
                <CardHeader>
                  <CardTitle>
                    <span className="text-center block mb-2">
                      {card.nameOfTheCard}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-center block">
                    {card.iconOfTheCard}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Page;
