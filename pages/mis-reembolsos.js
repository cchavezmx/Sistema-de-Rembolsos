import TablaReembolsos from '../view/TablaReembolsos'

const data = [
  {
    _id: {
      $oid: '63b5ef60bf62bea796b4cc14'
    },
    status: 'Pendiente',
    owner: 'Carlos',
    finalDate: '2023-01-18',
    initialDate: '2023-01-04',
    comprobantes: [
      {
        concepto: 'TEST01',
        obra: 'BERSHKA PLAYA DE CARMEN',
        uuid: '284F6AE6-9B3D-4E80-BC02-5410D424D7AC',
        internalId: 'e6d00a24-53b2-4d59-8c08-33239c6a1d00&1672867649466',
        total: '93365.53',
        subtotal: '80487.53',
        impuestos: '12878.00',
        facturaFolio: 'A - 1',
        proovedor: 'MORAJEN',
        facturaDate: '02/05/2022',
        metodoPago: 'Por definir',
        pdf: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2Fe6d00a24-53b2-4d59-8c08-33239c6a1d00%261672867649466%2F284F6AE6-9B3D-4E80-BC02-5410D424D7AC.pdf?alt=media&token=0a413ef1-1785-4111-8345-5327246d6392',
        xml: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2Fe6d00a24-53b2-4d59-8c08-33239c6a1d00%261672867649466%2F284F6AE6-9B3D-4E80-BC02-5410D424D7AC.xml?alt=media&token=1398b803-0739-4bda-a7d5-022dbb082a12'
      },
      {
        concepto: 'TEST01',
        obra: 'BERSHKA PLAYA DE CARMEN',
        uuid: '77822CE5-0E42-4514-9B8B-87927D926BAA',
        internalId: '10d7fe60-176a-4be6-8545-b6a4a0862320&1672867659739',
        total: '112384.73',
        subtotal: '96883.39',
        impuestos: '15501.34',
        facturaFolio: 'B - 1495',
        proovedor: 'INSTALACIONES TECNOLOGICAS APLICADAS, SA DE CV',
        facturaDate: '13/12/2022',
        metodoPago: 'Por definir',
        pdf: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2F10d7fe60-176a-4be6-8545-b6a4a0862320%261672867659739%2F77822CE5-0E42-4514-9B8B-87927D926BAA.pdf?alt=media&token=a6372828-1edc-4320-a57d-551e5be6630e',
        xml: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2F10d7fe60-176a-4be6-8545-b6a4a0862320%261672867659739%2F77822CE5-0E42-4514-9B8B-87927D926BAA.xml?alt=media&token=c2dce732-38c8-41c7-8a81-8db970b193a1'
      }
    ],
    createdAt: {
      $date: {
        $numberLong: '1672867680476'
      }
    },
    updatedAt: {
      $date: {
        $numberLong: '1672867680476'
      }
    },
    __v: 0
  },
  {
    _id: {
      $oid: '63b5ef60bf62bea796b4cc16'
    },
    status: 'Aprobado',
    owner: 'Carlos',
    finalDate: '2023-01-18',
    initialDate: '2023-01-04',
    comprobantes: [
      {
        concepto: 'TEST01',
        obra: 'BERSHKA PLAYA DE CARMEN',
        uuid: '284F6AE6-9B3D-4E80-BC02-5410D424D7AC',
        internalId: 'e6d00a24-53b2-4d59-8c08-33239c6a1d00&1672867649466',
        total: '93365.53',
        subtotal: '80487.53',
        impuestos: '12878.00',
        facturaFolio: 'A - 1',
        proovedor: 'MORAJEN',
        facturaDate: '02/05/2022',
        metodoPago: 'Por definir',
        pdf: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2Fe6d00a24-53b2-4d59-8c08-33239c6a1d00%261672867649466%2F284F6AE6-9B3D-4E80-BC02-5410D424D7AC.pdf?alt=media&token=0a413ef1-1785-4111-8345-5327246d6392',
        xml: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2Fe6d00a24-53b2-4d59-8c08-33239c6a1d00%261672867649466%2F284F6AE6-9B3D-4E80-BC02-5410D424D7AC.xml?alt=media&token=1398b803-0739-4bda-a7d5-022dbb082a12'
      },
      {
        concepto: 'TEST01',
        obra: 'BERSHKA PLAYA DE CARMEN',
        uuid: '77822CE5-0E42-4514-9B8B-87927D926BAA',
        internalId: '10d7fe60-176a-4be6-8545-b6a4a0862320&1672867659739',
        total: '112384.73',
        subtotal: '96883.39',
        impuestos: '15501.34',
        facturaFolio: 'B - 1495',
        proovedor: 'INSTALACIONES TECNOLOGICAS APLICADAS, SA DE CV',
        facturaDate: '13/12/2022',
        metodoPago: 'Por definir',
        pdf: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2F10d7fe60-176a-4be6-8545-b6a4a0862320%261672867659739%2F77822CE5-0E42-4514-9B8B-87927D926BAA.pdf?alt=media&token=a6372828-1edc-4320-a57d-551e5be6630e',
        xml: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2F10d7fe60-176a-4be6-8545-b6a4a0862320%261672867659739%2F77822CE5-0E42-4514-9B8B-87927D926BAA.xml?alt=media&token=c2dce732-38c8-41c7-8a81-8db970b193a1'
      },
      {
        concepto: 'TEST01',
        obra: 'BERSHKA PLAYA DE CARMEN',
        uuid: '77822CE5-0E42-4514-9B8B-87927D926BAA',
        internalId: '10d7fe60-176a-4be6-8545-b6a4a0862320&1672867659739',
        total: '112384.73',
        subtotal: '96883.39',
        impuestos: '15501.34',
        facturaFolio: 'B - 1495',
        proovedor: 'INSTALACIONES TECNOLOGICAS APLICADAS, SA DE CV',
        facturaDate: '13/12/2022',
        metodoPago: 'Por definir',
        pdf: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2F10d7fe60-176a-4be6-8545-b6a4a0862320%261672867659739%2F77822CE5-0E42-4514-9B8B-87927D926BAA.pdf?alt=media&token=a6372828-1edc-4320-a57d-551e5be6630e',
        xml: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2F10d7fe60-176a-4be6-8545-b6a4a0862320%261672867659739%2F77822CE5-0E42-4514-9B8B-87927D926BAA.xml?alt=media&token=c2dce732-38c8-41c7-8a81-8db970b193a1'
      }
    ],
    createdAt: {
      $date: {
        $numberLong: '1672867680476'
      }
    },
    updatedAt: {
      $date: {
        $numberLong: '1672867680476'
      }
    },
    __v: 0
  },
  {
    _id: {
      $oid: '63b5ef60bf62bea796b4cc18'
    },
    status: 'Rechazado',
    owner: 'Carlos',
    finalDate: '2023-01-18',
    initialDate: '2023-01-04',
    comprobantes: [
      {
        concepto: 'TEST01',
        obra: 'BERSHKA PLAYA DE CARMEN',
        uuid: '284F6AE6-9B3D-4E80-BC02-5410D424D7AC',
        internalId: 'e6d00a24-53b2-4d59-8c08-33239c6a1d00&1672867649466',
        total: '93365.53',
        subtotal: '80487.53',
        impuestos: '12878.00',
        facturaFolio: 'A - 1',
        proovedor: 'MORAJEN',
        facturaDate: '02/05/2022',
        metodoPago: 'Por definir',
        pdf: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2Fe6d00a24-53b2-4d59-8c08-33239c6a1d00%261672867649466%2F284F6AE6-9B3D-4E80-BC02-5410D424D7AC.pdf?alt=media&token=0a413ef1-1785-4111-8345-5327246d6392',
        xml: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2Fe6d00a24-53b2-4d59-8c08-33239c6a1d00%261672867649466%2F284F6AE6-9B3D-4E80-BC02-5410D424D7AC.xml?alt=media&token=1398b803-0739-4bda-a7d5-022dbb082a12'
      },
      {
        concepto: 'TEST01',
        obra: 'BERSHKA PLAYA DE CARMEN',
        uuid: '77822CE5-0E42-4514-9B8B-87927D926BAA',
        internalId: '10d7fe60-176a-4be6-8545-b6a4a0862320&1672867659739',
        total: '112384.73',
        subtotal: '96883.39',
        impuestos: '15501.34',
        facturaFolio: 'B - 1495',
        proovedor: 'INSTALACIONES TECNOLOGICAS APLICADAS, SA DE CV',
        facturaDate: '13/12/2022',
        metodoPago: 'Por definir',
        pdf: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2F10d7fe60-176a-4be6-8545-b6a4a0862320%261672867659739%2F77822CE5-0E42-4514-9B8B-87927D926BAA.pdf?alt=media&token=a6372828-1edc-4320-a57d-551e5be6630e',
        xml: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2F10d7fe60-176a-4be6-8545-b6a4a0862320%261672867659739%2F77822CE5-0E42-4514-9B8B-87927D926BAA.xml?alt=media&token=c2dce732-38c8-41c7-8a81-8db970b193a1'
      },
      {
        concepto: 'TEST01',
        obra: 'BERSHKA PLAYA DE CARMEN',
        uuid: '77822CE5-0E42-4514-9B8B-87927D926BAA',
        internalId: '10d7fe60-176a-4be6-8545-b6a4a0862320&1672867659739',
        total: '112384.73',
        subtotal: '96883.39',
        impuestos: '15501.34',
        facturaFolio: 'B - 1495',
        proovedor: 'INSTALACIONES TECNOLOGICAS APLICADAS, SA DE CV',
        facturaDate: '13/12/2022',
        metodoPago: 'Por definir',
        pdf: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2F10d7fe60-176a-4be6-8545-b6a4a0862320%261672867659739%2F77822CE5-0E42-4514-9B8B-87927D926BAA.pdf?alt=media&token=a6372828-1edc-4320-a57d-551e5be6630e',
        xml: 'https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/tesoreria%2F10d7fe60-176a-4be6-8545-b6a4a0862320%261672867659739%2F77822CE5-0E42-4514-9B8B-87927D926BAA.xml?alt=media&token=c2dce732-38c8-41c7-8a81-8db970b193a1'
      }
    ],
    createdAt: {
      $date: {
        $numberLong: '1672867680476'
      }
    },
    updatedAt: {
      $date: {
        $numberLong: '1672867680476'
      }
    },
    __v: 0
  }
]

export default function Tabla () {
  return <TablaReembolsos DATA={data} />
}
