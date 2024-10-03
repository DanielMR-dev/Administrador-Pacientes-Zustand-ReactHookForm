import { create } from "zustand";
import { DraftPatient, Patient } from "./types";

// Definicion del State para los pacientes
type PatientState = {
    patients: Patient[];
    addPatient: (data: DraftPatient) => void
}

// Creacion del Store de pacientes
export const usePatientStore = create<PatientState>(() => ({
    patients: [],
    addPatient: (data) => {
        
    }
}));