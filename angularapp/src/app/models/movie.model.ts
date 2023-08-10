import { Seance } from "./seance.model"

export interface Movie {
    id: number
    title: string | null,
    description: string | null,
    posterImg: string | null,
    durationTime: number | null,
    seances: Seance[]
}