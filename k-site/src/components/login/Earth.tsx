import earthImg from '@/assets/login_register/earth.png';

const Earth = () => {
  return (
    <div className="relative w-screen flex justify-center">
      <img
        src={earthImg}
        alt="Earth"
        // w-[120vw] ensures it is wider than the screen to hide the sides
        className="relative z-10 w-[120vw] max-w-none h-auto object-contain drop-shadow-[0_0_100px_rgba(168,85,247,0.4)]"
      />
    </div>
  );
};

export default Earth;