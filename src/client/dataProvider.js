const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const addUploadFeature = (requestHandler) => (type, resource, params) => {
  //Hårdkodad resource.
  if (
    (type === "UPDATE" || type === "CREATE") &&
    resource === "organisations/springville-bank/forms-register"
  ) {
    if (params.data.uri && params.data.uri.length) {

      const newFiles = params.data.uri.filter((p) => p.rawFile instanceof File);

      return Promise.all(newFiles.map(convertFileToBase64))
        .then(async (base64files) =>
          base64files.map((file64, index) => {
            const uriFile = {
              uri: file64,
              fileName: `${newFiles[index].fileName}`,
            };
            return uriFile;
          })
        )
        .then(async (transformedNewFiles) => {
          const data = {
            ...params.data,
            fileName: transformedNewFiles[0].fileName,
            uri: transformedNewFiles[0].uri,
          };
          console.log(transformedNewFiles);
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
