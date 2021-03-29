export const authClient = (client, options = {}) => {
   const {
    storageKey,
    authenticate,
    userKey,
    userField,
    permissionsKey,
    passwordField,
    usernameField,
    redirectTo,
    logoutOnForbidden,
  } = {
    storageKey: "feathers-jwt",
    authenticate: { strategy: "local" },
    userKey: "user",
    userField: "user",
    permissionsKey: "permissions",
    passwordField: "password",
    usernameField: "email",
    logoutOnForbidden: true,
    ...options,
  };

  const auth = {
    login: (params) => {
      return client
        .authenticate({
          ...authenticate,
          [usernameField]: params.username,
          [passwordField]: params.password,
        })
        .then((response) => {
          localStorage.setItem(userKey, JSON.stringify(response[userField]));
        })
        .catch((e) => {
          if (e.code === 401) {
            throw new Error("Login error..");
          }
          throw new Error("Network error");
        });
    },

    checkError: (error) => {
      const { code } = error;
      if (code === 401 || (logoutOnForbidden && code === 403)) {
        localStorage.removeItem(storageKey);
        localStorage.removeItem(permissionsKey);
        return Promise.reject({ message: true, redirectTo });
      }
      // other error code (404, 500, etc): no need to log out

      return Promise.resolve();
    },

    checkAuth: (params) => {
      const hasJwtInStorage = !!localStorage.getItem(storageKey);
      const hasReAuthenticate =
        Object.getOwnPropertyNames(client).includes("reAuthenticate") &&
        typeof client.reAuthenticate === "function";

      if (hasJwtInStorage && hasReAuthenticate) {
        return client
          .reAuthenticate()
          .then(() => Promise.resolve())
          .catch(() => {
            return Promise.reject({ redirectTo });
          });
      }

      return hasJwtInStorage
        ? Promise.resolve()
        : Promise.reject({ message: "login.required", redirectTo });
    },

    logout: () => {
      return client
        .logout()
        .then(() => {
          localStorage.removeItem(userKey);
          localStorage.removeItem(permissionsKey);
          localStorage.removeItem(storageKey);
          // TODO: return Promise.resolve('/my-custom-login');
        })
        .catch((err) => {
          console.error("Can't log out");
          console.error(err);
        });
    },

    getIdentity: () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        return Promise.resolve({
          id: user._id,
          fullName: `${user.firstName} ${user.lastName}`,
          avatar: null,
        });
      } catch (error) {
        return Promise.reject(error);
      }
    },

    // authorization
    getPermissions: async (params) => {
      try {
        const { accessToken } = await client.get("authentication");
        if (!accessToken) {
          await auth.logout();
          throw Error("No accessToken");
        }

        // Get the permissions from localstorage if any.
        const permissions = localStorage.getItem(permissionsKey);
        if (permissions && permissions !== "undefined") {
          const localStoragePermissions = JSON.parse(permissions || "{}");
          // If any, provide them.
          if (localStoragePermissions) {
            return Promise.resolve(localStoragePermissions);
          }
        }

        // Or find them from the token, save them and provide them.
        const user = JSON.parse(localStorage.getItem(userKey));
        return client
          .service(`users/:userId/permissions`)
          .find(null, { userId: user._id })
          .then(function (result) {
            localStorage.setItem(permissionsKey, JSON.stringify(result));
            return Promise.resolve(result);
          })
          .catch((e) => {
            console.log(e);
            return Promise.reject();
          });
      } catch (e) {
        await auth.logout();
        return Promise.reject();
      }
    },
  };

  return auth;
};
