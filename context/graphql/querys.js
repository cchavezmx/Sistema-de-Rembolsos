const SAVE_REEMBOLSO = `
mutation SaveReembolsoPeriodo($reembolso: reembolsoInput) {
    saveReembolsoPeriodo(reembolso: $reembolso)
  }
`

export {
  SAVE_REEMBOLSO
}
