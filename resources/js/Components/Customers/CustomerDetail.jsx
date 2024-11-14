import CountryWithIcon from '@/Components/Countries/CountryWithIcon'
import CustomerDetailItem from '@/Components/Customers/CustomerDetailItem'
import DataTableChangeStatus from '@/Components/Datatable/DataTableChangeStatus'
import CustomerConfirm from '@/Components/Customers/CustomerConfirm'

const CustomerDetail = ({ customer }) => {
  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg p-3 mt-4">
      <div className="col-span-1">
        <CustomerDetailItem label="País" custom={<CountryWithIcon country={customer.country}/>} />
        <CustomerDetailItem label="Estado" value={customer.state.name} />
        <CustomerDetailItem label="Nombre" value={customer.name} />
        <CustomerDetailItem label={customer.document_type === 'passport' ? 'Pasaporte' : 'DNI'} value={customer.document_number} />
        <CustomerDetailItem label="Correo" value={customer.email} />
        <CustomerDetailItem label="Teléfono" value={customer.phone} />
        <CustomerDetailItem label="Dirección" value={customer.address} />
        <CustomerDetailItem label="Ocupación" value={customer.occupation} />
        <CustomerDetailItem label="Expuesto" value={customer.politically_exposed ? 'Si' : 'No'} />
        <CustomerDetailItem label="Activo" custom={<DataTableChangeStatus data={customer} routeName="dashboard.customers.status" />} />
        <CustomerDetailItem
          label="Confirmado"
          value={
            customer.confirmed_by
              ? `Por ${customer.confirmed_by.name} el ${customer.confirmed_at}`
              : null
          }
          custom={!customer.confirmed_by ? <CustomerConfirm customer={customer} /> : null}
        />
      </div>
      <div className="grid grid-cols-2 py-2 border-b border-gray-200 gap-2 items-center">
        <img src="https://rutificadorchile.com/wp-content/uploads/2020/07/dni.jpeg" className="w-full h-full rounded-lg mx-auto" alt="Documento de identidad"/>
        <img src="https://st5.depositphotos.com/79147440/65671/i/450/depositphotos_656719760-stock-photo-blonde-brazilian-woman-holding-identity.jpg" className="w-full h-full rounded-lg mx-auto" alt="Foto del cliente"/>
      </div>
    </div>
  )
}

export default CustomerDetail
