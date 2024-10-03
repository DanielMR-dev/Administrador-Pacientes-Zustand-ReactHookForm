import { create } from "zustand";
import { Patient } from "./types";

// Definicion del State para los pacientes
type PatientState = {
    patients: Patient[];
}

// Creacion del Store de pacientes
export const usePatientStore = create<PatientState>(() => ({
    patients: []
}));