import loadingGif from '../assets/piq-loading.gif';

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={loadingGif} alt="Loading" />
    </div>
  );
}

export default Loading;
