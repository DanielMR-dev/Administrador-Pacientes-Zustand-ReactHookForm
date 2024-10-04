import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';
import { DraftPatient, Patient } from "./types";

// Definicion del State para los pacientes
type PatientState = {
    patients: Patient[];
    activeId: Patient['id'];
    addPatient: (data: DraftPatient) => void;
    deletePatient: (id: Patient['id']) => void;
    getPatientById: (id: Patient['id']) => void;
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
    activeId: '',
    addPatient: (data) => {
        const newPatient = createPatient(data);
        set((state) => ({
            patients: [...state.patients, newPatient]
        }));   
    },
    deletePatient: (id) => {
        set((state) => ({
            patients: state.patients.filter(patient => patient.id !== id)
        }));
    },
    getPatientById: (id) => {
        set(() => ({
            activeId: id
        }));
    }
}));