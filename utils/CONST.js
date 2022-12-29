export const flexColumn = {
  minWidth: '700px', height: '100%', padding: '0 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'
}
export const title = { textAlign: 'center', fontWeight: '800', padding: '10px 0' }

export const metodoPago = ['Efectivo', 'Cheque', 'Transferencia', 'Tarjeta de Credito', 'Tarjeta de Debito']

export const CAT_SAT_FORMAPAGO = {
  '01': 'Efectivo',
  '02': 'Cheque nominativo',
  '03': 'Transferencia electrónica de fondos',
  '04': 'Tarjeta de crédito',
  '05': 'Monedero electrónico',
  '06': 'Dinero electrónico',
  '08': 'Vales de despensa',
  12: 'Dación en pago',
  13: 'Pago por subrogación',
  14: 'Pago por consignación',
  15: 'Condonación',
  17: 'Compensación',
  23: 'Novación',
  24: 'Confusión',
  25: 'Remisión de deuda',
  26: 'Prescripción o caducidad',
  27: 'A satisfacción del acreedor',
  28: 'Tarjeta de débito',
  29: 'Tarjeta de servicios',
  30: 'Aplicación de anticipos',
  99: 'Por definir'
}

export const DATE_BEUTY = (date) => {
  const d = new Date(date)
  return new Intl.DateTimeFormat('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(d)
}

export const MONY_BEUTY = (mony) => {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(mony)
}
