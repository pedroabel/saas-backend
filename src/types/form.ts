import type { createFormSchema } from "@/schemas/form-schema";
import { z } from "zod";

export type CreateFormData = z.infer<typeof createFormSchema>;
