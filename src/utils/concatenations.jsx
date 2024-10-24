const ConcatenatePatientRecord = (array) => {
  if (array.length > 0) {
    return array.map((item) => {
      return {
        ...item,
        patientInfo:
          item?.tower?.name + item?.level?.name + (item?.bed?.bedNo ?? ""),
      };
    });
  }
  return array;
};

export default ConcatenatePatientRecord;
