import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Karan Singh Sisodia — @AsyncOwl — AI & Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#2E294E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ color: '#FFD400', fontSize: 20, marginBottom: 16 }}>
          @AsyncOwl
        </div>
        <div
          style={{
            color: '#F1E9DA',
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Karan Singh Sisodia
        </div>
        <div style={{ color: '#D90368', fontSize: 28, marginTop: 20 }}>
          Technical Lead · AI & Software Engineering
        </div>
        <div
          style={{
            color: '#F1E9DA',
            fontSize: 20,
            marginTop: 12,
            opacity: 0.7,
          }}
        >
          Chandigarh, India · 16+ Years Experience
        </div>
      </div>
    ),
    { ...size }
  )
}
