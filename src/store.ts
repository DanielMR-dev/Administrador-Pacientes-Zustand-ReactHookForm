import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';
import { DraftPatient, Patient } from "./types";

// Definicion del State para los pacientes
type PatientState = {
    patients: Patient[];
    addPatient: (data: DraftPatient) => void
};

const createPatient = (patient: DraftPatient) : Patient => {
    return {
        ...patient,
        id: uuidv4()
    };
};

// Creacion del Store de pacientes
export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    addPatient: (data) => {
        const newPatient = createPatient(data);
        set((state) => ({
            patients: [...state.patients, newPatient]
        }));   
    }
}));