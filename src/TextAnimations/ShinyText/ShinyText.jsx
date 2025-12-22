/*
	Installed from https://reactbits.dev/default/
*/

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`inline-block bg-clip-text text-transparent bg-[linear-gradient(120deg,rgba(255,255,255,0)_40%,rgba(0,254,140,0.8)_50%,rgba(255,255,255,0)_60%)] bg-[length:200%_100%] animate-shine ${disabled ? 'animate-none' : ''} ${className}`}
      style={{ 
        animationDuration,
        color: 'rgba(181, 181, 181, 0.64)' // Fallback/base color
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
