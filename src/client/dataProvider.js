const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const addUploadFeature = (requestHandler) => (type, resource, params) => {
  if (
    (type === "UPDATE" || type === "CREATE") &&
    resource === "organisations/springville-bank/forms-register"
  ) {
    if (params.data.uri) {
      const newFiles = params.data.uri;
      if (!newFiles instanceof File) {
        return Promise.reject("Error: Not a file...");
      }

      return Promise.resolve(convertFileToBase64(newFiles))
        .then(async (base64files) => ({
          uri: base64files,
          fileName: `${newFiles.fileName}`,
        }))
        .then(async (transformedNewFiles) => {
          const data = {
            ...params.data,
            fileName: transformedNewFiles.fileName,
            uri: transformedNewFiles.uri,
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
