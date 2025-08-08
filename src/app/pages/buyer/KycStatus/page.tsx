'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/alert';
import { Progress } from '../../../components/ui/progress';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { CheckCircle, AlertCircle, Upload, FileText, XCircle, User } from 'lucide-react';
import BuyerSidebar from "../../../components/BuyerSidebar";

// Type definitions
type KycStatus = 'Verified' | 'Pending' | 'Rejected' | 'More Info Needed';

interface Document {
  id: string;
  name: string;
  uploaded: boolean;
  file: string | null;
}

interface BuyerKycStatusPageProps {
  id: string;
  name: string;
  email: string;
}

const BuyerKycStatusPage: React.FC<BuyerKycStatusPageProps> = () => {
  const router = useRouter();

  // KYC Status state with TypeScript typing
  const [kycStatus, setKycStatus] = useState<KycStatus>('Pending');
  const [kycMessage, setKycMessage] = useState<string>('Your KYC/KYB verification is pending. Please upload the required documents.');
  const [progressValue, setProgressValue] = useState<number>(30);

  // Required documents with proper typing
  const requiredDocuments: Document[] = [
    { id: 'doc1', name: 'Business Registration Certificate', uploaded: false, file: null },
    { id: 'doc2', name: 'GST Certificate', uploaded: false, file: null },
    { id: 'doc3', name: 'Bank Account Details (Cancelled Cheque/Bank Statement)', uploaded: false, file: null },
    { id: 'doc4', name: 'PAN Card (Company/Proprietor)', uploaded: false, file: null },
  ];

  const [documentsToUpload, setDocumentsToUpload] = useState<Document[]>(requiredDocuments);

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
      setKycMessage('Documents submitted for review. This may take 2-3 business days.');
      setProgressValue(100); // All documents uploaded
      console.log('Documents submitted for KYC review.');
      // In a real app, trigger backend process for review
    } else {
      alert('Please upload all required documents before submitting for review.'); // Using alert for simplicity here, replace with Shadcn Dialog
    }
  };

  const getStatusAlert = (): JSX.Element | null => {
    switch (kycStatus) {
      case 'Verified':
        return (
          <Alert className="bg-green-600/20 border-green-500/60 text-green-100 rounded-lg shadow-md">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <AlertTitle className="text-green-200 font-semibold">Verification Complete!</AlertTitle>
            <AlertDescription className="text-green-100 mt-2">
              Your account is fully verified and ready for trading.
            </AlertDescription>
          </Alert>
        );
      case 'Pending':
        return (
          <Alert className="bg-gray-600/20 border-blue-500/60 text-blue-100 rounded-lg shadow-md">
            <AlertCircle className="h-5 w-5 text-blue-400" />
            <AlertTitle className="text-blue-200 font-semibold ml-7">Verification Pending</AlertTitle>
            <div className="">
              <Progress 
                value={progressValue} 
                className="w-full h-2 bg-slate-600 rounded-full"
                style={{
                  '--progress-foreground': 'linear-gradient(90deg, #10B981, #34D399)'
                } as React.CSSProperties}
              />
              <div className="flex justify-between mt-2 text-sm text-blue-200">
                <span>Progress: {progressValue}%</span>
                <span>Keep going!</span>
              </div>
            </div>
            <AlertDescription className="text-blue-100 mt-2 ml-7">{kycMessage}</AlertDescription>
            
          </Alert>
        );
      case 'Rejected':
        return (
          <Alert className="bg-red-600/20 border-red-500/60 text-red-100 rounded-lg shadow-md">
            <XCircle className="h-5 w-5 text-red-400" />
            <AlertTitle className="text-red-200 font-semibold">Verification Rejected</AlertTitle>
            <AlertDescription className="text-red-100 mt-2">
              {kycMessage} Please review and re-upload.
            </AlertDescription>
            <Button 
              variant="ghost" 
              className="text-red-300 hover:text-red-100 hover:bg-red-600/30 mt-3 px-0 transition-all duration-300" 
              onClick={() => setKycStatus('More Info Needed')}
            >
              Re-upload Documents
            </Button>
          </Alert>
        );
      case 'More Info Needed':
        return (
          <Alert className="bg-yellow-600/20 border-yellow-500/60 text-yellow-100 rounded-lg shadow-md">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <AlertTitle className="text-yellow-200 font-semibold">More Information Needed</AlertTitle>
            <AlertDescription className="text-yellow-100 mt-2">
              {kycMessage} Please provide the additional details requested.
            </AlertDescription>
            <Button 
              variant="ghost" 
              className="text-yellow-300 hover:text-yellow-100 hover:bg-yellow-600/30 mt-3 px-0 transition-all duration-300" 
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

  const handleContactSupport = (): void => {
    router.push('/buyer/support');
  };

  const handleFileInputClick = (docId: string): void => {
    const fileInput = document.getElementById(`file-${docId}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/5">
          <BuyerSidebar />
        </div>

        {/* Main Content */}
        <div className="w-4/5 pl-6 m-5">
          <div className="space-y-8">
            <Card className="bg-gray-800/80 backdrop-blur-sm border-slate-600/50 rounded-xl shadow-lg overflow-hidden">
              <CardHeader className="pb-6 bg-gradient-to-r from-green-600/10 to-slate-700/20 border-b border-slate-600/40">
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <div className="p-2 rounded-lg bg-green-500 mr-3 shadow-md">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  KYC/KYB Verification Status
                </CardTitle>
                <CardDescription className="text-slate-300 text-base mt-2">
                  Ensure your business is verified for full platform access.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 p-6">
                {getStatusAlert()}

                {(kycStatus === 'Pending' || kycStatus === 'More Info Needed') && (
                  <div className="space-y-5">
                    <div className="flex items-center space-x-3 mb-5">
                      <div className="h-0.5 flex-1 bg-green-500 rounded-full"></div>
                      <h3 className="text-lg font-semibold text-white">Required Documents</h3>
                      <div className="h-0.5 flex-1 bg-green-500 rounded-full"></div>
                    </div>

                    <div className="space-y-3">
                      {documentsToUpload.map((doc: Document, index: number) => (
                        <div 
                          key={doc.id} 
                          className="group relative bg-slate-600/50 border border-slate-500/50 rounded-lg p-4 hover:border-green-500/60 hover:bg-slate-600/70 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <Label 
                              htmlFor={`file-${doc.id}`} 
                              className="flex items-center space-x-3 flex-grow cursor-pointer group-hover:text-green-200 transition-colors duration-300"
                            >
                              <div className={`p-2 rounded-md ${doc.uploaded ? 'bg-green-500' : 'bg-slate-500'} transition-colors duration-300`}>
                                <FileText className={`h-4 w-4 ${doc.uploaded ? 'text-white' : 'text-slate-200'}`} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-white font-medium">{doc.name}</span>
                                  {doc.uploaded && (
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                  )}
                                </div>
                                {doc.uploaded && (
                                  <span className="text-green-400 text-sm mt-1 block">
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
                                  ? 'bg-green-600 hover:bg-green-700 text-white border-green-500' 
                                  : 'bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white border-gray-700 hover:border-green-500'
                              }`}
                              onClick={() => handleFileInputClick(doc.id)}
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              {doc.uploaded ? 'Change File' : 'Upload File'}
                            </Button>
                          </div>

                          {/* Progress indicator */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-b-xl overflow-hidden">
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
                          ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 cursor-not-allowed'
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

                <div className="pt-8 border-t border-gray-800/40">
                  <p className="text-center text-gray-500 mb-4">
                    For any issues or questions regarding your verification, please contact support.
                  </p>
                  <div className="text-center">
                    <Button 
                      variant="ghost" 
                      className="text-green-400 hover:text-green-300 hover:bg-green-900/20 transition-all duration-300"
                      onClick={handleContactSupport}
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerKycStatusPage;