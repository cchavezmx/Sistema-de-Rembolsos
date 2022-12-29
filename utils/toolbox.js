export const getAllDataFromXML = async (file) => {
  if (file.type !== 'text/xml') {
    throw new Error('Error al leer el archivo XML o no es un XML')
  }

  const blob = new Blob([file], { type: 'text/xml' })

  try {
    const fileReader = new FileReader()
    fileReader.readAsText(file, 'UTF-8')
    return new Promise((resolve) => {
      const data = {}
      fileReader.onloadend = async (e) => {
        const parser = new DOMParser()
        const xml = parser.parseFromString(e.target.result, 'text/xml')
        const comprobante = xml.getElementsByTagName('cfdi:Comprobante')
        for (const element of comprobante) {
          data.total = element.getAttribute('Total')
          data.subtotal = element.getAttribute('SubTotal')
          data.serie = element.getAttribute('Serie')
          data.folio = element.getAttribute('Folio')
          data.metodoPago = element.getAttribute('MetodoPago')
          data.formaPago = element.getAttribute('FormaPago')
          data.fecha = element.getAttribute('Fecha')
        }

        const impuestos = xml.getElementsByTagName('cfdi:Impuestos')
        for (const element of impuestos) {
          data.impuestos = element.getAttribute('TotalImpuestosTrasladados')
        }
        const emisor = xml.getElementsByTagName('cfdi:Emisor')
        for (const element of emisor) {
          data.emisor = element.getAttribute('Nombre')
          data.rfcEmisor = element.getAttribute('Rfc')
        }
        const timbreFiscalDigital = xml.getElementsByTagName('tfd:TimbreFiscalDigital')
        for (const element of timbreFiscalDigital) {
          data.uuid = element.getAttribute('UUID')
          // data.fechaTimbrado = element.getAttribute('FechaTimbrado')
          // data.selloCFD = element.getAttribute('SelloCFD')
          // data.noCertificadoSAT = element.getAttribute('NoCertificadoSAT')
          // data.selloSAT = element.getAttribute('SelloSAT')
          // data.version = element.getAttribute('Version')
        }

        resolve({ ...data, blob })
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const getPDF = async (file) => {
  if (file.type !== 'application/pdf') {
    console.log('El archivo no es un PDF')
    throw new Error('Error al leer el archivo PDF o no es un PDF')
  }

  try {
    // create a temporary URL for the PDF
    const blob = new Blob([file], { type: 'application/pdf' })
    const URLpreview = URL.createObjectURL(blob)
    return { blob, URLpreview }
  } catch (error) {
    console.log(error)
  }
}
