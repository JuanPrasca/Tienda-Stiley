export const Ubication = () => {
  return (
    <section className="w-full">
      <h3 className="text-[3rem] mt-11 font-bold font-farro leading-none text-center">Ubicación y Horarios</h3>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center justify-items-center">
          <h4 className="text-[1rem] font-bold text-center">Dirección</h4>
          <p className="text-center">Tv. 39B #73b-60, Laureles, Medellín</p>
          <p className="text-center">300 703 04 24</p>
          <p className="text-center">StileyStore.com.co</p>
        </div>
        <div>
          <h4 className="text-center titulo text-[1rem] font-bold">Horarios</h4>
          <div className="grid grid-cols-2">
            <div className="col d-flex justify-content-center">
              <p className="text-center">Lunes a Viernes 9 am a 8pm</p>
            </div>
            <div className="col d-flex justify-content-center">
              <p className="text-center">
                Sábados, domingos y festivos <br />
                10 am a 7pm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.052861468125!2d-75.592361585314!3d6.25676699547119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290e4f870f69%3A0xf57f97b59ef52c39!2sEstadio%20de%20F%C3%BAtbol%20Atanasio%20Girardot!5e0!3m2!1ses!2sco!4v1671175770380!5m2!1ses!2sco" className="w-full h-screen"></iframe>
      </div>
    </section>
  )
}
