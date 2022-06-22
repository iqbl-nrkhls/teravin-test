import { ButtonLink } from 'libs/components/button'
import { Table } from 'libs/components/table'
import { useGlobalStore } from 'libs/store/global'

export default function ListView() {
  const forms = useGlobalStore(store => store.forms)

  return (
    <div className="p-4">
      <section className="bg-white p-6 space-y-6">
        <h1 className="text-3xl mb-6 font-semibold">Teravin test React.js</h1>

        <ButtonLink
        href="/form"
        text={
          <p><i className="fas fa-plus" /> Add Data</p>
        } />

        <Table
        header={
          ['ID', 'Nama', 'Alamat', '']
        }
        body={ forms }
        />
      </section>

    </div>
  )
}