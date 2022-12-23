export const getAllDataFromXML = (file) => {
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
        }

        const impuestos = xml.getElementsByTagName('cfdi:Impuestos')
        for (const element of impuestos) {
          data.impuestos = element.getAttribute('TotalImpuestosTrasladados')
        }

        resolve(data)
      }
    })
  } catch (error) {
    console.log(error)
  }
}
