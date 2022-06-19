import { z } from "zod";

export const zodFields = z
  .array(
    z.object({
      id: z.string(),
      label: z.string(),
      type: z.string(),
      selectText: z.string().optional(),
      required: z.boolean().optional(),
    })
  )
  .optional();
export const zodRoutes = z
  .union([
    z.array(
      z.object({
        id: z.string(),
        queryValue: z.any(),
        isFallback: z.boolean().optional(),
        action: z.object({
          // TODO: Make it a union type of "customPageMessage" and ..
          type: z.string(),
          value: z.string(),
        }),
      })
    ),
    z.null(),
  ])
  .optional();
