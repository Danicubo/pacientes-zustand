type PatientDetailElementProps = {
    label: string
    data: string
}

export default function PatientDetailElement({label, data} : PatientDetailElementProps) {
  return (
    <p className="font-bold mb-3 text-gray-700">
      {label} {""}
      <span className="font-normal normal-case">{data}</span>
    </p>
  );
}
