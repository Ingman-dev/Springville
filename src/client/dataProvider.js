//konverterar filen till base 64
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

  //En egen dataprovider som gör att man kan ladda upp pdf filer. 
const addUploadFeature = (requestHandler) => (type, resource, params) => {
  if (
    (type === "UPDATE" || type === "CREATE") &&
    //hårdkådad resource.
    resource === "organisations/springville-bank/forms-register"
  ) {
    if (params.data.uri) {
      const newFile = params.data.uri;
      //Kollar om filen är en file om inte så returnar den ett error message. 
      if (!newFile instanceof File) {
        return Promise.reject("Error: Not a file...");
      }

      //Tar filen och konverterar den till base 64 sen sätter vi uri som base64 filen och sätter ett fileName. 
      return Promise.resolve(convertFileToBase64(newFile))
        .then(async (base64files) => ({
          uri: base64files,
          fileName: `${newFile.fileName}`,
        }))
       //Sätter uri och fileName propsen på övergripande filen.
        .then(async (transformednewFile) => {
          const data = {
            ...params.data,
            fileName: transformednewFile.fileName,
            uri: transformednewFile.uri,
          };
          const result = await requestHandler(type, resource, {
            ...params,
            data,
          });
          return result;
        });
    }
  }

  return requestHandler(type, resource, params);
};

export default addUploadFeature;
