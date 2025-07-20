export const auth = {
  isAuthenticated: false,
  login(fn) {
    auth.isAuthenticated = true;
    setTimeout(fn, 500);
  },
  logout(fn) {
    auth.isAuthenticated = false;
    setTimeout(fn, 500);
  },
};

export const fakeLoginApiFn = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@mail.com" && password === "123") {
        resolve({
          token: "fake-jwt-token",
          user: { id: 1, name: "Admin User", email: "admin@gmail.com" },
        });
      }else {
        reject(new Error("Invalid email or password"));
      }
    },150);
  });
};
