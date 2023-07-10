import loadingGif from '../assets/piq-loading.gif';

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={loadingGif} alt="Loading" className="w-28" />
    </div>
  );
}

export default Loading;
