import Aurora from '../Packages/Aurora/Aurora';
import "../CSS/App.css";
function AuroraSet() {
  return (
      <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          zIndex: -1 // or a suitable value behind your content
      }}>
          <Aurora
              colorStops={["#424242", "#ffffff", "#575757"]}
              blend={1}
              amplitude={0.5}
              speed={1}
          />
      </div>
  );
}

export default AuroraSet;
