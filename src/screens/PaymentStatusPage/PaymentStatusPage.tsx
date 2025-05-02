import { CheckIcon, XIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const PaymentStatusPage = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSuccess = location.state?.status === "success";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[800px] text-center">
        {isSuccess ? (
          <>
            {/* Success State */}
            <div className="w-32 h-32 bg-[#00E676] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckIcon className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-[64px] font-bold mb-4 text-[#1E1E1E]">Congratulations</h1>
            <h2 className="text-[32px] text-[#1E1E1E] mb-6">Your purchase is complete.</h2>
            <p className="text-[#1E1E1E]/70 text-xl mb-12 max-w-[600px] mx-auto">
              Thank you for choosing our product. We hope you enjoy it to the fullest and look forward to serving you again in the future.
            </p>
          </>
        ) : (
          <>
            {/* Failure State */}
            <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <XIcon className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-[64px] font-bold mb-4 text-[#1E1E1E]">Payment Failed</h1>
            <h2 className="text-[32px] text-[#1E1E1E] mb-6">Something went wrong!</h2>
            <p className="text-[#1E1E1E]/70 text-xl mb-12 max-w-[600px] mx-auto">
              We're sorry, but we couldn't process your payment. Please try again or contact our support team for assistance.
            </p>
          </>
        )}

        <Button
          className="w-full max-w-[400px] bg-[#FF7F11] hover:bg-[#FF7F11]/90 text-white text-xl font-semibold py-6 rounded-full"
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};