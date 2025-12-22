import Particles from '../../Backgrounds/Particles/Particles.jsx';

export default function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-[600px] -z-50 pointer-events-none">
      <Particles
        particleColors={['#00f7fd', '#00fe8c']}
        particleCount={200}
        particleSpread={10}
        speed={0.5}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
        cameraDistance={20}
      />
    </div>
  );
}
