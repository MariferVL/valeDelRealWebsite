import Script from 'next/script'

export default function Loading() {
  return (
    // FIXME:
    <div className="flex flex-col justify-center items-center h-screen bg-[url('/images/load2.webp')] bg-cover bg-center bg-no-repeat">
      <Script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module" />
      <dotlottie-player src="https://lottie.host/481006b9-13e1-4fdd-bcc7-c476d686201c/1OfqrrvbWH.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></dotlottie-player>
    </div>
  )
}
