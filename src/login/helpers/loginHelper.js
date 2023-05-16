export const isAdmin = () => {
    return authUser("ROL_ADMINISTRATIVO");
  };
  
  export const isSuperAdmin = () => {
    return authUser("ROL_SUPERADMIN");
  };

  export const isUser = () => {
    return authUser("ROL_CLIENTE");
  };
  
  export const authUser = (userTypes) => {
    const token = localStorage.getItem('token');
    if (token) {
      const [header, payload, signature] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      const userRole = decodedPayload.rol;
  
      // if (Array.isArray(userTypes) && userTypes.includes(userRole)) {
      //   return true;
      // } else 
      if (userRole === userTypes) {
        return true;
      }
    }
    return false;
  };

  export const isUserLogged = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;

}
  