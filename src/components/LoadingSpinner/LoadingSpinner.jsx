export default function LoadingSpinner() {
  return (
    <>
    <div className="w-full flex justify-center pt-12">
      <div className="w-10 h-10 rounded-full border-4 border-neon-green/30 border-t-neon-green animate-spin" />
    </div>
    <div className="w-full flex justify-center pt-12 text-center text-white mb-200 font-bold text-lg">The initial response may take up to 20 seconds. Thank you for your patience.</div>
    </>
  );
}