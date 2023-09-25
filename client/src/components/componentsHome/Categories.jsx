export const Categories = () => {
    return (
      <>
        <h1 className="text-center font-bold text-3xl font-farro my-10">Elige tu estilo</h1>
        <section className="h-[120vh] mx-5">
          <div className="grid grid-cols-2 gap-1">
            <div>
              <h1 className="text-center font-farro font-bold text-2xl">Mujer</h1>
              <img src="https://img.freepik.com/foto-gratis/mujer-sonriente-estilo-atractivo-elegir-ropa-tienda-ropa_285396-4753.jpg?w=2000" alt="" />
            </div>
            <div>
              <h1 className="text-center font-farro font-bold text-2xl">Hombre</h1>
              <img src="https://img.freepik.com/fotos-premium/elegante-fresco-contemporaneo-hombre-confiado-apoya-baranda-urbana-al-aire-libre-estilo-moda-tendencia-moda-informal-vestuario-masculino-verano-ropa-hombre-moda-ropa-moda-asequible_474717-19948.jpg?w=2000" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="h-[45%]">
              <h1 className="text-center font-farro font-bold text-2xl">Camisas</h1>
              <img src="https://http2.mlstatic.com/D_NQ_NP_739012-MCO49024898964_022022-O.jpg" className="w-full h-[100%]" alt="" />
            </div>
            <div className="h-[45%]">
              <h1 className="text-center font-farro font-bold text-2xl">Sudaderas</h1>
              <img src="https://superdrycolombia.vteximg.com.br/arquivos/ids/235672-820-1000/Sudadera-Para-Hombre-Script-Style-Workwear-Jogger-Superdry623.jpg?v=637889373651200000" className="w-full h-[100%]" alt="" />
            </div>
            <div className="h-[45%]">
              <h1 className="text-center font-farro font-bold text-2xl">Blusas</h1>
              <img src="https://i.pinimg.com/originals/27/15/b6/2715b649fedb1b215be042718737d459.jpg" className="w-full h-[100%]" alt="" />
            </div>
            <div className="h-[45%]">
              <h1 className="text-center font-farro font-bold text-2xl">Ropa interior</h1>
              <img src="https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9wYSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="w-full h-[100%]" alt="" />
            </div>
          </div>
        </section>
      </>
    )
}