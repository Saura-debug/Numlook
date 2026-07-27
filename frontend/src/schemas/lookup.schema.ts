import { z } from "zod";

export const lookupSchema=z.object({

phone:z

.string()

.min(10,"Phone number is required")

});