"use client";
export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      
      <section className="bg-blue-950 text-white p-12 text-center">
        <h1 className="text-5xl font-bold mb-4">ESVISA</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Asesoría migratoria profesional desde tu celular. Sin complicaciones, sin intermediarios.
        </p>
        <a href="#citas" className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold text-lg">
          Agendar asesoría ahora
        </a>
      </section>

      <section className="p-12 grid md:grid-cols-3 gap-8">
        {["Visa Americana", "Visa Canadiense", "Traducciones"].map((s) => (
          <div key={s} className="shadow-xl p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">{s}</h3>
            <p>Te guiamos paso a paso para lograr tu trámite con éxito.</p>
          </div>
        ))}
      </section>

      <section id="citas" className="p-12 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Agenda tu asesoría</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as any;
            const message = `Hola, quiero una asesoría con ESVISA:%0A%0ANombre: ${form.name.value}%0ATeléfono: ${form.phone.value}`;
            window.open(`https://wa.me/521XXXXXXXXXX?text=${message}`, "_blank");
          }}
          className="flex flex-col gap-4"
        >
          <input name="name" placeholder="Nombre" className="border p-4 rounded" required />
          <input name="phone" placeholder="Teléfono" className="border p-4 rounded" required />
          <button className="bg-blue-950 text-white py-4 rounded-2xl">
            Confirmar por WhatsApp
          </button>
        </form>
      </section>

    </div>
  );
}