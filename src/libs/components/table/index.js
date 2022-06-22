export function Table ({ header, body }) {

  const hideModal = (e) => {
      const modals = document.getElementsByClassName('outside')
      for (const modal of modals) {
        modal.classList.add('hidden');
      }
  }
  
  const showModal = (e) => {
    e.target.nextElementSibling.classList.remove('hidden');
  }

  return (
    <table className="w-full">
      <thead className="bg-gray-300">
        <tr>
           {header.map((e,i) => (
             <th key={i} className="border px-4 py-2">{e}</th>
           ))}
        </tr>
      </thead>
      <tbody>
        {body.map((e,i) => (
          <tr key={i}>
            <td className="border px-4 py-2">{(i + 1)}</td>
            <td className="border px-4 py-2">{e?.namaDepan || '-'}</td>
            <td className="border px-4 py-2">{e?.alamat || '-'}</td>
            <td className="border px-4 py-2">
              <button className="mx-auto block" onClick={showModal}>
                <i className="fas fa-eye pointer-events-none"/>
              </button>
              <div
              className="outside absolute w-screen h-screen top-0 left-0 w-screen h-screen bg-gray-100/70 flex items-center justify-center p-10 hidden"
              >
                <div
                className="max-w-5xl w-full min-h-[300px] bg-white rounded-xl shadow-xl shadow-gray-500/5 relative p-8">
                  <button className="absolute top-4 right-4"
                  onClick={hideModal} >
                    <i className="fas fa-times text-3xl pointer-events-none" />
                    </button>
                    
                    <h1 className="text-2xl font-semibold mb-4">Detail Form</h1>
                    <div className="overflow-auto max-h-[80vh] space-y-4">
                      <div>
                        <p className="text-sm text-gray-400">Nama Lengkap</p>
                        <p>{`${e.namaDepan} ${e.namaBelakang}`}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p>{e.email || '-'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">no Telp</p>
                        <p>{e.telp || '-'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Tempat Lahir</p>
                        <p>{e.tempatLahir || '-'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Tanggal Lahir</p>
                        <p>{e.tanggalLahir || '-'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Alamat</p>
                        <p>{e.alamat || '-'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Agama</p>
                        <p>{e.agama || '-'}</p>
                      </div>

                      <div />
                      <div>
                        <p className="text-sm text-gray-400">Riwayat Pendidikan</p>
                        {e.pendidikan.map((v, i) => <p>{`- ${v}`}</p> )}
                      </div>

                      <div />
                      <div>
                        <p className="text-sm text-gray-400">Pengalaman Kerja</p>
                        {e.pengalaman.map((v, i) => <p>{`- ${v}`}</p> )}
                      </div>

                      <div />
                      <div>
                        <p className="text-sm text-gray-400">Keahlian</p>
                        {e.keahlian.map((v, i) => <p>{`- ${v}`}</p> )}
                      </div>
                    </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}