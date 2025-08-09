// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
// import { Button } from '../../../components/ui/button';
// import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/alert';
// import { Progress } from '../../../components/ui/progress';
// import { Input } from '../../../components/ui/input';
// import { Label } from '../../../components/ui/label';
// import { CheckCircle, AlertCircle, Upload, FileText, XCircle, Building2 } from 'lucide-react';
// import SellerSidebar from "../../../components/SellerSidebar";

// // Define TypeScript interfaces
// interface DocumentType {
//   id: string;
//   name: string;
//   uploaded: boolean;
//   file: string | null;
// }

// type KycStatusType = 'Verified' | 'Pending' | 'Rejected' | 'More Info Needed';

// const SellerKycStatusPage: React.FC = () => {
//   const router = useRouter();

//   // Dummy KYC Status (can be 'Verified', 'Pending', 'Rejected', 'More Info Needed')
//   const [kycStatus, setKycStatus] = useState<KycStatusType>('Pending'); // Simulate initial pending status
//   const [kycMessage, setKycMessage] = useState<string>('Your KYC/KYB verification is pending. Please upload the required business documents.');
//   const [progressValue, setProgressValue] = useState<number>(30); // Simulate progress for pending

//   // Dummy data for required documents (in a real app, this would come from an API)
//   const requiredDocuments: DocumentType[] = [
//     { id: 'doc1', name: 'Company Registration Certificate', uploaded: false, file: null },
//     { id: 'doc2', name: 'GSTIN Certificate', uploaded: false, file: null },
//     { id: 'doc3', name: 'Bank Account Details (Cancelled Cheque/Bank Statement)', uploaded: false, file: null },
//     { id: 'doc4', name: 'PAN Card (Company/Proprietor)', uploaded: false, file: null },
//     { id: 'doc5', name: 'Authorized Signatory Proof (e.g., Board Resolution, POA)', uploaded: false, file: null },
//   ];

//   const [documentsToUpload, setDocumentsToUpload] = useState<DocumentType[]>(requiredDocuments);

//   const handleFileUpload = (docId: string, event: React.ChangeEvent<HTMLInputElement>): void => {
//     const file = event.target.files?.[0];
//     if (file) {
//       console.log(`Uploading ${file.name} for ${docId}`);
//       // In a real app, you'd upload the file to storage (e.g., Firebase Storage, S3)
//       // and then update the backend with the document status.
//       setDocumentsToUpload(prevDocs =>
//         prevDocs.map(doc =>
//           doc.id === docId ? { ...doc, uploaded: true, file: file.name } : doc
//         )
//       );
//       // Simulate progress update
//       setProgressValue(prev => Math.min(prev + (70 / requiredDocuments.length), 100));
//     }
//   };

//   const handleSubmitForReview = (): void => {
//     const allUploaded = documentsToUpload.every(doc => doc.uploaded);
//     if (allUploaded) {
//       setKycStatus('Pending');
//       setKycMessage('Documents submitted for review. This may take 3-5 business days for approval.');
//       setProgressValue(100); // All documents uploaded
//       console.log('Documents submitted for KYC/KYB review.');
//       // In a real app, trigger backend process for review
//     } else {
//       alert('Please upload all required documents before submitting for review.'); // Using alert for simplicity here, replace with Shadcn Dialog
//     }
//   };

//   const getStatusAlert = () => {
//     switch (kycStatus) {
//       case 'Verified':
//         return (
//           <Alert className="bg-green-600/20 border-green-500/60 text-green-100 rounded-lg shadow-md">
//             <CheckCircle className="h-5 w-5 text-green-400" />
//             <AlertTitle className="text-green-200 font-semibold">Verification Complete!</AlertTitle>
//             <AlertDescription className="text-green-100 mt-2">
//               Your business account is fully verified and ready to list inventory.
//             </AlertDescription>
//           </Alert>
//         );
//       case 'Pending':
//         return (
//           <Alert className="bg-gray-600/20 border-blue-500/60 text-blue-100 rounded-lg shadow-md">
//             <AlertCircle className="h-5 w-5 text-blue-400" />
//             <AlertTitle className="text-blue-200 font-semibold ml-7">Verification Pending</AlertTitle>
//             <div className="">
//               <Progress 
//                 value={progressValue} 
//                 className="w-full h-2 bg-slate-600 rounded-full"
//                 style={{
//                   '--progress-foreground': 'linear-gradient(90deg, #10B981, #34D399)'
//                 } as React.CSSProperties}
//               />
//               <div className="flex justify-between mt-2 text-sm text-blue-200">
//                 <span>Progress: {progressValue}%</span>
//                 <span>Keep going!</span>
//               </div>
//             </div>
//             <AlertDescription className="text-blue-100 mt-2 ml-7">{kycMessage}</AlertDescription>
//           </Alert>
//         );
//       case 'Rejected':
//         return (
//           <Alert className="bg-red-600/20 border-red-500/60 text-red-100 rounded-lg shadow-md">
//             <XCircle className="h-5 w-5 text-red-400" />
//             <AlertTitle className="text-red-200 font-semibold">Verification Rejected</AlertTitle>
//             <AlertDescription className="text-red-100 mt-2">
//               {kycMessage} Please review the reasons and re-upload corrected documents.
//             </AlertDescription>
//             <Button 
//               variant="ghost" 
//               className="text-red-300 hover:text-red-100 hover:bg-red-600/30 mt-3 px-0 transition-all duration-300" 
//               onClick={() => setKycStatus('More Info Needed')}
//             >
//               Re-upload Documents
//             </Button>
//           </Alert>
//         );
//       case 'More Info Needed':
//         return (
//           <Alert className="bg-yellow-600/20 border-yellow-500/60 text-yellow-100 rounded-lg shadow-md">
//             <AlertCircle className="h-5 w-5 text-yellow-400" />
//             <AlertTitle className="text-yellow-200 font-semibold">More Information Needed</AlertTitle>
//             <AlertDescription className="text-yellow-100 mt-2">
//               {kycMessage} Please provide the additional details requested to proceed with verification.
//             </AlertDescription>
//             <Button 
//               variant="ghost" 
//               className="text-yellow-300 hover:text-yellow-100 hover:bg-yellow-600/30 mt-3 px-0 transition-all duration-300" 
//               onClick={() => setKycStatus('Pending')}
//             >
//               Continue Upload
//             </Button>
//           </Alert>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white p-6">
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="w-1/5">
//           <SellerSidebar />
//         </div>

//         {/* Main Content */}
//         <div className="w-4/5 pl-6 m-5 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
//           <div className="space-y-8">
//             <Card className="bg-gray-800/80 backdrop-blur-sm border-slate-600/50 rounded-xl shadow-lg overflow-hidden">
//               <CardHeader className="pb-6 bg-gradient-to-r from-green-600/10 to-slate-700/20 border-b border-slate-600/40">
//                 <CardTitle className="text-2xl font-bold text-white flex items-center">
//                   <div className="p-2 rounded-lg bg-green-500 mr-3 shadow-md">
//                     <Building2 className="h-6 w-6 text-white" />
//                   </div>
//                   KYC/KYB Verification Status
//                 </CardTitle>
//                 <CardDescription className="text-slate-300 text-base mt-2">
//                   Complete your Know Your Customer (KYC) and Know Your Business (KYB) verification to gain full selling privileges.
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="space-y-6 p-6">
//                 {getStatusAlert()}

//                 {(kycStatus === 'Pending' || kycStatus === 'More Info Needed') && (
//                   <div className="space-y-5">
//                     <div className="flex items-center space-x-3 mb-5">
//                       <div className="h-0.5 flex-1 bg-green-500 rounded-full"></div>
//                       <h3 className="text-lg font-semibold text-white">Required Documents</h3>
//                       <div className="h-0.5 flex-1 bg-green-500 rounded-full"></div>
//                     </div>

//                     <div className="space-y-3">
//                       {documentsToUpload.map((doc: DocumentType, index: number) => (
//                         <div 
//                           key={doc.id} 
//                           className="group relative bg-slate-600/50 border border-slate-500/50 rounded-lg p-4 hover:border-green-500/60 hover:bg-slate-600/70 transition-all duration-300"
//                         >
//                           <div className="flex items-center justify-between">
//                             <Label 
//                               htmlFor={`file-${doc.id}`} 
//                               className="flex items-center space-x-3 flex-grow cursor-pointer group-hover:text-green-200 transition-colors duration-300"
//                             >
//                               <div className={`p-2 rounded-md ${doc.uploaded ? 'bg-green-500' : 'bg-slate-500'} transition-colors duration-300`}>
//                                 <FileText className={`h-4 w-4 ${doc.uploaded ? 'text-white' : 'text-slate-200'}`} />
//                               </div>
//                               <div className="flex-1">
//                                 <div className="flex items-center space-x-2">
//                                   <span className="text-white font-medium">{doc.name}</span>
//                                   {doc.uploaded && (
//                                     <CheckCircle className="h-4 w-4 text-green-400" />
//                                   )}
//                                 </div>
//                                 {doc.uploaded && (
//                                   <span className="text-green-400 text-sm mt-1 block">
//                                     ✓ Uploaded: {doc.file}
//                                   </span>
//                                 )}
//                               </div>
//                             </Label>

//                             <Input
//                               id={`file-${doc.id}`}
//                               type="file"
//                               className="hidden"
//                               onChange={(e) => handleFileUpload(doc.id, e)}
//                               disabled={doc.uploaded}
//                             />

//                             <Button
//                               type="button"
//                               variant="outline"
//                               size="sm"
//                               className={`ml-4 transition-all duration-300 ${
//                                 doc.uploaded 
//                                   ? 'bg-green-600 hover:bg-green-700 text-white border-green-500' 
//                                   : 'bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white border-gray-700 hover:border-green-500'
//                               }`}
//                               onClick={() => {
//                                 const fileInput = document.getElementById(`file-${doc.id}`) as HTMLInputElement;
//                                 fileInput?.click();
//                               }}
//                             >
//                               <Upload className="h-4 w-4 mr-2" />
//                               {doc.uploaded ? 'Change File' : 'Upload File'}
//                             </Button>
//                           </div>

//                           {/* Progress indicator */}
//                           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-b-xl overflow-hidden">
//                             <div 
//                               className={`h-full transition-all duration-500 ${
//                                 doc.uploaded ? 'bg-gradient-to-r from-green-500 to-green-400 w-full' : 'w-0'
//                               }`}
//                             ></div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     <Button
//                       className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
//                         documentsToUpload.some(doc => !doc.uploaded)
//                           ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 cursor-not-allowed'
//                           : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-lg hover:shadow-green-500/25'
//                       }`}
//                       onClick={handleSubmitForReview}
//                       disabled={documentsToUpload.some(doc => !doc.uploaded)}
//                     >
//                       {documentsToUpload.some(doc => !doc.uploaded) ? (
//                         <>
//                           <Upload className="h-5 w-5 mr-2" />
//                           Upload All Documents First
//                         </>
//                       ) : (
//                         <>
//                           <CheckCircle className="h-5 w-5 mr-2" />
//                           Submit for Review
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                 )}

//                 <div className="pt-8 border-t border-gray-800/40">
//                   <p className="text-center text-gray-500 mb-4">
//                     For any issues or questions regarding your verification, please contact support.
//                   </p>
//                   <div className="text-center">
//                     <Button 
//                       variant="ghost" 
//                       className="text-green-400 hover:text-green-300 hover:bg-green-900/20 transition-all duration-300"
//                       onClick={() => router.push('/seller/support')}
//                     >
//                       Contact Support
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerKycStatusPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/alert';
import { Progress } from '../../../components/ui/progress';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { CheckCircle, AlertCircle, Upload, FileText, XCircle, Building2 } from 'lucide-react';
import SellerSidebar from "../../../components/SellerSidebar";

// Define TypeScript interfaces
interface DocumentType {
  id: string;
  name: string;
  uploaded: boolean;
  file: string | null;
}

type KycStatusType = 'Verified' | 'Pending' | 'Rejected' | 'More Info Needed';

const SellerKycStatusPage: React.FC = () => {
  const router = useRouter();

  // Dummy KYC Status (can be 'Verified', 'Pending', 'Rejected', 'More Info Needed')
  const [kycStatus, setKycStatus] = useState<KycStatusType>('Pending'); // Simulate initial pending status
  const [kycMessage, setKycMessage] = useState<string>('Your KYC/KYB verification is pending. Please upload the required business documents.');
  const [progressValue, setProgressValue] = useState<number>(30); // Simulate progress for pending

  // Dummy data for required documents (in a real app, this would come from an API)
  const requiredDocuments: DocumentType[] = [
    { id: 'doc1', name: 'Company Registration Certificate', uploaded: false, file: null },
    { id: 'doc2', name: 'GSTIN Certificate', uploaded: false, file: null },
    { id: 'doc3', name: 'Bank Account Details (Cancelled Cheque/Bank Statement)', uploaded: false, file: null },
    { id: 'doc4', name: 'PAN Card (Company/Proprietor)', uploaded: false, file: null },
    { id: 'doc5', name: 'Authorized Signatory Proof (e.g., Board Resolution, POA)', uploaded: false, file: null },
  ];

  const [documentsToUpload, setDocumentsToUpload] = useState<DocumentType[]>(requiredDocuments);

  const handleFileUpload = (docId: string, event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(`Uploading ${file.name} for ${docId}`);
      // In a real app, you'd upload the file to storage (e.g., Firebase Storage, S3)
      // and then update the backend with the document status.
      setDocumentsToUpload(prevDocs =>
        prevDocs.map(doc =>
          doc.id === docId ? { ...doc, uploaded: true, file: file.name } : doc
        )
      );
      // Simulate progress update
      setProgressValue(prev => Math.min(prev + (70 / requiredDocuments.length), 100));
    }
  };

  const handleSubmitForReview = (): void => {
    const allUploaded = documentsToUpload.every(doc => doc.uploaded);
    if (allUploaded) {
      setKycStatus('Pending');
      setKycMessage('Documents submitted for review. This may take 3-5 business days for approval.');
      setProgressValue(100); // All documents uploaded
      console.log('Documents submitted for KYC/KYB review.');
      // In a real app, trigger backend process for review
    } else {
      alert('Please upload all required documents before submitting for review.'); // Using alert for simplicity here, replace with Shadcn Dialog
    }
  };

  const getStatusAlert = () => {
    switch (kycStatus) {
      case 'Verified':
        return (
          <Alert className="bg-white border-green-500/30 text-green-900 rounded-lg shadow-md">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <AlertTitle className="text-green-800 font-semibold">Verification Complete!</AlertTitle>
            <AlertDescription className="text-green-900 mt-2">
              Your business account is fully verified and ready to list inventory.
            </AlertDescription>
          </Alert>
        );
      case 'Pending':
        return (
          <Alert className="bg-white border-blue-500/30 text-blue-900 rounded-lg shadow-md">
            <AlertCircle className="h-5 w-5 text-blue-400" />
            <AlertTitle className="text-blue-800 font-semibold ml-7">Verification Pending</AlertTitle>
            <div className="ml-7">
              <Progress 
                value={progressValue} 
                className="w-full h-2 bg-gray-200 rounded-full mt-2"
              />
              <div className="flex justify-between mt-2 text-sm text-blue-700">
                <span>Progress: {progressValue}%</span>
                <span>Keep going!</span>
              </div>
            </div>
            <AlertDescription className="text-blue-900 mt-2 ml-7">{kycMessage}</AlertDescription>
          </Alert>
        );
      case 'Rejected':
        return (
          <Alert className="bg-white border-red-500/30 text-red-900 rounded-lg shadow-md">
            <XCircle className="h-5 w-5 text-red-400" />
            <AlertTitle className="text-red-800 font-semibold">Verification Rejected</AlertTitle>
            <AlertDescription className="text-red-900 mt-2">
              {kycMessage} Please review the reasons and re-upload corrected documents.
            </AlertDescription>
            <Button 
              variant="ghost" 
              className="text-red-600 hover:text-red-800 hover:bg-red-100 mt-3 px-0 transition-all duration-300" 
              onClick={() => setKycStatus('More Info Needed')}
            >
              Re-upload Documents
            </Button>
          </Alert>
        );
      case 'More Info Needed':
        return (
          <Alert className="bg-white border-yellow-500/30 text-yellow-900 rounded-lg shadow-md">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <AlertTitle className="text-yellow-800 font-semibold">More Information Needed</AlertTitle>
            <AlertDescription className="text-yellow-900 mt-2">
              {kycMessage} Please provide the additional details requested to proceed with verification.
            </AlertDescription>
            <Button 
              variant="ghost" 
              className="text-yellow-600 hover:text-yellow-800 hover:bg-yellow-100 mt-3 px-0 transition-all duration-300" 
              onClick={() => setKycStatus('Pending')}
            >
              Continue Upload
            </Button>
          </Alert>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-white flex font-inter">
      {/* Sidebar */}
      <div className="w-64 m-5">
        <SellerSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mb-2">KYC/KYB Verification</h1>
            <p className="text-gray-800 text-base">Complete your business verification to gain full selling privileges.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-400">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M18 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
            </Button>
            <div className="flex items-center space-x-3">
              <img src="https://placehold.co/40x40/22C55E/FFFFFF?text=JS" alt="John Smith" className="h-10 w-10 rounded-full border-2 border-green-500" />
              <span className="font-semibold text-white hidden sm:block">John Smith</span>
            </div>
          </div>
        </div>

        {/* Status Alert */}
        <div className="space-y-6">
          {getStatusAlert()}
        </div>

        {/* Main KYC Card */}
        <Card className="bg-gradient-to-br from-purple-100 via-gray-100 to-purple-200 border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
              <div className="p-2 rounded-lg bg-green-500 mr-3 shadow-md">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              Business Verification Documents
            </CardTitle>
            <CardDescription className="text-gray-700 text-base mt-2">
              Upload the required documents to complete your KYC/KYB verification process.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {(kycStatus === 'Pending' || kycStatus === 'More Info Needed') && (
              <div className="space-y-5">
                <div className="flex items-center space-x-3 mb-5">
                  <div className="h-0.5 flex-1 bg-green-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Required Documents</h3>
                  <div className="h-0.5 flex-1 bg-green-500 rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {documentsToUpload.map((doc: DocumentType, index: number) => (
                    <div 
                      key={doc.id} 
                      className="group relative bg-white border border-green-500/20 rounded-lg p-4 hover:border-green-500/30 hover:bg-gray-50 transition-all duration-300 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <Label 
                          htmlFor={`file-${doc.id}`} 
                          className="flex items-center space-x-3 flex-grow cursor-pointer group-hover:text-green-700 transition-colors duration-300"
                        >
                          <div className={`p-2 rounded-md ${doc.uploaded ? 'bg-green-500' : 'bg-gray-400'} transition-colors duration-300`}>
                            <FileText className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-900 font-medium">{doc.name}</span>
                              {doc.uploaded && (
                                <CheckCircle className="h-4 w-4 text-green-400" />
                              )}
                            </div>
                            {doc.uploaded && (
                              <span className="text-green-600 text-sm mt-1 block">
                                ✓ Uploaded: {doc.file}
                              </span>
                            )}
                          </div>
                        </Label>

                        <Input
                          id={`file-${doc.id}`}
                          type="file"
                          className="hidden"
                          onChange={(e) => handleFileUpload(doc.id, e)}
                          disabled={doc.uploaded}
                        />

                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className={`ml-4 transition-all duration-300 ${
                            doc.uploaded 
                              ? 'bg-green-50 hover:bg-green-100 text-green-700 border-green-300 hover:border-green-400' 
                              : 'bg-white hover:bg-green-50 text-gray-700 hover:text-green-700 border-gray-300 hover:border-green-400'
                          }`}
                          onClick={() => {
                            const fileInput = document.getElementById(`file-${doc.id}`) as HTMLInputElement;
                            fileInput?.click();
                          }}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {doc.uploaded ? 'Change File' : 'Upload File'}
                        </Button>
                      </div>

                      {/* Progress indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-xl overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${
                            doc.uploaded ? 'bg-gradient-to-r from-green-500 to-green-400 w-full' : 'w-0'
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                    documentsToUpload.some(doc => !doc.uploaded)
                      ? 'bg-gray-300 hover:bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-lg hover:shadow-green-500/25'
                  }`}
                  onClick={handleSubmitForReview}
                  disabled={documentsToUpload.some(doc => !doc.uploaded)}
                >
                  {documentsToUpload.some(doc => !doc.uploaded) ? (
                    <>
                      <Upload className="h-5 w-5 mr-2" />
                      Upload All Documents First
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Submit for Review
                    </>
                  )}
                </Button>
              </div>
            )}

            <div className="pt-8 border-t border-gray-300">
              <p className="text-center text-gray-600 mb-4">
                For any issues or questions regarding your verification, please contact support.
              </p>
              <div className="text-center">
                <Button 
                  variant="ghost" 
                  className="text-green-600 hover:text-green-800 hover:bg-green-100 transition-all duration-300"
                  onClick={() => router.push('/seller/support')}
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerKycStatusPage;