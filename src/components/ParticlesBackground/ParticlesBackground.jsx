import Particles from '../../Backgrounds/Particles/Particles.jsx';

export default function Background() {
  return (
    <div
      style={{
        width: '100%',
        height: '600px',
        position: 'absolute',
        zIndex: -100,
      }}
    >
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
