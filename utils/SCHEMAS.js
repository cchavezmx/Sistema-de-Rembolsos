import { z } from 'zod'

export const schemaValeAzul = z.object({
  concepto: z.string().min(1, 'Este campo es requerido'),
  obra: z.string().min(1, 'Este campo es requerido'),
  facturaFolio: z.string().min(1, 'Este campo es requerido'),
  facturaDate: z.string().min(1, 'Este campo es requerido'),
  metodoPago: z.string().min(1, 'Este campo es requerido'),
  subtotal: z.string().min(1, 'Este campo es requerido'),
  impuestos: z.string().min(1, 'Este campo es requerido'),
  total: z.string().min(1, 'Este campo es requerido'),
  otroimpuesto: z.string().min(1, 'Este campo es requerido'),
  proveedor: z.string().min(1, 'Este campo es requerido')
})

export const schemaDeducible = z.object({
  concepto: z.string().min(1, 'Este campo es requerido'),
  obra: z.string().min(1, 'Este campo es requerido')
})

export const schemaDate = z.object({
  initialDate: z.string().min(1, 'La fecha inicial es requerida'),
  finalDate: z.string().min(1, 'La fecha final es requerida')
})
