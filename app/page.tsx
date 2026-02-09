
export default function HomePage() {
  return (
    <div className="bg-gray-dark">
      <h1 className="text-navy">Homepage</h1>
      <p>This is working!</p>
      {/* Test different weights - all from the variable font */}
      <p style={{ fontWeight: 200 }}>Weight 200 (might render as 300)</p>
      <p style={{ fontWeight: 300 }}>Weight 300</p>
      <p style={{ fontWeight: 350 }}>Weight 350</p>
      <p style={{ fontWeight: 400 }}>Weight 400</p>
      <p style={{ fontWeight: 500 }}>Weight 500</p>
      <p style={{ fontWeight: 600 }}>Weight 600</p>
      <p style={{ fontWeight: 700 }}>Weight 700</p>
      <p style={{ fontWeight: 800 }}>Weight 800</p>
      <p style={{ fontWeight: 900 }}>Weight 900</p>
      
      {/* Italic versions */}
      <p style={{ fontWeight: 300, fontStyle: 'italic' }}>Italic 300</p>
      <p style={{ fontWeight: 500, fontStyle: 'italic' }}>Italic 500</p>
      <p className="text-gray-light" style={{ fontWeight: 900, fontStyle: 'italic' }}>Italic 900</p>
    </div>
  )
}
