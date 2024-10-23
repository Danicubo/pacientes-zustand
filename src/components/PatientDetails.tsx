import { usePatientStore } from "../store";
import { Patient } from "../types";
import {toast} from "react-toastify"
import PatientDetailElement from "./PatientDetailElement";

type PatientDetailsProps = {
  patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

  const deletePatient = usePatientStore((state) => state.deletePatient)
  const gePatientId = usePatientStore((state) => state.getPatientId)

  const handleClick = () => {
    deletePatient(patient.id)
    toast.error('Paciente Eliminado')
  }

  return (
    <div className="mx-5 my-10 px-5 flex-row py-10 bg-white shadow-md rounded-xl">
      <PatientDetailElement label="ID" data={patient.id} />
      <PatientDetailElement label="Nombre" data={patient.name} />
      <PatientDetailElement label="Propietario" data={patient.caretaker} />
      <PatientDetailElement label="Email" data={patient.email} />
      <PatientDetailElement label="Fecha Alta" data={patient.date.toString()} />
      <PatientDetailElement label="Síntomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between m-10">
        <button onClick={() => gePatientId(patient.id)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
        <button onClick={handleClick} className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
      </div>
    </div>
  )
}
