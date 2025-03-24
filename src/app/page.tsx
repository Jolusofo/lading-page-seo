import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Viaje Mais - Agência de Viagens Aéreas</title>
        <meta name="description" content="Descubra destinos incríveis com passagens aéreas promocionais. A Viaje Mais conecta você aos melhores voos nacionais e internacionais." />
        <meta name="keywords" content="agência de viagens, passagens aéreas, voos baratos, viagens internacionais, promoções de voos" />
        <meta property="og:title" content="Viaje Mais - Agência de Viagens Aéreas" />
        <meta property="og:description" content="Descubra destinos incríveis com passagens aéreas promocionais. A Viaje Mais conecta você aos melhores voos." />
        <meta property="og:image" content="/og-image-viagem.png" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen bg-blue-50 text-gray-900">
        {/* Hero Section */}
        <section className="text-center py-20 px-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
          <h1 className="text-5xl font-bold mb-4">Explore o mundo com a Viaje Mais</h1>
          <p className="text-lg mb-6">As melhores ofertas de passagens aéreas nacionais e internacionais. Seu próximo destino começa aqui.</p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">Solicite uma cotação</button>
        </section>

        {/* Benefícios */}
        <section className="py-16 px-8 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10">Por que escolher a Viaje Mais?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-100 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Passagens com desconto</h3>
              <p>Ofertas exclusivas com os melhores preços do mercado para você economizar e viajar mais.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Atendimento personalizado</h3>
              <p>Nossa equipe está pronta para montar o roteiro ideal para sua viagem dos sonhos.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Parcelamento facilitado</h3>
              <p>Viaje agora e pague depois com condições especiais de pagamento.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center bg-sky-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Comece a planejar sua próxima aventura agora mesmo</h2>
          <p className="mb-6">Entre em contato com nossos consultores e receba um atendimento rápido e personalizado.</p>
          <button className="bg-white text-sky-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">Fale conosco</button>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-8 px-6 text-center">
          <p className="mb-2 font-semibold">© 2025 Viaje Mais - Agência de Viagens</p>
          <p className="text-sm">Rua das Viagens, 123 • São Paulo - SP • contato@viajemais.com.br</p>
        </footer>
      </main>
    </>
  );
}
